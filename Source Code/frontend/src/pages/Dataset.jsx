import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Card, Col, Container, Form, Row, Spinner, Table } from 'react-bootstrap';
import ilpdCsvUrl from '../assets/Indian Liver Patient Dataset (ILPD).csv';
import '../styles/Dataset.css';

const parseCsv = (text) => {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter((l) => l.trim() !== '');
  if (lines.length === 0) return { columns: [], rows: [] };

  const columns = lines[0].split(',').map((c) => c.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const row = {};
    for (let j = 0; j < columns.length; j++) {
      row[columns[j]] = values[j] !== undefined ? values[j].trim() : '';
    }
    rows.push(row);
  }

  return { columns, rows };
};

const Dataset = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [limit, setLimit] = useState(200);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(ilpdCsvUrl);
        if (!res.ok) {
          throw new Error(`Failed to load CSV: ${res.status}`);
        }
        const text = await res.text();
        const parsed = parseCsv(text);
        setColumns(parsed.columns);
        setRows(parsed.rows);
      } catch (e) {
        setError(e?.message || 'Failed to load dataset');
        setColumns([]);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const limitedRows = useMemo(() => {
    if (!Array.isArray(rows)) return [];
    const n = Number(limit);
    if (!n || n <= 0) return rows;
    return rows.slice(0, n);
  }, [rows, limit]);

  return (
    <div className="dataset-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <Card className="dataset-card">
              <Card.Body>
                <div className="dataset-header">
                  <h2 className="dataset-title">Dataset</h2>
                  <p className="dataset-subtitle">Indian Liver Patient Dataset (ILPD) preview</p>
                </div>

                <Alert variant="info" className="dataset-legend">
                  <strong>Legend:</strong> <code>is_patient</code> value <strong>1</strong> = Liver Patient, value <strong>2</strong> = Not a Liver Patient.
                </Alert>

                <Row className="g-3 align-items-end">
                  <Col md={6}>
                    <div className="dataset-meta">
                      <span><strong>Total rows:</strong> {rows.length}</span>
                      <span><strong>Columns:</strong> {columns.length}</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="dataset-label">Show rows</Form.Label>
                      <Form.Select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                        <option value={500}>500</option>
                        <option value={1000}>1000</option>
                        <option value={0}>All</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

                <div className="dataset-table-wrap">
                  {loading ? (
                    <div className="dataset-loading">
                      <Spinner animation="border" role="status" />
                      <span className="ms-2">Loading dataset...</span>
                    </div>
                  ) : (
                    <Table responsive bordered hover className="dataset-table">
                      <thead>
                        <tr>
                          {columns.map((c) => (
                            <th key={c}>{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {limitedRows.length === 0 ? (
                          <tr>
                            <td colSpan={Math.max(columns.length, 1)} className="text-center text-muted py-4">
                              No data to display
                            </td>
                          </tr>
                        ) : (
                          limitedRows.map((row, idx) => (
                            <tr key={idx}>
                              {columns.map((c) => (
                                <td key={c}>{row?.[c] !== undefined && row?.[c] !== null ? String(row[c]) : ''}</td>
                              ))}
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dataset;
