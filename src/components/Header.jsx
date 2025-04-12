import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
     <div className="text-2xl font-bold flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-45 h-18 rounded-full" />
          {/* <span>GreenRoot Revivers</span> */}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-green-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-green-300 transition duration-300">About</Link>
          <Link to="/Projects" className="hover:text-green-300 transition duration-300">Projects</Link>
          <Link to="/services" className="hover:text-green-300 transition duration-300">Services</Link>
          <Link to="/contact" className="hover:text-green-300 transition duration-300">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {!menuOpen ? (
            <div className="space-y-1 cursor-pointer">
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white" />
            </div>
          ) : (
            <div className="text-3xl font-bold cursor-pointer">&times;</div>
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-green-800 text-white px-6 py-4 space-y-4">
          <Link to="/" onClick={closeMenu} className="block hover:text-green-300 transition duration-300">Home</Link>
          <Link to="/About" onClick={closeMenu} className="block hover:text-green-300 transition duration-300">About</Link>
          <Link to="/Trees" onClick={closeMenu} className="block hover:text-green-300 transition duration-300">Trees</Link>
          <Link to="/Services" onClick={closeMenu} className="block hover:text-green-300 transition duration-300">Services</Link>
          <Link to="/Contact" onClick={closeMenu} className="block hover:text-green-300 transition duration-300">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
