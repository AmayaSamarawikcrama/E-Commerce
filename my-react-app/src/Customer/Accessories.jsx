import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import ItemCard from '../Components/ItemCard';

export default function Accessories() {
  // Dummy accessories products
  const accessoriesProducts = [
    {
      id: 1,
      title: 'Leather Wallet',
      price: 19.99,
      image: 'https://i.pinimg.com/736x/49/42/9f/49429fbb17d005a92fe379d33ff5d105.jpg',
    },
    {
      id: 2,
      title: 'Stylish Sunglasses',
      price: 24.99,
      image: 'https://i.pinimg.com/736x/81/0b/58/810b588af45637a2071485bdb5c65504.jpg',
    },
    {
      id: 3,
      title: 'Classic Belt',
      price: 14.99,
      image: 'https://i.pinimg.com/1200x/5b/40/ba/5b40ba776523bbb36e37cd86ef3f649a.jpg',
    },
    {
      id: 4,
      title: 'Canvas Hat',
      price: 12.99,
      image: 'https://i.pinimg.com/736x/58/3c/7f/583c7fec553bdcc9cc12b168cb8bfb4a.jpg',
    },
  ];

  const handleAddToCart = (item) => {
    alert(`Added to cart: ${item.title}`);
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-4 text-danger">Accessories Collection</h1>
        <p className="text-center mb-5">
          Complete your look with our curated selection of stylish accessories.
        </p>

        <Row className="justify-content-center">
          {accessoriesProducts.map((item) => (
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
    </>
  );
}
