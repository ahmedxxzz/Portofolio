import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-primary font-mono mb-6 tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Ahmed <span className="text-gradient">Elbahgy</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Building digital experiences with <span className="text-white font-semibold">modern technologies</span> and <span className="text-white font-semibold">creative design</span>.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                View Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="#contact" className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all hover:border-primary/50 hover:text-primary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
