import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import ItemCard from '../Components/ItemCard';

export default function Women() {
  // Dummy women's products
  const womenProducts = [
    {
      id: 1,
      title: 'Summer Dress',
      price: 49.99,
      image: 'https://i.pinimg.com/736x/77/48/7c/77487c890ac05fedf3c4f349c6d38092.jpg',
    },
    {
      id: 2,
      title: 'Stylish Blue Jeans',
      price: 39.99,
      image: 'https://i.pinimg.com/736x/54/24/03/54240377c738fd6e2774958cabbe52a1.jpg',
    },
    {
      id: 3,
      title: 'Casual Shirt',
      price: 29.99,
      image: 'https://i.pinimg.com/736x/14/b0/c1/14b0c1789cc830e3b2e0cbdd7b2c485c.jpg',
    },
    {
      id: 4,
      title: 'Jacket',
      price: 79.99,
      image: 'https://i.pinimg.com/736x/59/0c/ad/590cada29b0c3bbea08e53a35324e8a9.jpg',
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
        <h1 className="text-center mb-4 text-danger">Women's Collection</h1>
        <p className="text-center mb-5">
          Explore our latest women's fashion. Trendy, comfortable, and perfect for every occasion.
        </p>

        <Row className="justify-content-center">
          {womenProducts.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
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
