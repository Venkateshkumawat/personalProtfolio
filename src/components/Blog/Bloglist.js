import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';
import client from '../../prismic'; // Adjust the path as per your project structure
import gsap from 'gsap';

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardRefs = React.useRef([]);

  const pageSize = 5; // Adjust the page size as needed

  useEffect(() => {
    const fetchBlogPosts = async (page) => {
      try {
        const response = await client.getByType('blogpage', { pageSize, page });

        if (response && response.results) {
          setBlogPosts(response.results);
          setTotalPages(response.total_pages);
          animateCards(response.results.length);
        } else {
          console.error('Unexpected response format:', response);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts(currentPage);
  }, [currentPage]);

  const animateCards = (numCards) => {
    gsap.fromTo(cardRefs.current, 
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', stagger: 0.2 }
    );
  };

  if (loading) {
    return <div className="text-center text-gray-600 dark:text-gray-300">Loading...</div>;
  }

  if (!blogPosts.length) {
    return <div className="text-center text-gray-600 dark:text-gray-300">No blog posts found.</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 mx-auto text-center lg:py-12 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl py-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Blog Posts
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-10">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.uid} 
                  ref={el => cardRefs.current[index] = el}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                >
                  {post.data.image && (
                    <img
                      src={post.data.image.url}
                      alt={post.data.title[0]?.text || 'Blog Post Image'}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      <PrismicRichText field={post.data.title} />
                    </h2>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {new Date(post.data.public_date).toLocaleDateString()}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 mb-4">
                      <PrismicRichText field={post.data.excerpt} />
                    </div>
                    <Link 
                      to={`/blog/${post.uid}`} 
                      className="text-blue-500 dark:text-blue-400 hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 bg-primary text-white rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2 bg-primary text-white rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          {/* Side Nav */}
          <div className="hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Archives</h2>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.uid}>
                    <Link to={`/blog/${post.uid}`} className="text-gray-700 dark:text-gray-300 hover:underline">
                      {new Date(post.data.public_date).toLocaleDateString()} - {post.data.title[0]?.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
