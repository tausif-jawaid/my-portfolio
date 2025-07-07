import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E1E1E] rounded-2xl p-6 shadow-xl text-white max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">My Portfolio</h2>

      <p className="text-gray-300 mb-6">
        Here are some of the projects I've worked on. These showcase my experience in full-stack development, e-commerce systems, and custom web applications.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2A2A] p-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-yellow-300">E-commerce Store</h3>
          <p className="text-gray-300">Developed a Shopify-based store using custom Liquid templates, React.js components, and Node.js for backend APIs.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2A2A] p-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-yellow-300">Student Management Portal</h3>
          <p className="text-gray-300">Built with PHP and MySQL, this system handled student registration, payment tracking, and notification services.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2A2A] p-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-yellow-300">API Testing Dashboard</h3>
          <p className="text-gray-300">Developed a REST API testing tool using Express.js and Postman collections with real-time reporting and logging.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#2A2A2A] p-4 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-yellow-300">Portfolio Website (This One!)</h3>
          <p className="text-gray-300">A responsive, animated portfolio built with React.js, Tailwind CSS, and Vite to showcase my skills, resume, and contact info.</p>
        </motion.div>

        
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Connect with Me</h3>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tausif-jawaid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Github className="w-5 h-5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tausif-jawaid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}