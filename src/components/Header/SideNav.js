// SideNav.js

import React, { useRef } from 'react';

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
              <li><a href="#" className="hover:text-accent">Home</a></li>
              <li><a href="#" className="hover:text-accent">Projects</a></li>
              <li><a href="#" className="hover:text-accent">Skills</a></li>
              <li><a href="#" className="hover:text-accent">Blog</a></li>
              <li><a href="#" className="hover:text-accent">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
