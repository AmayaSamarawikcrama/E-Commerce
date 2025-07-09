import React from 'react';
import heroBackground from '../assets/CusHome.jpg'; // ✅ Adjust path if needed

export default function HeroSection({ onShopNow }) {
  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${heroBackground})` }}>
      <div style={styles.overlay}>
        <h1 className="display-4 fw-bold text-white mb-3">
          Welcome to Our Red Themed Store
        </h1>
        <p className="lead text-white mb-4">
          Best Deals. Best Style. Just for You.
        </p>
        <button className="btn btn-danger btn-lg" onClick={onShopNow}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    marginBottom: '24px',
  },
  overlay: {
    backgroundColor: 'rgba(63, 62, 62, 0.44)', // Red theme overlay
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
};
