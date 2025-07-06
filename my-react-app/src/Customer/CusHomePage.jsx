import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CusHomePage.css'; 
import Nav from "./Nav";
import Footer from "../Footer";

const CusHomePage = () => {
  return (
    <div className="luxury-home-page">
      <Nav />

      <section className="luxury-hero-home text-white text-center d-flex align-items-center justify-content-center">
        <div className="hero-home-background"></div>
        <div className="hero-home-overlay"></div>
        <Container className="hero-home-content py-5">
          <h1 className="display-3 fw-bold mb-3">
            Welcome to Be Big 
          </h1>
          <p className="lead mb-4">
            Your personalized gateway to premium experiences and curated collections.
          </p>
          <Button
            variant="danger"
            size="lg"
            onClick={() => window.location.href = "/shop"}
          >
            Shop Now
          </Button>
        </Container>
      </section>

      <section className="luxury-intro-section py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="section-title">Discover the Difference</h2>
              <p className="section-subtitle">
                We blend timeless elegance with modern sophistication to deliver an unmatched shopping experience.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={4}>
              <div className="intro-card text-center p-4 shadow-lg">
                <i className="bi bi-gem fs-1 text-danger mb-3"></i>
                <h4>Luxury Curation</h4>
                <p>Our team handpicks every item to meet the highest standards of style and quality.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intro-card text-center p-4 shadow-lg">
                <i className="bi bi-shield-lock-fill fs-1 text-danger mb-3"></i>
                <h4>Secure Shopping</h4>
                <p>Your data and privacy are protected with industry-leading security measures.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="intro-card text-center p-4 shadow-lg">
                <i className="bi bi-star-fill fs-1 text-danger mb-3"></i>
                <h4>Exclusive Service</h4>
                <p>Enjoy personalized support and VIP access to our most sought-after collections.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default CusHomePage;
