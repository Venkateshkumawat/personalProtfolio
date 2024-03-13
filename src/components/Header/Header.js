// Header.js

import React from 'react';

const Header = () => {
  return (
<header className="bg-primary text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="font-bold text-2xl m-3">Venkatesh Kumawat</div>
    <nav className="space-x-10 m-6">
      <a href="#" className="hover:text-accent">Home</a>
      <a href="#" className="hover:text-accent">Projects</a>
      <a href="#" className="hover:text-accent">Skills</a>
      <a href="#" className="hover:text-accent">Contact</a>
    </nav>
  </div>
</header>

  );
};

export default Header;
