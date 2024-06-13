import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Project/Project';
import Testimonials from './components/Testinomial/Testinomial';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reviews from './components/Data';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog';
import VismeForm from './components/VismeForm';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton';
const projects = [
  {
    title: "MERN stack simple business website",
    description: " 'MERN stack simple business website' is a project aiming to develop a basic yet robust web presence for a business using MongoDB, Express.js, React, and Node.js (MERN). This project will showcase fundamental features such as user authentication, product listings, and contact forms, providing a solid foundation for future expansion and customization",
    imageUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmMycDZoaG05enl4ejZhdjZlMTNjcWM5Mmx2aHFoNTA1amNkMTU2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Pmfi0HtSpGSiuB991/giphy.webp", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Small Java Ecommerce project",
    description: "Small Java Ecommerce project is a concise Java-based initiative utilizing JSP (JavaServer Pages) for dynamic web content. It integrates essential ecommerce functionalities like product catalog, shopping cart, and user authentication. This project leverages JSP's server-side capabilities to create a responsive and interactive online shopping experience",
    imageUrl: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRia3NtampjdG81cjg4Y3BsMjk3dDJwemJ4ZnZtM2NqemE4eXh3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.webp", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "React personal portfolio website",
    description: "React personal portfolio website using React Router is a dynamic web solution showcasing individual achievements and skills. It employs React's component-based architecture for seamless navigation and content rendering. This project highlights projects, skills, and contact information, providing a responsive and engaging platform for personal branding and networking.",
    imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFyaWlmbWs5NXE3YWI5cWF6Z2UyZXk1N2dwMDZpaTcwZ3ppMG16NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JrkkDoJuU0FbdbUZU/giphy.webp", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Learning Management System (LMS)",
    description: "Learning Management System (LMS) website using React, MongoDB, and Node.js is a comprehensive platform for managing educational content and user interactions. It integrates MongoDB for database storage and Node.js for server-side logic, offering features like course management, user authentication, and progress tracking. This project leverages React for a modern, interactive user interface, enhancing the learning experience.",
    imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3M3ZmExYTJwbG14dTNlOWJyNTJja292c3FnZzU3cWp0eWM4bDQzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gPuYorHMJpng60CGqO/giphy.webp", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Ecommerce website using MERN stack",
    description: "An Ecommerce website using MERN stack with three-tier architecture and JWT token authentication ,is a robust online platform. It leverages MongoDB for data storage, Express.js for backend APIs, React for a responsive frontend, and Node.js for server-side logic. JWT tokens enhance security, enabling secure user authentication and authorization, ensuring a seamless shopping experience.",
    imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2RzeTg2bDB1NnhueWNzNXV3MHZvaGNuajZwYnFndDNncnI1dHBtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/73kKE9yqx9gSZDaB2e/giphy.webp",
    link: "#" // Placeholder link, replace it with your actual project links
  },
  {
    title: "Custom Blog Panel ",
    description: "This Project involves developing a unique content management system (CMS) using existing services. This project typically utilizes APIs or SDKs from platforms like WordPress, Medium, or Ghost to manage blog posts, comments, and user interactions. It allows for tailored features while leveraging the scalability and functionality of established blogging platforms.",
    imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzUxN2c2c2N2YzlxajRtNzNhOWVhZzd2djloM3JhNmUxMjZ1emJxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AvrTj5rRdNXovX34AU/giphy.webp", // Placeholder image URL, replace it with your actual image URLs
    link: "#" // Placeholder link, replace it with your actual project links
  },
  // Add more projects as needed
];
function App() {
  return (
    <Router>
    <div id="home">
      <Header />

      <Hero
        imageUrl="https://images.unsplash.com/photo-1543341330-03beec9d313c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Welcome to My Portfolio"
        description="This is where I showcase my projects and skills."
      />
    

      
     <Projects
     projects={projects}
      />
      <Blog/>        
        <div className='bg-gray-900 flex justify-center text-white'>
        <Testimonials reviews={reviews} />

        </div>
      <Skills />
      <VismeForm/>
      <Footer/>
      <ScrollButton/>
    </div>
    </Router>
  );
}

export default App;
