import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src="./logo.png" alt="Logo" className="w-28 h-7" />

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500 font-bold">Home</Link></li>
          <li><Link to="./find-doctor" className="hover:text-blue-500">Find a Doctor</Link></li>
          <li><Link to="/apps" className="hover:text-blue-500">Apps</Link></li>
          <li><Link to="/testimonials" className="hover:text-blue-500">Testimonials</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-gray-700 font-sm text-left">
            <li><Link to="/" className="hover:text-blue-500 font-bold" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/find-doctor" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Find a Doctor</Link></li>
            <li><Link to="/apps" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Apps</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
            <li><Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
