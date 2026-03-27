import { useEffect, useState } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ServiceExpertise from './components/ServiceExpertise';
import Founder from './components/Founder';
import Manifesto from './components/Manifesto';
import ProjectMosaic from './components/ProjectMosaic';
import DualCards from './components/DualCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ReconstructionNotice from './components/ReconstructionNotice';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    // Start lenis but stop it until loading is done
    lenis.stop();
    requestAnimationFrame(raf);

    // Stop scrolling to the top on reload initially
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsLoading(false);
      lenis.start();
    }, 2800); // Wait for the preloader animation

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Preloader isLoading={isLoading} />
      <div className={`relative w-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Intro />
          <ServiceExpertise />
          <Founder />
          <Manifesto />
          <ProjectMosaic />
          <DualCards />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <ReconstructionNotice />
    </>
  )
}

export default App;
