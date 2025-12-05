import React, { useState, useEffect } from 'react';
import Card from './Card';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ahmedxxzz/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // Sort by updated_at desc
        const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setProjects(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-10">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
