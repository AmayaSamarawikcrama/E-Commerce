import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Customer/Nav';
import CusLandingPage from './Customer/CusLandingPage';
import Footer from './Footer';
import Login from './Login';


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<CusLandingPage/>} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;