import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // ⭐ Import navigation hook

import Nav from '../Components/Nav';
import ItemCard from '../Components/ItemCard';
import Footer from '../Components/Footer';
import './CusLandingPage.css'; 

const itemsData = [
  {
    id: 1,
    title: 'Dress',
    price: 49.99,
    image: 'https://i.pinimg.com/736x/82/e7/04/82e7042a7e5aafcd91482880905bc27e.jpg',
  },
  {
    id: 2,
    title: 'Jeans',
    price: 39.99,
    image: 'https://i.pinimg.com/736x/54/24/03/54240377c738fd6e2774958cabbe52a1.jpg',
  },
  {
    id: 3,
    title: 'Men Shirt',
    price: 29.99,
    image: 'https://i.pinimg.com/736x/d4/98/11/d498118ee6c12c2a4c8701bc20ac5d7f.jpg',
  },
  {
    id: 4,
    title: 'Black Jacket',
    price: 79.99,
    image: 'https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg',
  },
];

export default function CusLandingPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();   // ⭐ Create navigate function

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title} added to cart!`);
  };

  const handleSignIn = () => {
    navigate('/signin');    // ⭐ Go to /signin
  };

  const handleLogin = () => {
    navigate('/login');     // ⭐ Go to /login
  };

  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay muted loop className="hero-video">
          <source src="https://v.ftcdn.net/05/25/93/07/700_F_525930783_0muom08TdkfbowMueGI35RWIaBdgdfzX_ST.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-overlay">
          <Container className="text-center">
            <h1 className="hero-title">Welcome to Our Store</h1>
            <p className="hero-subtitle">Find your perfect style today!</p>
            <div className="hero-buttons">
              <Button variant="light" className="mx-2" onClick={handleSignIn}>Sign In</Button>
              <Button variant="danger" className="mx-2" onClick={handleLogin}>Login</Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Products Grid */}
      <Container className="my-5 py-5 bg-white">
        <h2 className="text-center mb-4" style={{ color: '#FF5656' }}>Our Products</h2>
        <Row className="justify-content-center">
          {itemsData.map(item => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <ItemCard item={item} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
