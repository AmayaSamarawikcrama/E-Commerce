import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import AmayaProfile from '../assets/AmayaProfile.jpeg';
import HesaraProfile from '../assets/HesaraProfile.jpg';
import DahanayakeProfile from '../assets/DahanayakeProfile.jpg';

export default function AboutUs() {
  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4" style={{ color: '#FF5656' }}>About Us</h1>

        <p className="text-center mb-5">
          Welcome to <strong>Be Big</strong>! We are your one-stop online store for stylish, affordable clothing and accessories.
          Our mission is to make fashion accessible to everyone, everywhere.
        </p>

        {/* Our Story Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h3 style={{ color: '#FF5656' }}>Our Story</h3>
            <p>
              Founded in 2024, Be Big started as a small boutique with a big dream—to deliver trendy and comfortable fashion
              at unbeatable prices. We pride ourselves on exceptional quality, fast shipping, and top-notch customer service.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://i.pinimg.com/1200x/dc/75/bd/dc75bdf9b34366bc4995abef3e1d9a59.jpg"
              alt="Our Store"
              className="img-fluid rounded shadow"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
          </Col>
        </Row>

        {/* Our Team Section */}
        <h3 className="text-center mb-4" style={{ color: '#FF5656' }}>Our Team</h3>
        <Row className="justify-content-center">
          <Col md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow text-center">
              <Card.Img 
                variant="top" 
                src={AmayaProfile}
                alt="Amaya Anusarani"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid #FF5656',
                  margin: '20px auto 0',
                  display: 'block'
                }}
              />
              <Card.Body>
                <Card.Title>Amaya Anusarani</Card.Title>
                <Card.Text>Full Stack Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow text-center">
              <Card.Img 
                variant="top" 
                src={HesaraProfile}
                alt="Hesara Dinal"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid #FF5656',
                  margin: '20px auto 0',
                  display: 'block'
                }}
              />
              <Card.Body>
                <Card.Title>Hesara Dinal</Card.Title>
                <Card.Text>Full Stack Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6} className="mb-4">
            <Card className="h-100 shadow text-center">
              <Card.Img 
                variant="top" 
                src={DahanayakeProfile}
                alt="Dahanayake"
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid #FF5656',
                  margin: '20px auto 0',
                  display: 'block'
                }}
              />
              <Card.Body>
                <Card.Title>Dahanayake</Card.Title>
                <Card.Text>Full Stack Developer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
