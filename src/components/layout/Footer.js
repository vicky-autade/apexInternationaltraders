'use client'

import React from 'react'
// import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/apex_international_traders?igsh=MXgxYzZxdzR5ZDZkcw==', label: 'Instagram' }
  ]

  return (
    <footer className="bg-primary text-white py-8 px-4 mt-16">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Apex International Traders</h3>
            <p className="text-sm">&copy; {currentYear} All rights reserved</p>
            <p className="text-sm">Empowering sustainable agriculture globally</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <p className="text-sm">Pune, India</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <a href="mailto:apexinternational421@gmail.com" className="text-sm hover:text-secondary transition-colors">
                apexinternational421@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <p className="text-sm">+91 8624987228</p>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="w-6 h-6 hover:text-secondary transition-colors" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-8 pt-4 border-t border-white/20 text-center text-sm"
          variants={fadeInUp}
        >
          <p>Designed and developed with ❤️ by Apex International Team</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer