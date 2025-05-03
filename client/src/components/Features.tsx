import { motion } from 'framer-motion';
import { gameFeatures } from '@/data/gameData';

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="features" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
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
            <span className="text-primary">Game</span> Features
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Experience the most exhilarating kart racing game with unique features designed to keep you on the edge of your seat.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {gameFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className={`feature-card bg-gradient-to-br from-dark to-darker p-6 rounded-xl border border-${feature.color}/20 transition-all duration-500 hover:border-${feature.color}/50`}
              variants={item}
            >
              <div className={`w-16 h-16 bg-${feature.color}/20 text-${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`fas ${feature.icon} text-2xl`}></i>
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-light"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-light/70 mb-4">
                {feature.description}
              </p>
              <a href="#" className={`text-${feature.color} font-medium flex items-center`}>
                Learn more 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
