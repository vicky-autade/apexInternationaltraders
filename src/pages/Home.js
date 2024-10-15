import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Sun, Droplets } from 'lucide-react';
import Button from '../components/ui/Button';
import Carousel from 'react-multi-carousel'; // Add a react carousel package
import 'react-multi-carousel/lib/styles.css'; // Carousel styles
import  { useEffect } from 'react'; // Import useEffect
import { useLocation } from 'react-router-dom';


function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const location = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]); 
  
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay }
  });

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const products = [
    { imgSrc: require('../image/peas.jpg'), title: 'Frozen Peas' },
    { imgSrc: require('../image/corn.jpg'), title: 'Frozen Sweet Corn' },
    { imgSrc: require('../image/onion.jpg'), title: 'Dehydrated Onions' }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Taste the world, grown locally
        </motion.h1>
        
        <motion.p className="text-xl text-center mb-12 text-secondary" {...fadeInUp}>
          Experience the finest agricultural exports from the heart of India
        </motion.p>

        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/products">
            <Button>Explore Our Products</Button>
          </Link>
        </motion.div>

        {/* Product Carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            beforeChange={(previousSlide, nextSlide) => setActiveIndex(nextSlide)} // Track active index
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`p-4 transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'scale-110 -translate-y-6' : 'scale-100'
                }`}
                style={{ minHeight: '300px' }} // Ensures all images have the same height
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="rounded-lg shadow-lg"
                  style={{
                    width: '100%',
                    height: '200px', // Keep all images same size
                    objectFit: 'cover' // Ensures consistent sizing
                  }}
                />
                <h2 className="text-center text-xl font-semibold mt-4">{product.title}</h2>
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* About Apex International Section */}
        <motion.div 
  className="bg-gray-100 p-8 rounded-lg shadow-xl text-center mb-16 transition-transform transform hover:scale-105"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <motion.h2 className="text-4xl font-bold text-gray-800 mb-6" {...fadeIn(0.1)}>
    About Apex International
  </motion.h2>
  
  <motion.p className="text-lg text-gray-700 mb-4" {...fadeIn(0.2)}>
    Apex International is dedicated to providing high-quality, sustainable agricultural products. 
  </motion.p>
  
  <motion.p className="text-lg text-gray-700 mb-6" {...fadeIn(0.3)}>
    Our mission is to support farmers while delivering the best farm-to-table experience for our customers. 
  </motion.p>
  
  <motion.p className="text-lg text-gray-700 mb-4" {...fadeIn(0.4)}>
    We specialize in a wide range of products including frozen sweet corn, green peas,  vegetables, dehydrated onions, and organic spices. 
  </motion.p>
  
  <Link to="/about">
    <button className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
      Learn More About Us
    </button>
  </Link>
</motion.div>


        {/* Additional Info and USPs */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { title: "Sustainability", description: "We prioritize sustainable farming practices to ensure long-term environmental health.", icon: <Leaf className="w-12 h-12 text-primary" /> },
            { title: "Quality Assurance", description: "All products undergo rigorous quality checks to maintain our high standards.", icon: <Sun className="w-12 h-12 text-yellow-500" /> },
            { title: "Farmer Empowerment", description: "We work closely with farmers to provide them with fair prices and training.", icon: <Droplets className="w-12 h-12 text-blue-500" /> }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
              >
                {feature.icon}
              </motion.div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div 
  className="bg-primary text-white p-8 rounded-lg shadow-lg text-center mb-16"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>
  <motion.h2 className="text-4xl font-semibold mb-6" {...fadeIn(0.6)}>
    Discover Quality Agricultural Products!
  </motion.h2>
  <motion.p className="text-lg text-white mb-8" {...fadeIn(0.7)}>
    Experience the taste of fresh, organic produce sourced directly from our dedicated farmers. Join us in promoting sustainable farming practices that benefit both our community and the environment.
  </motion.p>
  <Link to="/products">
    <button className="bg-secondary text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
      Explore Our Products
    </button>
  </Link>
</motion.div>

      </motion.div>
    </div>
  );
}

export default Home;
