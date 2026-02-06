import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      title: "Data Collection",
      description: "Input your clinical test results including bilirubin levels, enzyme levels, and other relevant health metrics."
    },
    {
      title: "Data Preprocessing",
      description: "Our system normalizes and processes your data to prepare it for analysis."
    },
    {
      title: "Feature Engineering",
      description: "Key features are extracted and selected to ensure the most accurate prediction."
    },
    {
      title: "Ensemble Modeling",
      description: "Multiple machine learning models analyze your data to provide a comprehensive assessment."
    },
    {
      title: "Result Interpretation",
      description: "Receive an easy-to-understand report with your liver health status and confidence score."
    }
  ];

  return (
    <div className="how-it-works-page py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="mb-3">How It Works</h1>
            <p className="lead text-muted">
              Understanding the LiverSense prediction process
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <Card className="process-card shadow-sm">
              <Card.Body>
                <h2 className="mb-4">The Prediction Process</h2>
                <p className="mb-4">
                  LiverSense uses a sophisticated machine learning pipeline to analyze your clinical 
                  parameters and provide a reliable prediction about your liver health status.
                </p>
                
                <div className="process-steps">
                  {steps.map((step, index) => (
                    <div key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="model-info-card shadow-sm">
              <Card.Body>
                <h3 className="mb-4">About Our Model</h3>
                <p>
                  Our prediction model is built using an ensemble of advanced machine learning algorithms, 
                  including:
                </p>
                <ListGroup variant="flush" className="mb-3">
                  <ListGroup.Item>• XGBoost</ListGroup.Item>
                  <ListGroup.Item>• LightGBM</ListGroup.Item>
                  <ListGroup.Item>• CatBoost</ListGroup.Item>
                  <ListGroup.Item>• Feature Selection using SelectFromModel</ListGroup.Item>
                </ListGroup>
                <p>
                  The model has been trained on a comprehensive dataset of clinical cases to ensure 
                  accurate and reliable predictions.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;