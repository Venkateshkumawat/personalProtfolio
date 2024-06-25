import React, { useEffect, useState } from 'react';
import client from '../../prismic';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import WaterWave from 'react-water-wave';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrismicRichText } from '@prismicio/react';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await client.getAllByType('blogpage', {
          pageSize: 10,
       
        });
        setBlogPosts(response);
        
        console.log(response);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleRipple = () => {
    // Handle any ripple effect behavior here if needed
  };

  return (
    
    <section className="bg-gray-100 dark:bg-gray-900 mx-auto text-center lg:py-5 lg:px-5">
      <h1 className="text-4xl py-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Blog
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-12">
        Stay updated with our latest articles and tutorials.
      </p>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <WaterWave
            imageUrl={post.data.image.url}
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
                <img
                  src={post.data.image.url}
                  alt={post.data.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
                  style={{ clipPath: wave }}
                ></div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    <PrismicRichText field={post.data.title} />
                  </h2>
                 
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {new Date(post.data.public_date).toLocaleDateString()}
                  </div>
                  <Link
                    to={`/blog/${post.uid}`}
                    className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-accent dark:hover:bg-blue-700 dark:focus:ring-blue-80"
                  >
                    Read more
                  </Link>
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
