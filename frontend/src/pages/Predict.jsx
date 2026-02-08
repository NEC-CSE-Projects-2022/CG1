import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import ResultCard from '../components/ResultCard';
import LiverHealthInfo from './LiverHealthInfo';
import '../styles/Predict.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartbeat, 
  faUtensils, 
  faBan, 
  faStethoscope, 
  faInfoCircle,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

const Predict = () => {
  const [formData, setFormData] = useState({
    Age: '',
    Gender: '',
    TB: '',
    DB: '',
    Alkphos: '',
    SGPT: '',
    SGOT: '',
    TP: '',
    ALB: '',
    'A/G Ratio': ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const requestData = {
        ...formData,
        Age: Number(formData.Age),
        Gender: formData.Gender,
        TB: Number(formData.TB),
        DB: Number(formData.DB),
        Alkphos: Number(formData.Alkphos),
        SGPT: Number(formData.SGPT),
        SGOT: Number(formData.SGOT),
        TP: Number(formData.TP),
        ALB: Number(formData.ALB),
        'A/G Ratio': Number(formData['A/G Ratio'])
      };

      const response = await axios.post(`${API_BASE_URL}/predict`, requestData);
      
      // Add analysis based on the input values
      const analysis = [];
      if (requestData.TB > 1.2) {
        analysis.push(`High Total Bilirubin (${requestData.TB}) may indicate liver function issues`);
      }
      if (requestData.SGOT > 40 || requestData.SGPT > 56) {
        analysis.push(`Elevated liver enzymes (SGOT: ${requestData.SGOT}, SGPT: ${requestData.SGPT}) may suggest liver inflammation`);
      }
      if (requestData.ALB < 3.5) {
        analysis.push(`Low Albumin (${requestData.ALB}) may indicate poor liver function`);
      }
      if (requestData['A/G Ratio'] < 1) {
        analysis.push(`Low A/G Ratio (${requestData['A/G Ratio']}) may suggest liver disease`);
      }
      
      setResult({
        ...response.data,
        analysis: analysis.length > 0 ? analysis : ['Your liver values appear to be within normal ranges.']
      });
    } catch (err) {
      const errorMessage = err.response?.data?.error || 
                         err.response?.data?.details || 
                         'An error occurred while making prediction';
      setError(errorMessage);
      console.error('Prediction error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      Age: '',
      Gender: '',
      TB: '',
      DB: '',
      Alkphos: '',
      SGPT: '',
      SGOT: '',
      TP: '',
      ALB: '',
      'A/G Ratio': ''
    });
    setResult(null);
    setError('');
  };

  return (
    <div className="predict-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="prediction-card shadow">
              <Card.Body>
                <h2 className="text-center mb-4">Liver Disease Prediction</h2>
                <p className="text-center text-muted mb-4">
                  Fill in the clinical parameters to predict the likelihood of liver disease.
                </p>
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="number"
                          name="Age"
                          value={formData.Age}
                          onChange={handleChange}
                          min="1"
                          max="120"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          name="Gender"
                          value={formData.Gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="1">Male</option>
                          <option value="0">Female</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="totalBilirubin">
                        <Form.Label>Total Bilirubin (TB)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="TB"
                          value={formData.TB}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="directBilirubin">
                        <Form.Label>Direct Bilirubin (DB)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="DB"
                          value={formData.DB}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="alkalinePhosphotase">
                        <Form.Label>Alkaline Phosphotase (Alkphos)</Form.Label>
                        <Form.Control
                          type="number"
                          name="Alkphos"
                          value={formData.Alkphos}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="alamineAminotransferase">
                        <Form.Label>Alamine Aminotransferase (SGPT)</Form.Label>
                        <Form.Control
                          type="number"
                          name="SGPT"
                          value={formData.SGPT}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="aspartateAminotransferase">
                        <Form.Label>Aspartate Aminotransferase (SGOT)</Form.Label>
                        <Form.Control
                          type="number"
                          name="SGOT"
                          value={formData.SGOT}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="totalProteins">
                        <Form.Label>Total Proteins (TP)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="TP"
                          value={formData.TP}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="albumin">
                        <Form.Label>Albumin (ALB)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="ALB"
                          value={formData.ALB}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="agRatio">
                        <Form.Label>Albumin and Globulin Ratio (A/G Ratio)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="A/G Ratio"
                          value={formData['A/G Ratio']}
                          onChange={handleChange}
                          min="0"
                          required
                        />
                        <Form.Text className="text-muted">
                          Must be between 0 and 3
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-center gap-3 mt-4">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      disabled={loading}
                      className="px-4"
                    >
                      {loading ? (
                        <>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="me-2"
                          />
                          Analyzing...
                        </>
                      ) : (
                        'Predict'
                      )}
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      type="button" 
                      onClick={handleReset}
                      className="px-4"
                    >
                      Clear
                    </Button>
                  </div>
                </Form>

                {result && (
                  <>
                    <ResultCard result={result} />
                    
                    <Card className="mt-4 health-info-card">
                      <Card.Body>
                        <h4 className="mb-4">Liver Health Insights</h4>
                        
                        {/* Prediction Analysis */}
                        {result.analysis && (
                          <div className="mb-4">
                            <h5>Prediction Analysis</h5>
                            <ul className="list-unstyled">
                              {result.analysis.map((item, index) => (
                                <li key={index} className="mb-2">
                                  <i className="fas fa-arrow-circle-right text-primary me-2"></i>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="row">
                          {/* Healthy Habits */}
                          <div className="col-md-6 mb-4">
                            <div className="p-3 bg-light rounded h-100">
                              <h5 className="text-success">
                                <i className="fas fa-heartbeat me-2"></i>
                                How to Keep Your Liver Healthy
                              </h5>
                              <ul className="list-unstyled">
                                <li>• Drink plenty of water to help flush out toxins</li>
                                <li>• Maintain a healthy body weight</li>
                                <li>• Exercise for at least 30 minutes daily</li>
                                <li>• Get vaccinated for Hepatitis A and B</li>
                                <li>• Avoid sharing personal items</li>
                              </ul>
                            </div>
                          </div>

                          {/* Healthy Diet */}
                          <div className="col-md-6 mb-4">
                            <div className="p-3 bg-light rounded h-100">
                              <h5 className="text-success">
                                <i className="fas fa-utensils me-2"></i>
                                Recommended Diet
                              </h5>
                              <ul className="list-unstyled">
                                <li>• Fresh fruits (apples, berries, papaya)</li>
                                <li>• Leafy greens (spinach, kale, methi)</li>
                                <li>• Whole grains and high-fiber foods</li>
                                <li>• Lean proteins (fish, eggs, dal)</li>
                                <li>• Healthy fats (olive oil, nuts, seeds)</li>
                              </ul>
                            </div>
                          </div>

                          {/* Things to Avoid */}
                          <div className="col-md-6 mb-4">
                            <div className="p-3 bg-light rounded h-100">
                              <h5 className="text-danger">
                                <i className="fas fa-ban me-2"></i>
                                Things to Avoid
                              </h5>
                              <ul className="list-unstyled">
                                <li>• Alcohol and smoking</li>
                                <li>• Processed and fried foods</li>
                                <li>• Excessive sugar and salt</li>
                                <li>• Red meat in excess</li>
                                <li>• Self-medication</li>
                              </ul>
                            </div>
                          </div>

                          {/* When to See a Doctor */}
                          <div className="col-md-6 mb-4">
                            <div className="p-3 bg-light rounded h-100">
                              <h5 className="text-primary">
                                <i className="fas fa-stethoscope me-2"></i>
                                When to See a Doctor
                              </h5>
                              <ul className="list-unstyled">
                                <li>• Persistent fatigue or weakness</li>
                                <li>• Yellowing of skin or eyes</li>
                                <li>• Dark urine or pale stools</li>
                                <li>• Abdominal pain or swelling</li>
                                <li>• Unexplained weight loss</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="alert alert-info mt-3">
                          <i className="fas fa-info-circle me-2"></i>
                          This information is for educational purposes only. Please consult with a healthcare professional for personalized medical advice.
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                )}
                <LiverHealthInfo />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Predict;