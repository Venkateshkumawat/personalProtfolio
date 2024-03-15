import React from 'react';

const Testimonials = () => {
    // Sample testimonial data
    const testimonials = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum auctor velit, et cursus quam pellentesque et.",
            name: "John Doe",
            role: "CEO, Example Inc.",
            image: "https://via.placeholder.com/150", // URL of the image/avatar
        },
        {
            id: 2,
            text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            name: "Jane Smith",
            role: "Marketing Manager, ABC Corp.",
            image: "https://via.placeholder.com/150", // URL of the image/avatar
        },
        
        {
            id: 3,
            text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            name: "Jane Smith",
            role: "Marketing Manager, ABC Corp.",
            image: "https://via.placeholder.com/150", // URL of the image/avatar
        },
        // Add more testimonials as needed
    ];

    return (
        <section className="py-12 px-4 bg-background dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-primary dark:text-white mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white dark:bg-secondary rounded-lg shadow p-6">
                            <p className="text-lg text-gray-800 dark:text-white mb-4">{testimonial.text}</p>
                            <div className="flex items-center">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
