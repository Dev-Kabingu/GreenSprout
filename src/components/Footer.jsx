import React from "react";
import logo from "../assets/seedling.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
      
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold">GreenSprout Nursery</span>
          </div>
          <p className="leading-relaxed">
            Nurturing nature one seed at a time. We provide high-quality seedlings and tree planting services to support a greener planet.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-green-300 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-300 transition duration-300">About</Link></li>
            <li><Link to="/trees" className="hover:text-green-300 transition duration-300">Trees</Link></li>
            <li><Link to="/services" className="hover:text-green-300 transition duration-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-green-300 transition duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@greensprout.com" className="hover:text-green-300 transition">info@greensprout.com</a></li>
            <li>Phone: <a href="tel:+254712345678" className="hover:text-green-300 transition">+254 712 345 678</a></li>
            <li>Location: Kutus Kirinyaga, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-green-800 px-4">
        &copy; {new Date().getFullYear()} GreenSprout Nursery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
