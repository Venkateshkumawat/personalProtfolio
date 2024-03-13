import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Header />
    <div>
      <Hero
        imageUrl="https://images.unsplash.com/photo-1543341330-03beec9d313c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Welcome to My Portfolio"
        description="This is where I showcase my projects and skills."
      />
      </div>
    </div>
  );
}

export default App;
