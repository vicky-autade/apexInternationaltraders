'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    exportInterest: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormState({
        name: '',
        email: '',
        company: '',
        country: '',
        exportInterest: '',
        message: ''
      })
    }, 3000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{color:'rgb(60, 61, 55)'}}
        >
          Get in Touch
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 text-gray-600"
          {...fadeInUp}
        >
          We're here to answer any questions you may have about our products or export opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            {...fadeInUp}
          >
            <h2 className="text-2xl font-semibold mb-6" style={{color:'rgb(60, 61, 55)'}}>Contact Information</h2>
            <ul className="space-y-4">
              <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
                <Phone className="w-6 h-6 mr-4 text-primary" />
                <span>+91 8624987228</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
                <Mail className="w-6 h-6 mr-4 text-primary" />
                <span>apexinternationaltraders@gmail.com</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
                <MapPin className="w-6 h-6 mr-4 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
                <Clock className="w-6 h-6 mr-4 text-primary" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM IST</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6" style={{color:'rgb(60, 61, 55)'}}>Send Us a Message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <Input id="name" type="text" placeholder="Your Name" required value={formState.name} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="Your Email" required value={formState.email} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
                <Input id="company" type="text" placeholder="Your Company Name" required value={formState.company} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-700">Country</label>
                <Input id="country" type="text" placeholder="Your Country" required value={formState.country} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="exportInterest" className="block mb-2 text-sm font-medium text-gray-700">Export Interests</label>
              <Textarea id="exportInterest" placeholder="Products of interest, quantities, etc." required value={formState.exportInterest} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your Message" required value={formState.message} onChange={handleChange} />
            </div>
            <div className="flex justify-center">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
            {submitSuccess && (
              <motion.p 
                className="mt-4 text-center text-green-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message. We'll get back to you soon!
              </motion.p>
            )}
          </motion.form>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{color:'rgb(60, 61, 55)'}}>Why Choose Apex International?</h2>
          <p className="text-gray-600 mb-6">
            We're committed to providing high-quality agricultural products while supporting sustainable farming practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Quality Assurance", description: "Rigorous quality control measures" },
              { title: "Sustainable Practices", description: "Environmentally friendly farming methods" },
              { title: "Global Reach", description: "Exporting to over 20 countries worldwide" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold mb-2" style={{color:'rgb(60, 61, 55)'}}>{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact