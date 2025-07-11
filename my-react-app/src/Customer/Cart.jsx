import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

export default function Cart() {
  const navigate = useNavigate();

  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Classic Shirt',
      price: 29.99,
      quantity: 1,
      image: 'https://i.pinimg.com/736x/46/f9/8f/46f98ff91157e6d7df349e4b2bdd969a.jpg',
    },
    {
      id: 2,
      title: 'Casual Jeans',
      price: 39.99,
      quantity: 2,
      image: 'https://i.pinimg.com/1200x/68/b6/0e/68b60e34e9c7a3078b033097b2b85608.jpg',
    },
  ]);

  const handleQuantityChange = (id, qty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '1000px' }}>
        <h1 className="text-center mb-4" style={{ color: '#FF5656' }}>Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <Row className="mb-4">
              {cartItems.map(item => (
                <Col xs={12} key={item.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col xs={4} md={3}>
                          <Image src={item.image} alt={item.title} fluid rounded />
                        </Col>
                        <Col xs={8} md={3}>
                          <h5 className="mb-0" style={{ color: '#FF5656' }}>{item.title}</h5>
                          <p><strong>${item.price.toFixed(2)}</strong></p>
                        </Col>
                        <Col xs={6} md={3}>
                          <Form.Control
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          />
                        </Col>
                        <Col xs={6} md={3} className="text-end">
                          <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                            Remove
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <Card className="shadow-sm">
              <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <h5 className="mb-3 mb-md-0">Subtotal:</h5>
                <h5 className="mb-3 mb-md-0" style={{ color: '#FF5656' }}>${subtotal.toFixed(2)}</h5>
                <Button variant="danger" onClick={handleCheckout}>Proceed to Checkout</Button>
              </Card.Body>
            </Card>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
}
