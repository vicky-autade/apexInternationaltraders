import React from 'react';
import { motion } from 'framer-motion';

function Products() {
  const products = [
    { name: "Frozen Peas", description: "Supporting farmers, delivering flavor", src: require("../image/peas.jpg") },
    { name: "Frozen Sweet Corn", description: "Premium-grade, hand-selected kernels", src: require("../image/corn.jpg") },
    { name: "Dehydrated Onions", description: "A burst of natural flavor, dehydrated for your delight", src: require("../image/onion.jpg") },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src={product.src} alt={product.name} className="w-full h-48 object-cover rounded" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <h2 className="text-2xl font-semibold mb-2 text-secondary">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Products;
