import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_name: 'Venkatesh Kumawat', // Your name
      to_email: 'venkateshkumawat.123@gmail.com', // Your email
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      reply_to: formData.email
    };

    emailjs.send('service_py01mhq', 'template_ga999rh', templateParams, 'Q2X_SGoL8DQalRll0')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="bg-gradient-to-r from-blue-500 to-purple-500 dark:bg-gray-900 py-12"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          className="mb-8"
        >
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            We would love to hear from you! Fill out the form below to get in touch with us.
          </p>
        </motion.div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div 
            initial={{ x: '-100vw' }} 
            animate={{ x: 0 }} 
            transition={{ type: 'spring', stiffness: 120 }} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-300">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: '100vw' }} 
            animate={{ x: 0 }} 
            transition={{ type: 'spring', stiffness: 120 }} 
          >
            <label className="block text-gray-700 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>
          <motion.div 
            initial={{ x: '-100vw' }} 
            animate={{ x: 0 }} 
            transition={{ type: 'spring', stiffness: 120 }} 
          >
            <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }} 
          >
            <label className="block text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Our Office</h2>
        <p className="text-center text-gray-700 dark:text-gray-300">
          1234 Street Name, City, State, 12345
        </p>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
          Phone: (123) 456-7890
        </p>
        <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
          Email: info@company.com
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
