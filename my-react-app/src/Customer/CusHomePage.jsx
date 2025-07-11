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
  { id: 1, title: 'Sneakers', image: 'https://i.pinimg.com/736x/a4/51/91/a45191d2495bd794028d246e533ed545.jpg', price: 49.99 },
  { id: 2, title: 'Classic Watch', image: 'https://i.pinimg.com/736x/53/34/16/5334162d414d0200f11048804968b8b3.jpg', price: 89.99 },
  { id: 3, title: 'Leather Wallet', image: 'https://i.pinimg.com/736x/6e/35/9e/6e359e09da5d787b6eaeeb3a001f357a.jpg', price: 29.99 },
  { id: 4, title: 'Stylish Hat', image: 'https://i.pinimg.com/736x/9e/7d/ef/9e7defaaed68f35b979e2bb3124da163.jpg', price: 19.99 },
];

 function CusHomePage() {
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
          <h1 className="text-center  mb-4 border-bottom pb-2" style={{ color: '#FF5656' }}>
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
export default CusHomePage;