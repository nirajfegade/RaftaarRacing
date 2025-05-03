import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gameScreenshots } from '@/data/gameData';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.querySelector('.slide')?.clientWidth || 0;
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.querySelector('.slide')?.clientWidth || 0;
      const scrollPosition = carouselRef.current.scrollLeft;
      const index = Math.round(scrollPosition / slideWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="screenshots" className="py-20 bg-darker clip-path-diagonal relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-light"
            style={{ fontFamily: '"Racing Sans One", cursive' }}
          >
            Game <span className="text-secondary">Gallery</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Take a sneak peek at the high-octane action and vibrant world of RAFTAAR.
          </p>
        </motion.div>
        
        <div className="relative">
          <div 
            ref={carouselRef} 
            className="carousel flex overflow-x-auto pb-6 -mx-4 px-4 gap-4 hide-scrollbar"
            onScroll={handleScroll}
          >
            {gameScreenshots.map((screenshot, index) => (
              <motion.div 
                key={index}
                className="slide flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h3 className="text-light font-bold">{screenshot.title}</h3>
                      <p className="text-light/70 text-sm">{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {gameScreenshots.map((_, index) => (
              <button 
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-primary' : 'bg-light/30 hover:bg-primary'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 
            className="text-2xl font-bold mb-6 text-light"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Watch the Trailer
          </h3>
          <div className="max-w-4xl mx-auto aspect-video bg-dark/50 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center cursor-pointer group">
              <img 
                src="https://images.unsplash.com/photo-1548443690-54c461018b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Game trailer thumbnail" 
                className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute">
                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
