import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Add font preloading
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Poppins:wght@300;400;500;600&family=Racing+Sans+One&display=swap',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
    ];
    
    fonts.forEach(font => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = font;
      document.head.appendChild(link);
    });
    
    // Add title
    document.title = 'RAFTAAR - Kart Racing Game';

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div className="font-poppins text-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
