import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Contact.css';

// Add these styles to your Contact.css file:
/*
.team-member-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.team-img-container {
  height: 120px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-initials {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
}
*/


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page py-5" style={{ minHeight: 'calc(100vh - 56px - 200px)' }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h1>Contact Us</h1>
            <p className="lead text-muted">
              Have questions? We're here to help!
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="contact-info-card h-100 shadow-sm">
              <Card.Body>
                <h3 className="mb-4">Get in Touch</h3>
                <p>
                  We'd love to hear from you! Whether you have a question about features, 
                  need assistance, or want to provide feedback, our team is ready to help.
                </p>
                
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h5>Email Us</h5>
                    <p>pulagorlamounica@</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h5>Call Us</h5>
                    <p>+91 99999 99999</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h5>Location</h5>
                    <p>India</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="contact-form-card shadow-sm">
              <Card.Body>
                <h3 className="mb-4">Send Us a Message</h3>
                
                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                )}
                
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="px-4">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Team Members Section */}
        <Row className="mt-5">
          <Col className="text-center mb-4">
            <h2>Our Team</h2>
            <p className="text-muted">Meet the people behind LiverSense</p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {/* Team Member 1 */}
          <Col md={4} className="mb-4">
            <Card className="h-100 team-member-card">
              <div className="team-img-container">
                <div className="team-initials">PM</div>
              </div>
              <Card.Body className="text-center">
                <h4>P. Mounica</h4>
                <p className="text-muted">Lead Developer</p>
                <p className="small">mounica.p@liversense.ai</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 2 */}
          <Col md={4} className="mb-4">
            <Card className="h-100 team-member-card">
              <div className="team-img-container">
                <div className="team-initials">MR</div>
              </div>
              <Card.Body className="text-center">
                <h4>M. Ramadevi</h4>
                <p className="text-muted">Machine Learning Engineer</p>
                <p className="small">ramadevi.m@liversense.ai</p>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 3 */}
          <Col md={4} className="mb-4">
            <Card className="h-100 team-member-card">
              <div className="team-img-container">
                <div className="team-initials">VA</div>
              </div>
              <Card.Body className="text-center">
                <h4>V. Abhinayasri</h4>
                <p className="text-muted">UI/UX Designer</p>
                <p className="small">abhinayasri.v@liversense.ai</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h5>Connect With Us</h5>
            <div className="social-links mt-3">
              <a 
                href="https://github.com/22471A05H5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white mx-3"
                aria-label="GitHub"
              >
                <FaGithub size={24} className="me-2" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mounica-pulagorla-3a8272276/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white mx-3"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} className="me-2" />
              </a>
            </div>
            <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} LiverSense. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const ContactWithFooter = () => {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactWithFooter;