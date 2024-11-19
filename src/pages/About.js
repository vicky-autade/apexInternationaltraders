'use client'

import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Leaf,
  Sprout,
  Users,
  Award,
  History,
  Globe,
  Recycle,
  Truck,
  Heart,
  Droplets,
  Coffee,
} from 'lucide-react'

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-16 bg-gradient-to-b from-green-50 to-white"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12 text-center"
        variants={fadeInUp}
        style={{color:'rgb(60, 61, 55)'}}
      >
        About Apex International Traders
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        variants={staggerChildren}
      >
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
            <Leaf className="mr-4 w-8 h-8" /> Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To provide sustainable and ethically sourced agricultural products
            that nourish communities and promote environmental well-being. We
            strive to create a positive impact on both local farmers and global
            consumers, fostering a healthier planet through responsible farming and trade practices.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
            <Sprout className="mr-4 w-8 h-8" /> Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To become a global leader in sustainable agriculture, inspiring
            others to adopt environmentally friendly practices. We envision a
            world where ethical farming and international trade go hand in hand,
            creating a sustainable food system that benefits both people and the planet.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-6 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
          <History className="mr-4 w-8 h-8" /> Our History
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded in 2015, Apex International Traders began as a small family
          farm in Pune, India. Driven by a passion for organic farming and a
          commitment to ethical practices, we've expanded our operations to
          serve customers worldwide. Our journey from a local farm to an
          international exporter is a testament to our dedication to quality and
          sustainability.
        </p>
        <motion.ul className="mt-6 space-y-4" variants={staggerChildren}>
          <motion.li variants={fadeInUp} className="flex items-start">
            <span className="mr-2 font-bold">2015:</span> Established as a small family farm in Pune, focusing on organic vegetables.
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <span className="mr-2 font-bold">2017:</span> Expanded into frozen vegetables, investing in state-of-the-art freezing technology.
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <span className="mr-2 font-bold">2020:</span> Began exporting products to neighboring countries, marking our entry into international markets.
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <span className="mr-2 font-bold">2023:</span> Launched our line of dehydrated products, further diversifying our offerings.
          </motion.li>
          {/* <motion.li variants={fadeInUp} className="flex items-start">
            <span className="mr-2 font-bold">2023:</span> Reached a milestone of serving customers in over 20 countries worldwide.
          </motion.li> */}
        </motion.ul>
      </motion.div>

      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        variants={fadeInUp}
        style={{color:'rgb(60, 61, 55)'}}
      >
        Our Products
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={staggerChildren}
      >
        {[
          {
            name: 'Frozen Peas',
            src: require('../image/peas.jpg'),
            description:
              'Sweet and tender peas, flash-frozen to preserve nutrients and flavor. Ideal for quick and nutritious meal preparations.',
          },
          {
            name: 'Frozen Corn',
            src: require('../image/corn.jpg'),
            description:
              'Crisp and juicy corn kernels, perfect for a variety of dishes. Our freezing process ensures year-round availability of summer-fresh taste.',
          },
          {
            name: 'Dehydrated Onions',
            src: require('../image/onion.jpg'),
            description:
              'Convenient and long-lasting, ideal for seasonings and processed foods. Our dehydration process locks in flavor while extending shelf life.',
          },
          {
            name: 'Organic Spices',
            src: require('../image/spices.jpg'),
            description:
              'A range of certified organic spices, sourced from the finest farms in India. Perfect for adding authentic flavors to any cuisine.',
          },
          {
            name: 'Fresh Vegetables',
            src: require('../image/vegetables.jpg'),
            description:
              'A variety of fresh, locally sourced vegetables. We work directly with farmers to ensure the highest quality and freshness.',
          },
          {
            name: 'Pulses and Lentils',
            src: require('../image/lentils.jpg'),
            description:
              'High-quality pulses and lentils, rich in protein and fiber. Sourced from sustainable farms and carefully processed for optimal nutrition.',
          },
        ].map((product, index) => (
          <motion.div
            key={product.name}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            variants={fadeInUp}
          >
            <img
              src={product.src}
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto mb-6 rounded-full"
            />
            <h3 className="text-2xl font-semibold mb-4" style={{color:'rgb(60, 61, 55)'}}>
              {product.name}
            </h3>
            <p className="text-lg text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
          <Award className="mr-4 w-8 h-8" /> Our Values
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Recycle className="mr-4 w-6 h-6 text-green-600" /> 
            <span><strong>Sustainability:</strong> We prioritize eco-friendly practices in all our operations, from farming to packaging.</span>
          </motion.li>
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Users className="mr-4 w-6 h-6 text-blue-600" /> 
            <span><strong>Integrity:</strong> We maintain honest and transparent relationships with our partners, customers, and stakeholders.</span>
          </motion.li>
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Award className="mr-4 w-6 h-6 text-yellow-600" /> 
            <span><strong>Quality:</strong> We ensure the highest standards in our products and services through rigorous quality control measures.</span>
          </motion.li>
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Sprout className="mr-4 w-6 h-6 text-green-600" /> 
            <span><strong>Innovation:</strong> We continuously seek new ways to improve our processes, products, and environmental impact.</span>
          </motion.li>
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Heart className="mr-4 w-6 h-6 text-red-600" /> 
            <span><strong>Community:</strong> We support and empower local farming communities through fair trade practices and education.</span>
          </motion.li>
          <motion.li className="flex items-center" variants={fadeInUp}>
            <Coffee className="mr-4 w-6 h-6 text-brown-600" /> 
            <span><strong>Tradition:</strong> We honor traditional farming wisdom while embracing modern sustainable practices.</span>
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
          <Users className="mr-4 w-8 h-8" /> Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our dedicated team of farmers, agricultural experts, and researchers
          is committed to delivering the highest quality products while
          minimizing our environmental impact. With diverse expertise and a
          shared passion for sustainable agriculture, we work together to bring
          the best of Indian produce to the world.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerChildren}
        >
          {['Expert Farmers', 'Skilled Agronomists', 'Quality Control Specialists', 'Sustainability Experts', 'Food Scientists', 'Supply Chain Managers'].map((role) => (
            <motion.div
              key={role}
              className="bg-green-100 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-green-800">{role}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
          <Globe className="mr-4 w-8 h-8" /> Global Reach
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          From our roots in Pune, India, we've expanded our reach to serve
          customers across the globe. Our products are enjoyed in kitchens and
          restaurants worldwide, bringing a taste of India's finest produce to
          international markets.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerChildren}
        >
          {[/*'North America', 'Europe', 'Middle East', 'Southeast Asia', 'Australia', 'Africa'*/].map((region) => (
            <motion.div
              key={region}
              className="bg-blue-100 p-6 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-blue-800">{region}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg mb-16"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-8 flex items-center" style={{color:'rgb(60, 61, 55)'}}>
          <Truck className="mr-4 w-8 h-8" /> Our Commitment to Sustainability
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          At Apex International Traders, sustainability is at the core of everything we do. We are committed to minimizing our environmental impact while maximizing the quality and nutritional value of our products.
        </p>
        <motion.ul className="space-y-4" variants={staggerChildren}>
          <motion.li variants={fadeInUp} className="flex items-start">
            <Leaf className="mr-4 w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span><strong>Organic Farming:</strong> We promote and practice organic farming methods, avoiding harmful pesticides and synthetic fertilizers.</span>
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <Droplets className="mr-4 w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span><strong>Water Conservation:</strong> Our advanced irrigation systems and water recycling programs significantly reduce water usage.</span>
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <Recycle className="mr-4 w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <span><strong>Packaging:</strong> We use eco-friendly, biodegradable packaging materials wherever possible to reduce plastic waste.</span>
          </motion.li>
          <motion.li variants={fadeInUp} className="flex items-start">
            <Truck className="mr-4 w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <span><strong>Carbon Footprint:</strong> We're constantly working to optimize our supply chain and reduce carbon emissions in transportation.</span>
          </motion.li>
        </motion.ul>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        style={{ scale }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-6" style={{color:'rgb(60, 61, 55)'}}>
          Join Us in Our Mission
        </h2>
        <p className="text-xl text-gray-700">
          Together, we can create a more sustainable and nourishing world
          through ethical agriculture and trade. Partner with us to make a positive impact on the global food system and the environment.
        </p>
      </motion.div>
    </motion.div>
  )
}