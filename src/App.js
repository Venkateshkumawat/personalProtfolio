import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Project/Project';
import Testimonials from './components/Testinomial/Testinomial';
const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Project 5",
    description: "Description of Project 5",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Project 6",
    description: "Description of Project 6",
    imageUrl: "https://via.placeholder.com/300", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  // Add more projects as needed
];
function App() {
  return (
    <div>
      <Header />

      <Hero
        imageUrl="https://images.unsplash.com/photo-1543341330-03beec9d313c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Welcome to My Portfolio"
        description="This is where I showcase my projects and skills."
      />
    
     <Projects
     projects={projects}
      />
    <Testimonials/>
    </div>
  );
}

export default App;
