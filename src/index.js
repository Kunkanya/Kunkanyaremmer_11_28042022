import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './index.css';
import About from './page/About/index';
import Home from './page/Home/index';
import Error404 from './page/Error404';
import Apartment from './page/Apartment/index';
import Footer from './component/Footer';
import Navbar from './component/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path ="/Apartment/:id" element={<Apartment />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

