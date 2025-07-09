// CusHomePage.jsx
import React, { useState, useRef } from 'react';
import ItemCard from '../Components/ItemCard';
import HeroSection from '../Components/HeroSection';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

// Import the corrected stylesheet
import './CusHomePage.css';

// Dummy items remain the same
const dummyItems = [
  { id: 1, title: 'Red Sneakers', image: 'https://via.placeholder.com/300x200?text=Red+Sneakers', price: 49.99 },
  { id: 2, title: 'Classic Watch', image: 'https://via.placeholder.com/300x200?text=Classic+Watch', price: 89.99 },
  { id: 3, title: 'Leather Wallet', image: 'https://via.placeholder.com/300x200?text=Leather+Wallet', price: 29.99 },
  { id: 4, title: 'Stylish Hat', image: 'https://via.placeholder.com/300x200?text=Stylish+Hat', price: 19.99 },
];

export default function CusHomePage() {
  const [cart, setCart] = useState([]);
  const productsRef = useRef(null);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.title} added to cart!`);
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Apply the corrected top-level class to enable the flexbox layout
    <div className="luxury-home-page">
      <NavBar />

      {/* Wrap the main content so it can grow and push the footer down */}
      <main className="content-wrap">
        <HeroSection onShopNow={scrollToProducts} />

        <div className="container py-5" ref={productsRef}>
          <h1 className="text-center text-danger mb-4 border-bottom pb-2">
            Browse Our Products
          </h1>

          <div className="row g-4">
            {dummyItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ItemCard item={item} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}