import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './CusLandingPage.css';
import './Nav';
import Nav from "./Nav";
import Footer from "./Footer";

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
      <Nav/>
      
      <section className="luxury-hero position-relative text-white text-center d-flex align-items-center justify-content-center">
        <div className="hero-background"></div>
        <div className="hero-overlay-gradient"></div>
        <Container className="hero-content py-5">
          
          <h1 className="display-3 fw-bold mb-3">
            Curated Excellence<br className="d-none d-md-inline" /> For The Discerning
          </h1>
          <p className="lead mb-4">
            Discover the pinnacle of quality and service in one exclusive destination.
          </p>
          <div className="hero-cta d-flex justify-content-center flex-wrap gap-3">
            <Button
              variant="danger"
              size="lg"
              onClick={() => window.location.href = "/SignIn"}
            >
              Sign In
            </Button>
            <Button
              variant="danger"
              size="lg"
              onClick={() => window.location.href = "/login"}
            >
              Login
            </Button>
          </div>
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
                <div className="value-icon mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
              </svg>
                </div>
                <h3>Exceptional Quality</h3>
                <p>Every item meets our rigorous standards of excellence</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                </svg>
                </div>
                <h3>Discreet Service</h3>
                <p>Your privacy and satisfaction are our top priorities</p>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </div>
                <h3>Exclusive Access</h3>
                <p>Special privileges for our distinguished clientele</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </div>
  );
};

export default CusLandingPage;