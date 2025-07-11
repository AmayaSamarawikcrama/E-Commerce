import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import CusLandingPage from './Customer/CusLandingPage';
import Footer from './Components/Footer';
import Login from './Login';
import CusHomePage from './Customer/CusHomePage';
import AboutUs from './Customer/AboutUs';
import Offers from './Customer/Offers';
import Men from './Customer/Men';



function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<CusLandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/CusHomePage" element={<CusHomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/Men" element={<Men />} />

      </Routes>
      
    </Router>
  );
}

export default App;