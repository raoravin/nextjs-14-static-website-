"use client";

import React from 'react';
import Image from 'next/image';
import { FaSquareTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiYoutubeshorts } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className=" text-white py-16 mt-auto">
      <div className="container mx-auto max-sm:px-4 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 xl:8">
          <div>
            <h2 className="text-2xl font-bold mb-4">SYNCK</h2>
            <p className="mb-4">We provide the expertise and support to propel your business forward.</p>
            <div className="flex flex-col sm:flex-row sm:space-x-2 my-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 bg-gray-800 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none">Get Started</button>
            </div>
            <div className="flex space-x-4 mt-10">
              <Image src="/images/test.png" alt="alt" width={60} height={60} />
              <Image src="/images/test.png" alt="alt" width={60} height={60} />
              <Image src="/images/test.png" alt="alt" width={60} height={60} />
              <Image src="/images/test.png" alt="alt" width={60} height={60} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Lets get started on something great</h3>
            <p className="mb-4">
              Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.
            </p>
            <button className="bg-blue-600 px-4 py-2 rounded-lg mb-4">Get an appointment now</button>
            <div className="flex space-x-8">
              <div>
                <h4 className="font-bold">2 Mins</h4>
                <p>Response Time</p>
              </div>
              <div>
                <h4 className="font-bold">99%</h4>
                <p>Client Satisfaction</p>
              </div>
              <div>
                <h4 className="font-bold">22+</h4>
                <p>Years Field Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">IT Support</li>
                <li className="mb-2">Web Design</li>
                <li className="mb-2">Development</li>
                <li className="mb-2">Cloud Things</li>
                <li className="mb-2">E-Commerce</li>
                <li className="mb-2">CRM Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">Blog</li>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Partners</li>
                <li className="mb-2">Careers</li>
                <li className="mb-2">Events</li>
                <li className="mb-2">Team</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">Case Studies</li>
                <li className="mb-2">Our Pricing</li>
                <li className="mb-2">Features</li>
                <li className="mb-2">Overview</li>
                <li className="mb-2">New Releases</li>
                <li className="mb-2">Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Our Fields</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">Healthcare</li>
                <li className="mb-2">Banks</li>
                <li className="mb-2">Logistics</li>
                <li className="mb-2">Supermarkets</li>
                <li className="mb-2">Industries</li>
                <li className="mb-2">Hotels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">Licenses</li>
                <li className="mb-2">Settings</li>
                <li className="mb-2">Cookies</li>
                <li className="mb-2">Document</li>
                <li className="mb-2">Terms</li>
                <li className="mb-2">Privacy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className=' max-sm:text-sm'>
                <li className="mb-2">Phone: +1-455-1482-236</li>
                <li className="mb-2">Phone: +1-938-740-7555</li>
                <li className="mb-2">Mail: bluebase@mail.com</li>
                <li className="mb-2">Mail: mandrodio@mail.com</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 max-sm:pr-0 max-lg:pr-8 space-y-4 max-sm:space-y-10 sm:space-y-0">
            <p>© 2023 All rights reserved by WordpressRiver</p>
            <div className="flex space-x-8 text-2xl">
              {/* <Image src="/images/test.png" alt="alt" width={40} height={40} />
              <Image src="/images/test.png" alt="alt" width={40} height={40} />
              <Image src="/images/test.png" alt="alt" width={40} height={40} />
              <Image src="/images/test.png" alt="alt" width={40} height={40} /> */}
              <span className=""><FaSquareTwitter /></span>
              <span className=""><FiInstagram /></span>
              <span className=""><SiYoutubeshorts/></span>
              <span className=""><FaFacebook /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
