import React from 'react';

const Skills = () => {
    return (    
        <div>
            <section id= "skills" className="text-gray-200 bg-gray-900">
                <div className="max-w-6xl mx-auto px-5 py-24">
                    <div className="text-center mb-20">
                        <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">SKills</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">IT is vast and languages ​​are born almost at any time, I do everything possible to be up to the task in order to meet the needs of my clients and to provide help to new developers.</p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-xl title-font font-medium mb-3">Web Designing</h2>
                                        <p className="leading-relaxed text-sm text-justify">I specialize in user-centered web design, ensuring seamless experiences across devices. With expertise in visual design principles and accessibility standards, I create engaging interfaces. Effective collaboration and continuous learning drive my commitment to delivering impactful digital experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-xl title-font font-medium mb-3">Web Integration</h2>
                                        <p className="leading-relaxed text-sm text-justify">For web integration, I specialize in seamless blending of various components, ensuring smooth functionality across platforms. Proficient in API integration and backend development, I create cohesive digital ecosystems. Effective collaboration and continuous learning drive my commitment to delivering integrated and impactful web solutions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-xl title-font font-medium mb-3">Development Backend</h2>
                                        <p className="leading-relaxed text-sm text-justify">
In backend development and cloud integration, I specialize in building scalable solutions with MongoDB and Node.js. Leveraging cloud platforms like AWS and Azure, I ensure seamless deployment and management. My expertise includes API development, database management, and serverless architectures, delivering robust and efficient backend solutions in the cloud.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
