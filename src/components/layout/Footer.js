import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 px-5 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Company Info */}
        <motion.div 
          className="text-center md:text-left mb-4 md:mb-0 space-y-1 md:space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg font-bold" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            &copy; 2024 Apex International Traders
          </motion.p>
          <motion.p className="text-sm font-medium" {...fadeInWithDelay(0.3)}>
            Address: Pune, India
          </motion.p>
          <motion.p className="text-sm font-medium" {...fadeInWithDelay(0.4)}>
            Email: <Link to="mailto:apexinternational421@gmail.com" className="text-secondary hover:underline">apexinternational421@gmail.com</Link>
          </motion.p>
          <motion.p className="text-sm font-medium" {...fadeInWithDelay(0.5)}>
            Phone: <span className="text-secondary">+91 8624987228</span>
          </motion.p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link to="https://facebook.com" className="hover:text-secondary transition-colors">
              <Facebook className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link to="https://linkedin.com" className="hover:text-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link to="https://instagram.com" className="hover:text-secondary transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

// Helper function for delayed animations
const fadeInWithDelay = (delay) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay }
});

export default Footer;
