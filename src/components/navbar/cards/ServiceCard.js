


// src/components/Footer.js

import React from 'react';

const ServiceCard = () => {
  return (
    <div className=" text-white py-8 w-full ">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">System status</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Compare Kinsta to competitors</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">All resources</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Changelog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Knowledge Base</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Development tools</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact us</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Send us a question</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Call sales</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Request a live demo</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">Ask the community</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
