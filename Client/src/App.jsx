import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Franchise from './pages/Franchise';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Admin from './pages/Admin';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
        <Route path="/admin" element={<Admin />} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
