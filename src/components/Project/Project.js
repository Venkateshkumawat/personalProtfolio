// Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    return (
        <section className="py-12 px-4 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
