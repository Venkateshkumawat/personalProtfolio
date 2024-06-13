import React, { useEffect } from 'react';

const VismeForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="text-gray-200 bg-gray-900">
        <div className="max-w-7xl mx-auto px-5 py-4">
                   
        <h1 className="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-6xl">Newsletter</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Embrace the evolving landscape of IT; adaptability is my commitment. Stay ahead, serve clients' needs, and empower new developers</p>

        
    <div className="visme_d"
         data-title="Newsletter Subscription"
         data-url="ojeko0d1-newsletter-subscription"
         data-domain="forms"
         data-full-page="false"
         data-min-height="500px"
         data-form-id="75332">
    </div>
    </div>
    </section>
  );
};

export default VismeForm;
