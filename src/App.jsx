import React, { useState } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <CyberBackground />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={{ minHeight: 'calc(100vh - 220px)' }}>
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'pricing' && <Pricing />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
