import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Customer/Nav';
import CusLandingPage from './Customer/CusLandingPage';
import Footer from './Footer';
import Login from './Login';
import CusHomePage from './Customer/CusHomePage';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<CusLandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/CusHomePage" element={<CusHomePage />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;