import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-darker/90 z-10"></div>
        <div className="w-full h-full animate-zoom">
          <img src="\monochrome-race-cars-vehicle-wallpaper-preview.jpg"
            alt="Racing background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="animate-float"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-6xl md:text-8xl font-bold text-primary mb-4 tracking-wider"
              style={{ fontFamily: '"Racing Sans One", cursive' }}
            >
              RAFTAAR
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl font-medium text-light mb-8 max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fuel the Speed. Rule the Track.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              className="px-8 py-6 bg-primary hover:bg-primary/80 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 glow"
              onClick={() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
              Play Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Watch Trailer
            </Button>
          </motion.div>

          
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#features"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block animate-bounce"
        >
          <svg className="w-8 h-8 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
