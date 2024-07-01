import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PrismicRichText } from '@prismicio/react';
import client from '../../prismic'; // Adjust import path as per your structure
import './Blog.css'; // Import CSS for custom styling

const BlogDetails = () => {
  const { uid } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!uid) {
        console.error('Slug is undefined');
        return;
      }
      console.log('Fetching post with Slug:', uid);
      try {
        // Fetch blog post data based on Slug from Prismic
        const response = await client.getByUID('blogpage', uid);
        if (response) {
          setPost(response);
          console.log('Fetched post:', response);
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [uid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const customParagraph = ({ children }) => (
    <p className="text-lg mb-4">{children}</p>
  );

  const customListItem = ({ children }) => (
    <li className="list-disc list-inside">{children}</li>
  );

  const customOrderedListItem = ({ children }) => (
    <li className="list-decimal list-inside">{children}</li>
  );

  const customEmbed = ({ node }) => (
    <div className="embed-container" dangerouslySetInnerHTML={{ __html: node.oembed.html }} />
  );
  const customheading1 = ({ children }) => (
    <h1 className="text-3xl font-bold mb-4">{children}</h1>
  );
  const customheading2 = ({ children }) => ( 
    <h2 className="text-2xl font-bold mb-4">{children}</h2>
  );
  const customheading3 = ({ children }) => (
    <h3 className="text-xl font-bold mb-4">{children}</h3>
  );
  const customheading4 = ({ children }) => (
    <h4 className="text-lg font-bold mb-4">{children}</h4>
  );
  const customheading5 = ({ children }) => (
    <h5 className="text-md font-bold mb-4">{children}</h5>
  );
  const customheading6 = ({ children }) => (
    <h6 className="text-md font-bold mb-4">{children}</h6>
  );
  const components = {
    paragraph: customParagraph,
    'list-item': customListItem,
    'o-list-item': customOrderedListItem,
    embed: customEmbed,
    heading1:customheading1,
    heading2:customheading2,
    heading3:customheading3,
    heading4:customheading4,
    heading5:customheading5,
    heading6:customheading6,
    // Add more custom renderers for other types as needed
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 mx-auto text-justify lg:py-5 lg:px-5">
      <div className="max-h-3xl mx-auto">
        {/* Blog Title */}
        <h1 className="text-4xl py-10 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <PrismicRichText field={post.data.title} />
        </h1>
        
        {/* Blog Cover Image */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md glassmorphism mb-6">
          {post.data.image && (
            <img
              src={post.data.image.url}
              alt={post.data.title[0]?.text || 'Blog Post Image'}
              className="w-full h-96 object-cover rounded-t-lg"
            />
          )}
          <div className="p-6">
            {/* Published Date */}
            <div className="text-md text-gray-500 dark:text-gray-400 mb-4">
              {new Date(post.data.public_date).toLocaleDateString()}
            </div>
            
            {/* Main Rich Text Content */}
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              <PrismicRichText field={post.data.richtext} components={components} />
            </div>
            
            {/* Subtitle/Description */}
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              <PrismicRichText field={post.data.subtext} components={components} />
            </div>
            
            {/* Additional Description */}
            <div className="text-gray-700 dark:text-gray-300 mb-4">
              {post.data.description}
            </div>
            
            {/* Slices (Body Content) */}
            {post.data.body.map((slice, index) => {
              switch (slice.slice_type) {
                case 'image_gallery':
                  return (
                    <div key={`slice-${index}`} className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">
                        <PrismicRichText field={slice.primary.name_of_the_gallery} />
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {slice.items.map((item, idx) => (
                          <div key={`gallery-item-${idx}`} className="relative">
                            <img
                              src={item.gallery_image.url}
                              alt={slice.primary.name_of_the_gallery[0]?.text || 'Gallery Image'}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <PrismicRichText field={item.image_captions} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                case 'quote':
                  return (
                    <div key={`slice-${index}`} className="mb-8">
                      <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 mb-4">
                        <PrismicRichText field={slice.primary.quote} />
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={slice.primary.portrait_author.url}
                          alt={slice.primary.name_of_the_author[0]?.text || 'Author Portrait'}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-bold text-accent">
                            <PrismicRichText field={slice.primary.name_of_the_author} />
                          </div>
                          <div className="text-sm text-accent-500 dark:text-gray-400">
                            Author
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
        
        {/* Author Information */}
        {post.data.author && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Author Information</h2>
            <div className="flex items-center space-x-4">
              {post.data.author.avatar && (
                <img
                  src={post.data.author.avatar.url}
                  alt={post.data.author.avatar.alt || 'Author Avatar'}
                  className="w-12 h-12 rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{post.data.author.name}</h3>
                {post.data.author.bio && <PrismicRichText field={post.data.author.bio} components={components} />}
                {post.data.author.social_links && (
                  <ul className="flex space-x-4 mt-2">
                    {post.data.author.social_links.map((link, idx) => (
                      <li key={`social-link-${idx}`}>
                        <a
                          href={link.platform_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700"
                        >
                          {link.platform_name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
