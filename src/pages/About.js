import React from 'react';
import cornImage from '../image/corn.jpg'; 
import peasImage from '../image/peas.jpg'; 
import onionImage from '../image/onion.jpg'; 

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">About Apex International Traders</h1>
      
      {/* Introductory Box */}
      <div className="bg-gray-100 p-6 mb-6 shadow-lg rounded-lg">
        <p className="mb-4 text-lg">
          Apex International Traders is a leading agricultural export company based in Pune, India. We specialize in providing high-quality frozen and dehydrated vegetables, connecting local farms to global markets. Our main product line includes premium frozen peas, frozen corn, and dehydrated onions.
        </p>
      </div>

      {/* Product Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frozen Peas */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <img 
            src={peasImage }
            alt="Frozen Peas" 
            className="mx-auto mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Frozen Peas</h2>
          <p>
            Our frozen peas are sourced from local farms, flash-frozen at their peak to preserve freshness and taste. They are a perfect addition to meals, offering both nutrition and flavor.
          </p>
        </div>

        {/* Frozen Corn */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <img 
            src={cornImage} 
            alt="Frozen Corn" 
            className="mx-auto mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Frozen Corn</h2>
          <p>
            Our frozen corn is carefully harvested and frozen to maintain its sweetness and texture. It’s a popular ingredient in both home-cooked and commercial kitchens.
          </p>
        </div>

        {/* Dehydrated Onions */}
        <div className="bg-white p-6 shadow-lg rounded-lg text-center">
          <img 
            src={onionImage}
            alt="Dehydrated Onions" 
            className="mx-auto mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <h2 className="text-2xl font-semibold mb-2 text-primary">Dehydrated Onions</h2>
          <p>
            We offer high-quality dehydrated onions that are versatile and long-lasting, perfect for use in seasoning blends, soups, and processed foods.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-100 p-6 mt-8 shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold mb-4 text-primary">Our Mission</h3>
        <p>
          At Apex International Traders, our mission is to bridge the gap between local farmers and global markets. We are dedicated to ensuring that the finest produce from Indian farms reaches dinner tables across the world, while maintaining our commitment to quality, sustainability, and customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default About;
