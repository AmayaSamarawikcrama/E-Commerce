import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


export default function Men() {
  // Dummy product data
  const menProducts = [
    {
      id: 1,
      title: 'Men Classic Shirt',
      price: 35.99,
      image: 'https://i.pinimg.com/736x/d4/98/11/d498118ee6c12c2a4c8701bc20ac5d7f.jpg',
    },
    {
      id: 2,
      title: 'Men Casual Jeans',
      price: 45.99,
      image: 'https://i.pinimg.com/736x/54/24/03/54240377c738fd6e2774958cabbe52a1.jpg',
    },
    {
      id: 3,
      title: 'Men Black Jacket',
      price: 79.99,
      image: 'https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg',
    },
    {
      id: 4,
      title: 'Men White T-Shirt',
      price: 25.99,
      image: 'https://via.placeholder.com/300x300?text=White+T-Shirt',
    },
  ];

  const handleShopNow = (item) => {
    alert(`Navigating to shop page for ${item.title}`);
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4 text-danger">Men's Collection</h1>
        <p className="text-center mb-5">
          Discover our stylish men's fashion picks. Quality and comfort in every look.
        </p>

        <Row className="justify-content-center">
          {menProducts.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <Card style={{ width: '18rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ color: '#B00020' }}>{item.title}</Card.Title>
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
