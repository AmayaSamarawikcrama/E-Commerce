import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import ItemCard from '../Components/ItemCard';

export default function Kids() {
  // Dummy kids' products
  const kidsProducts = [
    {
      id: 1,
      title: 'Kids Full Kit',
      price: 19.99,
      image: 'https://i.pinimg.com/736x/c4/ef/39/c4ef39880de84b40a1ec1e610f38ff41.jpg',
    },
    {
      id: 2,
      title: 'Jacket',
      price: 24.99,
      image: 'https://i.pinimg.com/1200x/8c/a8/5e/8ca85eb594363745e524c34cf59d5f69.jpg',
    },
    {
      id: 3,
      title: 'Kids Frock',
      price: 14.99,
      image: 'https://i.pinimg.com/1200x/de/90/8f/de908fbcaed4bbf8e65e1025f9c869b6.jpg',
    },
    {
      id: 4,
      title: 'Kids Skirt',
      price: 29.99,
      image: 'https://i.pinimg.com/1200x/d3/64/a2/d364a2777d37723cf3fedd94702368c4.jpg',
    },
  ];

  const handleAddToCart = (item) => {
    alert(`Added to cart: ${item.title}`);
  };

  return (
    <>
      <div className="luxury-home-page" style={{ backgroundColor: 'white' }}>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4" style={{ color:'#FF5656'}}>Kids' Collection</h1>
        <p className="text-center mb-5">
          Fun, comfortable, and stylish clothes for kids of all ages. Explore our collection now!
        </p>

        <Row className="justify-content-center">
          {kidsProducts.map((item) => (
            <Col
              key={item.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center mb-4"
            >
              <ItemCard item={item} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
      </div>
    </>
  );
}
