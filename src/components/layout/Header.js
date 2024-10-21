import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import logo from '../../image/apex_logo_page.jpg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(prev => !prev);
    }, 300);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`py-6 sticky top-0 z-50 transition-all duration-300 ease-in-out`}
      style={{
        fontWeight: 'bold',
        padding: '10px 20px',
        height: '115px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:"white",
        borderBottom:'solid 2px rgba(128, 128, 128, 0.3)'
      }}
    >
      <nav className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Logo and Company Name */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center space-x-1">
            <img 
              src={logo} 
              alt="Apex International Traders Logo" 
              className="h-20.2 w-40 mr-1"
              style={{ mixBlendMode: 'multiply', objectFit: 'cover' }}
            />
            <span className="text-2xl text-primary font-extrabold tracking-wide hidden sm:inline whitespace-nowrap">
              Apex International Traders
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.ul
          className="hidden md:flex space-x-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
        >
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/" className="text-lg text-primary hover:text-secondary transition-colors">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/about" className="text-lg text-primary hover:text-secondary transition-colors">
              About Us
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/products" className="text-lg text-primary hover:text-secondary transition-colors">
              Our Products
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.15, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
          >
            <Link to="/contact" className="text-lg text-primary hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-dark"
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          style={{backgroundColor:'black',color:'white'}}
        >
          <Menu size={45} />
        </motion.button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white"
          >
            <ul className="flex flex-col items-center py-4">
              <li className="my-2 border-b border-black w-full text-center md:border-none">
                <Link to="/" className="text-lg hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="my-2 border-b border-black w-full text-center md:border-none">
                <Link to="/about" className="text-lg hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className="my-2 border-b border-black w-full text-center md:border-none">
                <Link to="/products" className="text-lg hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Our Products
                </Link>
              </li>
              <li className="my-2 border-b border-black w-full text-center md:border-none">
                <Link to="/contact" className="text-lg hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;