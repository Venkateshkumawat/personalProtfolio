// SideNav.js

import React, { useRef } from 'react';
import {Link} from 'react-router-dom';
const SideNav = ({ isOpen, onClose }) => {
  const sideNavRef = useRef(null);

  const handleClose = (event) => {
    // Check if the mouse is outside the side navigation
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={handleClose}>
      <div ref={sideNavRef} className="fixed inset-y-0 right-0 w-64 bg-primary text-white shadow-lg flex flex-col justify-between" onMouseLeave={onClose}>
        <div className="p-4">
          <button className="text-xl" onClick={onClose}>×</button>
          <nav>
            <ul className="mt-10 space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/qr" className="hover:text-accent">Tool</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
