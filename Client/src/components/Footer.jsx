import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-2xl font-bold">YourWebsite</h2>
          <p className="text-gray-400 mt-2">
            A modern blogging platform where ideas come to life. Stay inspired, stay connected.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/blogs" className="text-gray-400 hover:text-white">Blogs</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex mt-3 space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
