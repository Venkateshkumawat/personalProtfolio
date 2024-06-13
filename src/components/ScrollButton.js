import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import the arrow icons

const ScrollButton = () => {
  const [showUpButton, setShowUpButton] = useState(false);
  const [showDownButton, setShowDownButton] = useState(false);

  // Show buttons based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setShowUpButton(true);
    } else {
      setShowUpButton(false);
    }

    // Example: Show down button when not at the bottom of the page
    if ((window.innerHeight + window.pageYOffset) < document.body.offsetHeight) {
      setShowDownButton(true);
    } else {
      setShowDownButton(false);
    }
  };

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to bottom on button click
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-10">
      {showUpButton && (
        <button
          className="bg-primary text-white p-3 rounded-full shadow-md hover:bg-accent mr-2 focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
      {showDownButton && (
        <button
          className="bg-primary text-white p-3 rounded-full shadow-md hover:bg-accent focus:outline-none"
          onClick={scrollToBottom}
        >
          <FaArrowDown className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
