import React from 'react';

const Card = ({ project }) => {
  return (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="glass-panel p-6 h-full hover:scale-[1.02] transition-transform duration-300 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-accent-primary truncate pr-2">{project.name}</h3>
          <span className="text-xs bg-bg-secondary px-2 py-1 rounded-full text-text-secondary border border-glass-border">
            {project.language || 'Code'}
          </span>
        </div>
        
        <p className="text-text-secondary text-sm mb-6 flex-grow line-clamp-3">
          {project.description || 'No description available for this project.'}
        </p>
        
        <div className="flex items-center text-sm text-text-secondary mt-auto">
          <span className="flex items-center mr-4">
            <span className="mr-1">⭐</span> {project.stargazers_count}
          </span>
          <span className="flex items-center">
            <span className="mr-1">🍴</span> {project.forks_count}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
