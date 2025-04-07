import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
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
