import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1 className="mb-3">About LiverSense</h1>
            <p className="lead text-muted">
              AI-powered clinical decision support for liver health assessment.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="about-card shadow-sm">
              <Card.Body>
                <h2 className="mb-4">Our Mission</h2>
                <p>
                  LiverSense is designed to assist healthcare professionals and individuals in the early 
                  detection of liver disease through advanced machine learning algorithms. Our goal is to 
                  provide accurate, accessible, and instant liver health assessments to support better 
                  health outcomes.
                </p>
                <p>
                  By leveraging cutting-edge AI technology, we aim to bridge the gap between medical 
                  expertise and individuals seeking to understand their liver health status.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="features-section">
          <Col md={4} className="mb-4">
            <Card className="h-100 feature-card">
              <Card.Body>
                <div className="feature-icon mb-3">🔍</div>
                <h3>Advanced AI Technology</h3>
                <p>
                  Our system uses ensemble machine learning models trained on thousands of clinical cases 
                  to provide reliable predictions about liver health.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 feature-card">
              <Card.Body>
                <div className="feature-icon mb-3">⚡</div>
                <h3>Instant Results</h3>
                <p>
                  Get immediate feedback on your liver health status with our fast and efficient 
                  prediction system.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 feature-card">
              <Card.Body>
                <div className="feature-icon mb-3">🛡️</div>
                <h3>Privacy Focused</h3>
                <p>
                  We prioritize your data privacy and security. Your health information is processed 
                  securely and never stored without your consent.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;