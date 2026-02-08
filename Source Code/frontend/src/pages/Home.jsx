import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaShieldAlt, FaChartLine, FaBrain, FaUserMd } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h1 className="project-title">
                Liver+: A Multi-Stage Stacking Framework with SHAP-Based Interpretability for Clinical Liver Disease Prediction
              </h1>
              <p className="lead mt-4">
                Enter your clinical test values and get instant prediction with confidence score.
              </p>
              <div className="cta-buttons justify-content-center">
                <Button as={Link} to="/predict" variant="primary" size="lg" className="me-3">
                  Start Prediction →
                </Button>
                <Button as={Link} to="/how-it-works" variant="outline-primary" size="lg">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Key Features</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <FaShieldAlt size={40} className="text-primary" />
                  </div>
                  <h4>Advanced Prediction</h4>
                  <p>Multi-stage stacking framework for accurate liver disease prediction</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <FaChartLine size={40} className="text-primary" />
                  </div>
                  <h4>SHAP Analysis</h4>
                  <p>Interpretable AI with SHAP values for transparent decision making</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <FaBrain size={40} className="text-primary" />
                  </div>
                  <h4>Smart Features</h4>
                  <p>Comprehensive feature analysis and selection for optimal performance</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="h-100 feature-card">
                <Card.Body className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <FaUserMd size={40} className="text-primary" />
                  </div>
                  <h4>Clinical Support</h4>
                  <p>Designed to assist healthcare professionals in diagnosis</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2>About ExplaiLiver+</h2>
              <p className="lead">
                A cutting-edge framework for liver disease prediction with explainable AI capabilities.
              </p>
              <p>
                Our multi-stage stacking approach combines the strengths of multiple machine learning 
                models to deliver superior prediction accuracy while maintaining interpretability through 
                SHAP (SHapley Additive exPlanations) values.
              </p>
              <Button as={Link} to="/about" variant="outline-primary" size="lg" className="mt-3">
                Learn More About Us
              </Button>
            </Col>
            <Col lg={6}>
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  <h4>Why Choose Our Solution?</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Higher accuracy than traditional methods</li>
                    <li className="mb-2">✓ Explainable AI for transparent decisions</li>
                    <li className="mb-2">✓ User-friendly interface for healthcare professionals</li>
                    <li className="mb-2">✓ Real-time prediction with confidence scores</li>
                    <li>✓ Comprehensive feature importance analysis</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;