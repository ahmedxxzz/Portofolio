import React from 'react';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ProjectList />
      </main>
      
      <footer className="py-8 text-center text-text-secondary text-sm glass-panel mt-10 rounded-none border-x-0 border-b-0">
        <p>© {new Date().getFullYear()} Ahmed Elbahgy. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
