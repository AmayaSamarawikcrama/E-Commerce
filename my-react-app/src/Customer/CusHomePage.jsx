import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CusHomePage.css'; 
import Nav from "./Nav";
import Footer from "../Footer";

// ✅ FIX: Add missing categories array
const categories = [
  { 
    title: "Luxury Electronics", 
    description: "Cutting-edge technology with exquisite craftsmanship",
    images: ["smartwatch.png", "headphones.png", "camera.png", "laptop.png"] 
  },
  { 
    title: "Designer Apparel", 
    description: "Haute couture and premium ready-to-wear collections",
    images: ["suit.png", "dress.png", "handbag.png"] 
  },
  { 
    title: "Beauty & Wellness", 
    description: "Elite skincare and beauty essentials",
    images: ["perfume.png", "skincare.png", "makeup.png"] 
  },
  { 
    title: "Home & Concierge", 
    description: "Bespoke home services and luxury living",
    images: ["interior.png", "chef.png", "cleaning.png"] 
  },
  { 
    title: "Education & Arts", 
    description: "Masterclasses and fine art acquisitions",
    images: ["paintbrush.png", "books.png", "piano.png"] 
  },
  { 
    title: "Exclusive Collections", 
    description: "Curated rare finds and limited editions",
    images: ["watch.png", "jewelry.png", "art.png"] 
  },
];

const CusHomePage = () => {
  return (
    <div className="luxury-home-page">
      <Nav />

      {/* Hero Section */}
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
            Log Out
          </Button>
        </Container>
      </section>

      {/* Categories Section */}
      <Container className="luxury-categories py-5">
        <h2 className="section-title text-center mb-5">Our Exclusive Offerings</h2>
        
        <Row className="g-4">
          {categories.map((category, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="category-card h-100 border-0 shadow-lg">
                <Card.Body className="p-4">
                  <div className="category-header mb-4">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                  
                  <div className="category-images d-flex flex-wrap justify-content-center">
                    {category.images.map((img, i) => (
                      <div key={i} className="luxury-image-container">
                        <img
                          src={`/assets/${img}`}
                          alt={category.title}
                          className="luxury-category-img"
                        />
                        <div className="image-hover-effect"></div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Value Proposition Section */}
      <section className="luxury-values py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="value-card text-center p-4">
                <i className="bi bi-gem fs-1 text-danger mb-3"></i>
                <h3>Exceptional Quality</h3>
                <p>Every item meets our rigorous standards of excellence</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <i className="bi bi-shield-check fs-1 text-danger mb-3"></i>
                <h3>Discreet Service</h3>
                <p>Your privacy and satisfaction are our top priorities</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <i className="bi bi-star-fill fs-1 text-danger mb-3"></i>
                <h3>Exclusive Access</h3>
                <p>Special privileges for our distinguished clientele</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
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
