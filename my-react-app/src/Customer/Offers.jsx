import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

export default function Offers() {
  // Dummy offer data
  const offersData = [
    {
      id: 1,
      title: 'Dress - 30% OFF',
      price: 34.99,
      image: 'https://i.pinimg.com/736x/82/e7/04/82e7042a7e5aafcd91482880905bc27e.jpg',
    },
    {
      id: 2,
      title: 'Blue Jeans - 25% OFF',
      price: 29.99,
      image: 'https://i.pinimg.com/736x/54/24/03/54240377c738fd6e2774958cabbe52a1.jpg',
    },
    {
      id: 3,
      title: 'White Shirt - 20% OFF',
      price: 23.99,
      image: 'https://i.pinimg.com/736x/d8/1d/24/d81d24c8acff6b66f4c6a2af9ab5a804.jpg',
    },
    {
      id: 4,
      title: 'Black Jacket - 40% OFF',
      price: 47.99,
      image: 'https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg',
    },
  ];

  const handleShopNow = (item) => {
    alert(`Navigating to shop page for ${item.title}`);
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4" style={{color: '#FF5656'}}>Our Offers</h1>
        <p className="text-center mb-5">
          Explore our limited-time discounts and save big on your favorite styles!
        </p>

        <Row className="justify-content-center">
          {offersData.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '18rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ color: '#FF5656' }}>{item.title}</Card.Title>
                  <Card.Text>
                    <strong>${item.price.toFixed(2)}</strong>
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleShopNow(item)}>
                    Shop Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
