import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';
import WaterWave from 'react-water-wave';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const blogPosts = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    excerpt: 'A comprehensive guide to using hooks in React for state and side effects...',
    date: 'June 10, 2024',
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: '/blog/understanding-react-hooks'
  },
  {
    id: 2,
    title: 'Building a Full-Stack App with the MERN Stack',
    excerpt: 'Learn how to create a full-stack application using MongoDB, Express, React, and Node.js...',
    date: 'May 20, 2024',
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: '/blog/mern-stack-app'
  },
  
  {
    id: 2,
    title: 'Building a Full-Stack App with the MERN Stack',
    excerpt: 'Learn how to create a full-stack application using MongoDB, Express, React, and Node.js...',
    date: 'May 20, 2024',
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: '/blog/mern-stack-app'
  },
  
  {
    id: 2,
    title: 'Building a Full-Stack App with the MERN Stack',
    excerpt: 'Learn how to create a full-stack application using MongoDB, Express, React, and Node.js...',
    date: 'May 20, 2024',
    imageUrl: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: '/blog/mern-stack-app'
  },
  
  {
    id: 2,
    title: 'Building a Full-Stack App with the MERN Stack',
    excerpt: 'Learn how to create a full-stack application using MongoDB, Express, React, and Node.js...',
    date: 'May 20, 2024',
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: '/blog/mern-stack-app'
  },
  // Add more blog posts here
];

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
    
      const handleRipple = (e) => {
        const ripple = document.createElement('span');
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const posX = e.clientX - rect.left - size / 2;
        const posY = e.clientY - rect.top - size / 2;
    
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${posX}px`;
        ripple.style.top = `${posY}px`;
        ripple.classList.add('ripple');
    
        e.currentTarget.appendChild(ripple);
    
        setTimeout(() => {
          ripple.remove();
        }, 750); // Adjust the duration (in milliseconds) as needed
      };
    
      return (
        <section className="bg-gray-100 dark:bg-gray-900 mx-auto text-center lg:py-5 lg:px-5">
        <h1 className="text-4xl py-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Blog</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-12">Stay updated with our latest articles and tutorials.</p>
        <Slider {...settings}>
          {blogPosts.map(post => (
            <WaterWave
              imageUrl={post.imageUrl}
              key={post.id}
              strength={500}
              className="rounded-lg overflow-hidden shadow-md glassmorphism mb-6"
            >
              {({ wave }) => (
                <div
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md mb-6 cursor-pointer"
                  style={{ position: 'relative' }}
                  onClick={handleRipple}
                >
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" style={{ clipPath: wave }}></div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{post.date}</div>
                    <Link to={post.url} className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</Link>
                  </div>
                </div>
              )}
            </WaterWave>
          ))}
        </Slider>
      </section>
      );
};

export default Blog;