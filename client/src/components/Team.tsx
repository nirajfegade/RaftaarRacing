import { motion } from 'framer-motion';
import { teamMembers } from '@/data/gameData';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaArtstation, 
  FaSoundcloud 
} from 'react-icons/fa';

export default function Team() {
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

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'twitter':
        return <FaTwitter />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'github':
        return <FaGithub />;
      case 'artstation':
        return <FaArtstation />;
      case 'soundcloud':
        return <FaSoundcloud />;
      default:
        return <FaTwitter />;
    }
  };

  return (
    <section id="team" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
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
            Meet the <span className="text-accent">Team</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            The creative minds behind RAFTAAR who are passionate about creating the ultimate kart racing experience.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-dark to-darker p-5 rounded-xl border border-accent/10 transition-all duration-300 hover:border-accent/30 group"
              variants={item}
            >
              <div className="relative mb-5 overflow-hidden rounded-lg">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 
                className="text-xl font-bold text-light"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {member.name}
              </h3>
              <p className={`text-${member.color} font-medium text-sm mb-3`}>
                {member.role}
              </p>
              <p className="text-light/70 text-sm mb-4">
                {member.description}
              </p>
              <div className="flex gap-3">
                {member.social.map((social, i) => (
                  <a 
                    key={i}
                    href={social.url} 
                    className={`text-light/60 hover:text-${member.color} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(social.type)}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
