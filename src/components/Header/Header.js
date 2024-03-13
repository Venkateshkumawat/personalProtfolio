// Header.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons library
import SideNav from './SideNav';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-2xl m-3">Venkatesh Kumawat</div>
        <div className="md:hidden">
          <button 
            className="block p-2 text-white" 
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <FaTimes /> : <FaBars />} {/* Use icons for the button */}
          </button>
        </div>
        <nav className="md:flex md:space-x-10 md:m-5 hidden md:block">
          <a href="#" className="block md:inline-block hover:text-accent">Home</a>
          <a href="#" className="block md:inline-block hover:text-accent">Projects</a>
          <a href="#" className="block md:inline-block hover:text-accent">Skills</a>
          <a href="#" className="block md:inline-block hover:text-accent">Blog</a>
          <a href="#" className="block md:inline-block hover:text-accent">Contact</a>
        </nav>
        {/* Conditionally render SideNav component */}
        <SideNav isOpen={showNav} onClose={() => setShowNav(false)} />
      </div>
    </header>
  );
};

export default Header;
