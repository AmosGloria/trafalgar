import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo on the left */}
        <img src="./logo.png" alt="Logo" className="w-28 h-7" />

        {/* Navigation Links on the right */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500 font-bold">Home</Link></li>
          <li><Link to="/find-doctor" className="hover:text-blue-500">Find a Doctor</Link></li>
          <li><Link to="/apps" className="hover:text-blue-500">Apps</Link></li>
          <li><Link to="/testimonials" className="hover:text-blue-500">Testimonials</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
