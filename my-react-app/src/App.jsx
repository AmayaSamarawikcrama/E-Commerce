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
import Women from './Customer/Women';
import Kids from './Customer/Kids';
import Accessories from './Customer/Accessories';
import Notification from './Customer/Notification';
import Cart from './Customer/Cart';
import Payment from './Customer/Payment';
import SellerHome from './Seller/SellerHome';
import SignUp from './Customer/SignUp';



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
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/seller" element={<SellerHome />} />
        <Route path="/signUp" element={<SignUp />} />

      </Routes>
      
    </Router>
  );
}

export default App;