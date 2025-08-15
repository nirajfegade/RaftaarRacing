import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { gameScreenshots } from '@/data/gameData';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const frameWidth = 360;
  const videos = [
    { title: 'Official Teaser', src: '/trailer1.mp4' },
    { title: 'Gameplay Preview', src: '/trailer2.mp4' },
    { title: 'Behind the Scenes', src: '/trailer3.mp4' }
  ];

  const [mutedStates, setMutedStates] = useState(videos.map(() => true));


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

  const toggleMute = (index: number) => {
    setMutedStates(prev => prev.map((_, i) => i === index ? !prev[i] : true));
  };

  const handleVideoScroll = () => {
    if (!scrollRef.current) return;
  
    const videos = scrollRef.current.querySelectorAll('video');
    const containerRect = scrollRef.current.getBoundingClientRect();
  
    let updatedMuteStates: boolean[] = [];
  
    videos.forEach((video, index) => {
      const videoRect = video.getBoundingClientRect();
      const fullyInView =
        videoRect.left >= containerRect.left &&
        videoRect.right <= containerRect.right;
  
      updatedMuteStates[index] = !fullyInView; // mute if not fully in view
    });
  
    // If none are in view, mute all
    if (!updatedMuteStates.includes(false)) {
      updatedMuteStates = updatedMuteStates.map(() => true);
    }
  
    setMutedStates(updatedMuteStates);
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
          <button 
            onClick={() => scrollToSlide(activeIndex - 1)} 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-xl bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            disabled={activeIndex === 0}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scrollToSlide(activeIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-xl bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            disabled={activeIndex === gameScreenshots.length - 1}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

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
            Watch the Trailers
          </h3>

          <div className="relative max-w-[400px] mx-auto">
            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: -frameWidth, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={() => scrollRef.current?.scrollBy({ left: frameWidth, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 text-white rounded-full hover:bg-black/70 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              onScroll={handleVideoScroll}
              className="flex overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory"
            >
              {videos.map((video, index) => (
  <div key={index} className="flex-shrink-0 w-[360px] h-[640px] snap-center px-2">
    <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
      <video
        autoPlay
        loop
        muted={mutedStates[index]}
        playsInline
        className="w-full h-full object-cover"
        preload="auto"
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={() => toggleMute(index)}
        className="absolute top-3 right-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
      >
        {mutedStates[index] ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l11-7M19 5L5 19" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l11-7" />
          </svg>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2 text-left">
        {video.title}
      </div>
    </div>
  </div>
))}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
