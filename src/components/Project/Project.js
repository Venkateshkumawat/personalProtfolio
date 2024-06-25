// Projects.js

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    const headingRef = useRef(null);
    const cardsRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2.5, ease: 'power3.out' }
        );

        cardsRefs.current.forEach((cardRef, index) => {
            if (cardRef) {
                ScrollTrigger.create({
                    trigger: cardRef,
                    start: 'top 30%', // S
                    onEnter: () => {
                        gsap.to(cardRef, { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out' });
                    },
                    onLeaveBack: () => {
                        gsap.to(cardRef, { opacity: 0, y: 50, duration: 0.6, ease: 'power3.in' });
                    },
                    // Uncomment the line below if you want the animation to revert on scroll up
                    // scrub: true,
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [projects]);

    return (
        <section id="projects-section" className="py-12 px-4 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <h2 ref={headingRef} className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} ref={el => (cardsRefs.current[index] = el)}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
