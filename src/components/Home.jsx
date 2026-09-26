import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import Contact from './Contact';

const Home = ({ contactMessage, setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <WhoWeAre />
      <Contact key={contactMessage || 'empty'} initialMessage={contactMessage} />
    </>
  );
};

export default Home;
