// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PrismicProvider } from '@prismicio/react';
import BlogDetails from './components/Blog/BlogDetails';
import Projects from './components/Project/Project';

import Skills from './components/Skills/Skills';

import BlogPage from './pages/blogPage';
import MainLayout from './layout/MainLayout';
import client from './prismic';
import Header from './components/Header/Header';
import BlogLayout from './layout/BlogLayout';

const AppRoutes = (_params) => {
  return (
    <PrismicProvider client={client}>
    <Router>
    <Routes>
      
      
       
        <Route path="/" element={<MainLayout></MainLayout>} />
        <Route path="/skills" element={<MainLayout><Skills /></MainLayout>} />
        <Route path="/contact" element={<MainLayout></MainLayout>} />
        <Route path="/blog" element={<BlogLayout><BlogPage /></BlogLayout>} />
        <Route path="/blog/:uid" element={<BlogLayout><BlogDetails /></BlogLayout>} />
      </Routes>
    </Router>
    </PrismicProvider>
  );
};

export default AppRoutes;
