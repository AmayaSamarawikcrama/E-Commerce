import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

export default function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show alert. Replace with real payment logic.
    alert('Payment submitted successfully!');
  };

  return (
    <>
      <NavBar />

      <Container className="my-5" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4" style={{ color: '#FF5656' }}>Payment</h1>
        <p className="text-center mb-4">
          Please enter your payment details to complete your purchase.
        </p>

        <Card className="shadow-sm">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formExpiry">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="password"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="danger" type="submit">
                  Pay Now
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  );
}
