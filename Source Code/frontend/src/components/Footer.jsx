import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={4} className="mb-3 mb-md-0">
            <h5>LiverSense</h5>
            <p className="mb-0">AI-powered clinical decision support for liver health assessment.</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/how-it-works">How It Works</a>
              <a href="/contact">Contact</a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:support@liversense.ai">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} LiverSense. 
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;