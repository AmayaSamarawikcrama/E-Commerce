import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CusLandingPage.css';

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

const CusLandingPage = () => {
  return (
    <div className="luxury-landing-page">
      {/* Hero Section */}
      <section className="luxury-hero">
        <div className="hero-overlay"></div>
        
        <div className="hero-content text-left align-items-start">
          <h1 className="hero-title">
            <span className="title-line">Curated Excellence</span>
            <span className="title-line">For The Discerning</span>
          </h1>
          
          <p className="hero-subtitle">
            Discover the pinnacle of quality and service in one exclusive destination
          </p>
          
          <div className="hero-cta">
            <Button variant="outline-light" className="cta-btn me-3">
              Become a Member
            </Button>
            <Button variant="light" className="cta-btn">
              Explore Collections
            </Button>
          </div>
        </div>
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
                <div className="value-icon mb-3">
                  <i className="bi bi-gem"></i>
                </div>
                <h3>Exceptional Quality</h3>
                <p>Every item meets our rigorous standards of excellence</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h3>Discreet Service</h3>
                <p>Your privacy and satisfaction are our top priorities</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className="bi bi-stars"></i>
                </div>
                <h3>Exclusive Access</h3>
                <p>Special privileges for our distinguished clientele</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CusLandingPage;