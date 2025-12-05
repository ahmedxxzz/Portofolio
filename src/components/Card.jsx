import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiTypescript, SiVite } from 'react-icons/si';

const getLanguageIcon = (language) => {
  if (!language) return <FaCodeBranch />;
  const lang = language.toLowerCase();
  if (lang === 'javascript') return <SiJavascript className="text-yellow-400" />;
  if (lang === 'python') return <SiPython className="text-blue-400" />;
  if (lang === 'html') return <SiHtml5 className="text-orange-500" />;
  if (lang === 'css') return <SiCss3 className="text-blue-500" />;
  if (lang === 'typescript') return <SiTypescript className="text-blue-600" />;
  return <FaCodeBranch className="text-gray-400" />;
};

const Card = ({ project, index }) => {
  return (
    <motion.a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="block h-full group"
    >
      <div className="glass p-8 h-full rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,242,255,0.1)] relative overflow-hidden">
        {/* Hover Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white/5 rounded-xl text-2xl">
              {getLanguageIcon(project.language)}
            </div>
            <FaExternalLinkAlt className="text-white/20 group-hover:text-primary transition-colors" />
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-heading">
            {project.name}
          </h3>
          
          <p className="text-text-muted mb-8 line-clamp-3 flex-grow">
            {project.description || 'A cool project available on my GitHub.'}
          </p>

          <div className="flex items-center gap-6 text-sm text-text-muted border-t border-white/10 pt-4">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-500" /> {project.stargazers_count}
            </span>
            <span className="flex items-center gap-2">
              <FaCodeBranch className="text-purple-500" /> {project.forks_count}
            </span>
            <span className="ml-auto text-xs px-2 py-1 bg-white/5 rounded-full border border-white/10">
              {project.language || 'Code'}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Card;
