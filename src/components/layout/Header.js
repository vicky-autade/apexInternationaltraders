import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`${
        isScrolled ? 'bg-primary' : 'bg-primary'
      } text-white py-6 sticky top-0 z-50 transition-all duration-300 ease-in-out`}
      style={{
        fontWeight: 'bold',
        padding: '20px',  // Consistent padding
        height: '80px',   // Set a fixed height
        display: 'flex',  // Ensure proper layout
        alignItems: 'center',  // Center content vertically
      }}
    >
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/" className="text-3xl font-extrabold mb-4 sm:mb-0 tracking-wide">
            Apex International Traders
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul
          className="flex space-x-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
        >
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/" className="text-lg hover:text-secondary transition-colors">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/about" className="text-lg hover:text-secondary transition-colors">
              About Us
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/products" className="text-lg hover:text-secondary transition-colors">
              Our Products
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/contact" className="text-lg hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.header>
  );
}

export default Header;
