// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRCode from './components/QRGenerator/qrgenerator';
import { PrismicProvider } from '@prismicio/react';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './pages/contactPage';
import Skills from './components/Skills/Skills';
import BlogPage from './pages/blogPage';
import MainLayout from './layout/MainLayout';
import client from './prismic';
import BlogLayout from './layout/BlogLayout';
import SideMenuLayout from './layout/SideMenuLayout';
import Features from './components/Features/Features';
const AppRoutes = (_params) => {
  return (
    <PrismicProvider client={client}>
    <Router>
    <Routes>
      

     
        <Route path="/" element={<MainLayout></MainLayout>} />
       
        <Route path="/skills" element={<MainLayout><Skills /></MainLayout>} />
        <Route path="/contact" element={<BlogLayout><Contact/></BlogLayout>} />
        <Route path="/blog" element={<BlogLayout><BlogPage /></BlogLayout>} />
        <Route path="/blog/:uid" element={<BlogLayout><BlogDetails /></BlogLayout>} />
        <Route path="/qr" element={<SideMenuLayout><QRCode/></SideMenuLayout>} />
        <Route path="/service" element={<BlogLayout><Features /></BlogLayout>}/>
      </Routes>
    </Router>
    </PrismicProvider>
  );
};

export default AppRoutes;
