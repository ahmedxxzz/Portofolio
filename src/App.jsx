import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-main selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectList />
        <Contact />
      </main>
    </div>
  );
}

export default App;
