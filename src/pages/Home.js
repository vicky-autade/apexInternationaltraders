import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Sun, Droplets, Award, Globe, Users, Truck, Clock } from 'lucide-react';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay }
  });

  const products = [
    { imgSrc: require('../image/peas.jpg'), title: 'Frozen Peas' },
    { imgSrc: require('../image/corn.jpg'), title: 'Frozen Sweet Corn' },
    { imgSrc: require('../image/onion.jpg'), title: 'Dehydrated Onions' },
    { imgSrc: require('../image/spices.jpg'), title: 'Organic Spices' },
    { imgSrc: require('../image/vegetables.jpg'), title: 'Fresh Vegetables' },
    { imgSrc: require('../image/lentils.jpg'), title: 'Fresh Vegetables' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{color:'rgb(60, 61, 55)'}}
        >
          Taste the World, Grown Locally
        </motion.h1>

        <motion.p className="text-xl text-center mb-12 text-secondary" {...fadeInUp} style={{color:'rgb(60, 61, 55)'}}>
          Experience the finest agricultural exports from the heart of India
        </motion.p>

        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/products">
            <button className="bg-primary text-white hover:bg-secondary px-6 py-2 rounded-md">
              Explore Our Products
            </button>
          </Link>
        </motion.div>

        {/* Enhanced Product Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <AnimatePresence>
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 ${index === activeIndex ? 'z-10' : 'z-0'}`}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : -300 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-3xl font-bold">{product.title}</h2>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
            We specialize in a wide range of products including frozen sweet corn, green peas, vegetables, dehydrated onions, and organic spices.
          </motion.p>

          <Link to="/about">
            <button className="bg-primary text-white hover:bg-secondary px-6 py-2 rounded-md">
              Learn More About Us
            </button>
          </Link>
        </motion.div>

        {/* Enhanced USPs */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { title: "Sustainability", description: "We prioritize sustainable farming practices to ensure long-term environmental health.", icon: <Leaf className="w-12 h-12 text-primary" /> },
            { title: "Quality Assurance", description: "All products undergo rigorous quality checks to maintain our high standards.", icon: <Award className="w-12 h-12 text-yellow-500" /> },
            { title: "Farmer Empowerment", description: "We work closely with farmers to provide them with fair prices and training.", icon: <Users className="w-12 h-12 text-blue-500" /> },
            { title: "Global Reach", description: "Our products are enjoyed by customers around the world.", icon: <Globe className="w-12 h-12 text-purple-500" /> },
            { title: "Organic Focus", description: "We specialize in organic produce for healthier living.", icon: <Sun className="w-12 h-12 text-orange-500" /> },
            { title: "Water Conservation", description: "Our innovative irrigation techniques save millions of gallons annually.", icon: <Droplets className="w-12 h-12 text-blue-400" /> }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 260, damping: 20 }}
                >
                  {feature.icon}
                </motion.div>
                <h2 className="text-2xl font-semibold mt-4 mb-2" style={{color:'rgb(60, 61, 55)'}}>{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* New Section: Our Process */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8" style={{color:'rgb(60, 61, 55)'}}>Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Harvesting", icon: <Leaf className="w-12 h-12 text-primary" />, description: "Carefully selected produce at peak ripeness" },
              { title: "Processing", icon: <Clock className="w-12 h-12 text-blue-500" />, description: "Quick processing to lock in freshness" },
              { title: "Quality Check", icon: <Award className="w-12 h-12 text-yellow-500" />, description: "Rigorous quality control measures" },
              { title: "Distribution", icon: <Truck className="w-12 h-12 text-green-500" />, description: "Efficient worldwide distribution network" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mt-4 mb-2" style={{color:'rgb(60, 61, 55)'}}>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action Banner */}
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
            <button className="bg-secondary text-white hover:bg-primary px-6 py-2 rounded-md">
              Explore Our Products
            </button>
          </Link>
        </motion.div>

        {/* New Section: Environmental Impact */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8" style={{color:'rgb(60, 61, 55)'}}>Our Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{color:'rgb(60, 61, 55)'}}>Sustainable Farming Practices</h3>
              <p className="text-gray-600 mb-4">Our commitment to sustainable farming practices has led to a 30% reduction in water usage and a 25% decrease in chemical fertilizers over the past five years.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: '30%' }}
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ duration: 1, delay: 1.6 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-500 mt-2">30% Reduction in Water Usage</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{color:'rgb(60, 61, 55)'}}>Carbon Footprint Reduction</h3>
              <p className="text-gray-600 mb-4">Through innovative logistics and packaging solutions, we've managed to reduce our carbon emissions by 40% compared to industry standards.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: '40%' }}
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ duration: 1, delay: 1.8 }}
                ></motion.div>
              </div>
              <p className="text-sm text-gray-500 mt-2">40% Reduction in Carbon Emissions</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;