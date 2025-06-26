import React from 'react';

const projects = [
  {
    title: "Hotel Booking App",
    description: "A full-stack web app for hotel reservations with MongoDB and Node.js",
  },
  {
    title: "Grocery Reorder Predictor",
    description: "Predictive analysis app using Grofers data for reordering patterns.",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
