import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import ItemCard from '../Components/ItemCard';

export default function Men() {
  // Dummy men's products
  const menProducts = [
    {
      id: 1,
      title: 'Classic Shirt',
      price: 29.99,
      image: 'https://i.pinimg.com/736x/46/f9/8f/46f98ff91157e6d7df349e4b2bdd969a.jpg',
    },
    {
      id: 2,
      title: 'Casual Jeans',
      price: 39.99,
      image: 'https://i.pinimg.com/1200x/68/b6/0e/68b60e34e9c7a3078b033097b2b85608.jpg',
    },
    {
      id: 3,
      title: 'Black Leather Jacket',
      price: 79.99,
      image: 'https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg',
    },
    {
      id: 4,
      title: 'Summer Polo T-Shirt',
      price: 24.99,
      image: 'https://i.pinimg.com/736x/67/9f/94/679f94991d8e9f6c7d373977c4506fd7.jpg',
    },
  ];

  const handleAddToCart = (item) => {
    alert(`Added to cart: ${item.title}`);
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4" style={{ color: '#FF5656' }}>Men's Collection</h1>
        <p className="text-center mb-5">
          Discover stylish men's fashion. High quality, affordable, and designed for every occasion.
        </p>

        <Row className="justify-content-center">
          {menProducts.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
              <ItemCard item={item} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
