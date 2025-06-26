import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-blue-50" id="home">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Suhani Sharma</h1>
        <p className="mt-4 text-lg text-gray-700">Frontend Developer | React Enthusiast</p>
        <a href="#contact" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
