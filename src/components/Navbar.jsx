import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading tracking-tighter">
          Ahmed<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="flex gap-4 ml-4 border-l border-white/10 pl-6">
            <a href="https://github.com/ahmedxxzz" target="_blank" rel="noreferrer" className="text-xl hover:text-primary transition-colors">
              <FaGithub />
            </a>
            {/* Add LinkedIn if available, placeholder for now */}
            <a href="#" className="text-xl hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/10 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                <a href="https://github.com/ahmedxxzz" target="_blank" rel="noreferrer" className="text-2xl hover:text-primary">
                  <FaGithub />
                </a>
                <a href="#" className="text-2xl hover:text-primary">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
