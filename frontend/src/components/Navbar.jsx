import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { FaHeartbeat } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar expand="lg" fixed="top" className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Link to="/" className="navbar-brand">
          <FaHeartbeat className="brand-icon" />
          <div className="brand-text">
            <span className="brand-title">LiverSense</span>
            <span className="brand-subtitle d-none d-md-inline">Intelligent Liver Disease Prediction</span>
          </div>
        </Link>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/predict" className={location.pathname === '/predict' ? 'active' : ''}>
              Predict
            </Nav.Link>
            <Nav.Link as={Link} to="/dataset" className={location.pathname === '/dataset' ? 'active' : ''}>
              Dataset
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/how-it-works" className={location.pathname === '/how-it-works' ? 'active' : ''}>
              How It Works
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;