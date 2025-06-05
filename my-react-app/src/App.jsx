import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import CusLandingPage from './CusLandingPage';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<CusLandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;