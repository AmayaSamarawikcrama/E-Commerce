import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CusLandBack from './assets/CusLandBack.jpg'; 
import './CusLandingPage.css'; 

const categories = [
  { title: "Electronics", images: ["laptop.png", "radio.png", "phone.png", "headphones.png"] },
  { title: "Clothing", images: ["clothes1.png", "clothes2.png", "clothes3.png"] },
  { title: "Beauty", images: ["beauty1.png", "beauty2.png", "beauty3.png"] },
  { title: "Home Services", images: ["home1.png", "home2.png"] },
  { title: "Education", images: ["edu1.png", "edu2.png", "edu3.png"] },
  { title: "Others", images: ["guitar.png", "violin.png"] },
];

const CusLandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${CusLandBack})`,
        backgroundSize: "cover",
        minHeight: "90vh",
        width: "110%",
        height: "130%",
        position: "relative",
        backgroundColor: "#f0dcdc",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1
        }}
      />

      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{ minHeight: "50vh", position: "relative", zIndex: 2 }}
      >
        <h1 className="mb-3 display-4 fw-bold" style={{ fontFamily: "Poppins" }}>
          Buy Products & Book Services <br /> All in One Place
        </h1>
      <p className="mb-4 fs-5" style={{ color: "#DFD0D0" }}><i>
        Fast, trusted,  and secure shopping
      </i></p>
        <div className="Buttons d-flex  " >
          <Button variant="danger" className="me-2 px-4 py-2" >
              Login 
          </Button>
          <Button variant="danger" className="px-4 py-2">
            Sign Up
          </Button>
        </div>
      </div>

      <Container className="my-5 category-section" style={{ position: "relative", zIndex: 2 }}>
        <h2 className="text-center mb-4 text-white">Categories</h2>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center shadow-sm h-100 category-card">
                <Card.Body>
                  <Card.Title className="mb-3">
                    <strong>{category.title}</strong>
                  </Card.Title>
                  <div className="image-grid d-flex flex-wrap justify-content-center">
                    {category.images.map((img, i) => (
                      <img
                        key={i}
                        src={`/assets/${img}`} 
                        alt={`${category.title} ${i}`}
                        className="category-img"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          margin: "8px",
                          borderRadius: "12px",
                          border: "1px solid #eee",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
                        }}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CusLandingPage;

