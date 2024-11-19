import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import { motion } from 'framer-motion';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Your message has been sent!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div 
        className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-6 text-primary text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{color:'rgb(60, 61, 55)'}}
        >
          Contact Us
        </motion.h1>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" type="email" placeholder="Your Email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="block mb-2">Company Name</label>
            <Input id="company" type="text" placeholder="Your Company Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-2">Country</label>
            <Input id="country" type="text" placeholder="Your Country" required />
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label htmlFor="export-interest" className="block mb-2">Export Interests</label>
            <Textarea id="export-interest" placeholder="Products of interest, quantities, etc." required />
          </div>
          <div className="mb-4 col-span-1 md:col-span-2">
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" placeholder="Your Message" required />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <Button type="submit">Send Message</Button>
          </div>
        </motion.form>
        
        <motion.p 
          className="mt-6 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We look forward to connecting with you and exploring export opportunities!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Contact;
