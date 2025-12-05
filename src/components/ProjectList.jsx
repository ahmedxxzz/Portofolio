import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <section id="projects" className="py-32 relative">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            A collection of my open source contributions and personal projects.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-10 glass rounded-xl">
            <p>Error loading projects: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
