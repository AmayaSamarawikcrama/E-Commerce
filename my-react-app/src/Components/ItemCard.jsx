// Card.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

export default function ItemCard({ item, onAddToCart }) {
  return (
    <div className="card" style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.title}>{item.title}</h3>
        <p style={styles.price}>${item.price}</p>
        <button 
          style={styles.button} 
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    textAlign: 'center',
    maxWidth: '250px',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  details: {
    marginTop: '12px',
  },
  title: {
    fontSize: '1.1rem',
    marginBottom: '8px',
    color: '#B00020', // Red theme
  },
  price: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#B00020', // Red theme
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
