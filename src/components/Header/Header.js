// Header.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons library
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import Logo from './Logo1.png'; // Import the logo

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-15 w-60 md:h-15 md:w-60 mr-1" /> {/* Add the logo */}
        
        </div>
        <div className="md:hidden">
          <button 
            className="block p-2 text-white" 
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <FaTimes /> : <FaBars />} {/* Use icons for the button */}
          </button>
        </div>
        <nav className="md:flex md:space-x-10 md:m-5 hidden md:block">
       
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block hover:text-accent"
          >Home</Link>


          <Link
            to="/projects"
          >
            Projects
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="block md:inline-block hover:text-accent"
          >
            Skills
          </Link>

          
          <Link
            to="/blog"
          >
            Blog
          </Link>
        
          <a href="#" className="block md:inline-block hover:text-accent">Contact</a>
        </nav>
        {/* Conditionally render SideNav component */}
        <SideNav isOpen={showNav} onClose={() => setShowNav(false)} />
      </div>
    </header>
  );
};

export default Header;
