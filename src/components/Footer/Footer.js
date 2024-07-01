import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons
import { Link } from 'react-router-dom';
import Logo from '../Header/Logo1.png'; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Connect with Us */}
        <div className="md:flex-1 md:text-left md:mb-0 mb-8 flex flex-col items-start">
          <img
            src={Logo}
            alt="Logo"
            className="h-15 w-40 md:h-15 md:w-60 mb-4"
          />
          <div className="text-3xl font-bold mb-4">Connect with Us</div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/codespherebyvenky?igsh=MWFia3F1eDdyZTNjeg==" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/codespherebyvenky?igsh=MWFia3F1eDdyZTNjeg==" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/codespherebyvenky?igsh=MWFia3F1eDdyZTNjeg==" className="text-2xl text-white hover:text-accent transition-colors duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="md:flex-1 text-left mb-8">
          <div className="text-3xl font-bold mb-4">Explore</div>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              to="/qr"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Tool
            </Link>
            <Link
              to="/blog"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg hover:text-accent cursor-pointer transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="md:flex-1 text-left">
          <div className="text-3xl font-bold mb-4">Legal</div>
          <nav className="flex flex-col space-y-2">
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
