import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaDiscord, FaYoutube, FaTwitch } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would handle the form submission here
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-darker to-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl font-bold mb-6 text-light"
                style={{ fontFamily: '"Racing Sans One", cursive' }}
              >
                Join The <span className="text-primary">Race</span>
              </h2>
              <p className="text-light/70 mb-8">
                Subscribe to our newsletter to get the latest updates on RAFTAAR, including release dates, game features, and exclusive content.
              </p>
              
              <div className="bg-dark/50 backdrop-blur-md p-6 rounded-xl border border-primary/20 mb-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-light font-medium mb-2">Your Name</label>
                    <Input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-darker border border-primary/20 focus:border-primary/50 rounded-lg text-light outline-none transition-colors" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-light font-medium mb-2">Your Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-darker border border-primary/20 focus:border-primary/50 rounded-lg text-light outline-none transition-colors" 
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-light font-medium mb-2">Message (Optional)</label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-darker border border-primary/20 focus:border-primary/50 rounded-lg text-light outline-none transition-colors" 
                      placeholder="Any questions or comments?"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    Subscribe Now
                  </Button>
                </form>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-dark rounded-lg hover:bg-dark/70 transition-colors">
                  <FaDiscord className="text-indigo-400" />
                  <span className="text-light">Join Discord</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-dark rounded-lg hover:bg-dark/70 transition-colors">
                  <FaYoutube className="text-red-500" />
                  <span className="text-light">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-dark rounded-lg hover:bg-dark/70 transition-colors">
                  <FaTwitch className="text-purple-500" />
                  <span className="text-light">Twitch</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-xl rounded-full animate-pulse-slow"></div>
                <div className="relative rounded-xl overflow-hidden border-4 border-light/10">
                  <img 
                    src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="RAFTAAR character" 
                    className="w-full h-auto max-w-md animate-float"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
