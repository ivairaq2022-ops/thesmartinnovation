import { useEffect, useState } from 'react';
import CyberBackground from './components/CyberBackground';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactRequest, setContactRequest] = useState(null);

  const navigateToContact = (message = '') => {
    setContactRequest({ message, id: Date.now() });
    setCurrentPage('home');
  };

  useEffect(() => {
    if (!contactRequest || currentPage !== 'home') return;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }, [contactRequest, currentPage]);

  return (
    <>
      <CyberBackground />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} navigateToContact={navigateToContact} />
      <main style={{ minHeight: 'calc(100vh - 220px)' }}>
        {currentPage === 'home' && <Home contactMessage={contactRequest?.message} setCurrentPage={setCurrentPage} />}
        {currentPage === 'services' && <Services navigateToContact={navigateToContact} />}
        {currentPage === 'pricing' && <Pricing navigateToContact={navigateToContact} />}
      </main>
      <Footer setCurrentPage={setCurrentPage} navigateToContact={navigateToContact} />
    </>
  );
}

export default App;
