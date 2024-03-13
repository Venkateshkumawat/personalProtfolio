// ProjectCard.js

import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-secondary dark:border-gray-700 relative overflow-hidden">
            <a href={project.link}>
                <img className="rounded-t-lg" src={project.imageUrl} alt={project.title} />
            </a>
            <div className="absolute inset-0 bg-primary bg-opacity-30 dark:bg-opacity-40"></div>
            <div className="relative p-5">
                <a href={project.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-opacity-90 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
