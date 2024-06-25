import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import { Link } from 'react-scroll';
import Logo from '../Header/Logo1.png'; // Import the logo
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-left">
        {/* Connect with Us */}
        <div className="md:flex-1 md:text-left md:mb-0 mb-4">
        <div className="flex flex-col items-left">
            <img
              src={Logo}
              alt="Logo"
              className="h-15 w-40 md:h-15 md:w-60 mb-4"
            />
            <div className="text-3xl font-bold mb-4">Connect with Us</div>
          </div>
          <div className="flex justify-left space-x-4">
            <a href="#" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Explore */}
        <div className="md:flex-1 text-left mb-4">
          <div className="text-3xl font-bold mb-4">Explore</div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/projects"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Skills
            </Link>
            <a href="#" className="text-lg hover:text-accent transition-colors duration-300">Blog</a>
            <a href="#" className="text-lg hover:text-accent transition-colors duration-300">Contact</a>
          </nav>
        </div>
        
        {/* Legal */}
        <div className="md:flex-2 text-left ml-5">
          <div className="text-3xl font-bold mb-4">Legal</div>
          <nav className="flex-row flex-col md:flex-row space-x-6 md:space-y-0 md:space-x-6">
            <a href="#" className="text-lg hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-lg hover:text-accent transition-colors duration-300">Terms of Use</a>
            <a href="#" className="text-lg hover:text-accent transition-colors duration-300">Cookie Policy</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm opacity-75">&copy; 2024 Venkatesh Kumawat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
