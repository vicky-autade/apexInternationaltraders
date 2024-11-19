'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Sun, Droplets, Award, Heart, Coffee } from 'lucide-react'

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const products = [
    { 
      name: "Frozen Peas", 
      description: "Supporting farmers, delivering flavor. Our peas are flash-frozen at peak ripeness to lock in nutrients and taste.",
      src: require("../image/peas.jpg"),
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      benefits: ["Rich in vitamins A and C", "High in fiber", "Versatile ingredient"]
    },
    { 
      name: "Frozen Sweet Corn", 
      description: "Premium-grade, hand-selected kernels. Enjoy the taste of summer all year round with our sweet and crunchy corn.",
      src: require("../image/corn.jpg"),
      icon: <Sun className="w-6 h-6 text-yellow-600" />,
      benefits: ["Natural sweetness", "Source of antioxidants", "Great for grilling"]
    },
    { 
      name: "Dehydrated Onions", 
      description: "A burst of natural flavor, dehydrated for your delight. Convenient and long-lasting, perfect for various cuisines.",
      src: require("../image/onion.jpg"),
      icon: <Droplets className="w-6 h-6 text-purple-600" />,
      benefits: ["Extended shelf life", "Intense flavor", "Easy to store"]
    },
    { 
      name: "Organic Spices", 
      description: "A carefully curated selection of organic spices to elevate your culinary creations. Sourced from the finest farms in India.",
      src: require("../image/spices.jpg"),
      icon: <Coffee className="w-6 h-6 text-red-600" />,
      benefits: ["100% organic", "Rich in antioxidants", "Authentic flavors"]
    },
    { 
      name: "Fresh Vegetables", 
      description: "Farm-fresh vegetables delivered straight to your doorstep. Experience the crisp taste of locally sourced produce.",
      src: require("../image/vegetables.jpg"),
      icon: <Heart className="w-6 h-6 text-green-600" />,
      benefits: ["Locally sourced", "Pesticide-free", "Maximum freshness"]
    },
    { 
      name: "Pulses and Lentils", 
      description: "High-quality pulses and lentils, rich in protein and fiber. A staple for healthy and hearty meals.",
      src: require("../image/lentils.jpg"),
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      benefits: ["High in protein", "Rich in fiber", "Versatile cooking options"]
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-green-50 to-white">
      <motion.h1 
        className="text-5xl font-bold mb-8 text-center"
        style={{color:'rgb(60, 61, 55)'}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>
      <motion.p 
        className="text-xl text-center mb-12 text-gray-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover our range of high-quality, sustainably sourced products
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex flex-col border rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 relative overflow-hidden rounded-lg">
              <img src={product.src} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
              <div className="absolute top-2 right-2 bg-white rounded-full p-2">
                {product.icon}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2" style={{color:'rgb(60, 61, 55)'}}>{product.name}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-green-700">Benefits:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            <motion.button 
              className="mt-6 bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{color:'rgb(60, 61, 55)'}}>Why Choose Our Products?</h2>
        <p className="text-xl text-gray-600 mb-8">At Apex International, we're committed to quality, sustainability, and supporting local farmers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Sustainably Sourced", icon: <Leaf className="w-8 h-8 text-green-600" />, description: "We prioritize eco-friendly farming practices" },
            { title: "Premium Quality", icon: <Award className="w-8 h-8 text-yellow-600" />, description: "Rigorous quality control for the best products" },
            { title: "Supporting Communities", icon: <Heart className="w-8 h-8 text-red-600" />, description: "Fair trade practices to empower local farmers" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{color:'rgb(60, 61, 55)'}}>{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Products