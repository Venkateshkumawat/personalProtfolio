import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Connect with Us */}
        <div className="md:flex-1 md:text-center md:mb-0 mb-4">
          <div className="text-3xl font-bold mb-4">Connect with Us</div>
          <div className="flex justify-center space-x-4">
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
        <div className="md:flex-1 text-center mb-4">
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
              to="projects-section"
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
        <div className="md:flex-1 text-center">
          <div className="text-3xl font-bold mb-4">Legal</div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
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
