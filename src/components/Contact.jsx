import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-text-muted mb-12">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors duration-300">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <a href="mailto:ahmed@example.com" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaEnvelope />
                </div>
                <span className="text-text-muted group-hover:text-white transition-colors">Email</span>
              </a>

              <a href="https://github.com/ahmedxxzz" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaGithub />
                </div>
                <span className="text-text-muted group-hover:text-white transition-colors">GitHub</span>
              </a>

              <a href="#" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaLinkedin />
                </div>
                <span className="text-text-muted group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              <a href="#" className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <FaTwitter />
                </div>
                <span className="text-text-muted group-hover:text-white transition-colors">Twitter</span>
              </a>
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 text-center text-text-muted border-t border-white/5 pt-8">
          <p>© {new Date().getFullYear()} Ahmed Elbahgy. Built with React, Vite & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
