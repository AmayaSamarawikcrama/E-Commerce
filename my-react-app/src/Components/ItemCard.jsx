import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ItemCard({ item, onAddToCart }) {
  const navigate = useNavigate();

  const handleClick = () => {
    onAddToCart(item);
    navigate('/cart');
  };

  return (
    <Container className="my-3 d-flex justify-content-center">
      <Card style={{ width: '18rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <Card.Img 
          variant="top" 
          src={item.image} 
          alt={item.title} 
          style={{ height: '300px', objectFit: 'cover' }} 
        />
        <Card.Body className="text-center">
          <Card.Title style={{ color: '#FF5656' }}>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Button 
            variant="danger" 
            onClick={handleClick}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
