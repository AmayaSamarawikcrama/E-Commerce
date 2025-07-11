import React, { useState, useEffect } from 'react';

// Import your images
import image1 from '../assets/CusHome.jpg';
import image2 from '../assets/CusHome2.jpg';
import image3 from '../assets/CusHome3.jpg';

export default function HeroSection({ onShopNow }) {
  // ✅ Array of images to cycle through
  const images = [image1, image2, image3];

  // ✅ Track which image is showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        ...styles.hero,
        backgroundImage: `url(${images[currentIndex]})`
      }}
    >
      <div style={styles.overlay}>
        <h1 className="display-4 fw-bold text-white mb-3">
          Welcome to Our Store
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
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    marginBottom: '24px',
    transition: 'background-image 1s ease-in-out',
  },
  overlay: {
    backgroundColor: 'rgba(63, 62, 62, 0.44)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
};
