import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10 text-center">
        <h2 className="text-xl md:text-2xl text-accent-primary font-semibold mb-4">Hello, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Ahmed Elbahgy</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          A passionate developer building modern web applications. Check out my projects below.
        </p>
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
