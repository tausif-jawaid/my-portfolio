import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E1E1E] rounded-2xl p-6 shadow-xl text-white max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Me</h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        Hello! I'm Tausif Jawaid, a passionate and versatile full-stack developer with 3+ years of experience in building scalable web applications. I specialize in creating efficient, user-friendly, and visually engaging digital products.
      </p>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300"
      >
        <ul className="list-disc list-inside space-y-2">
          <li>🔧 Experienced in MERN stack, PHP, and E-commerce development.</li>
          <li>🎨 Enthusiastic about clean UI design and responsive web interfaces.</li>
          <li>📈 Constant learner exploring new technologies and frameworks.</li>
          <li>🤝 Strong collaborator with teams across design, development, and QA.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6"
      >
        <p className="text-gray-300">
          In my spare time, I enjoy learning new tools, contributing to open-source, and exploring the latest in UI/UX design trends. Let’s connect and build something amazing together!
        </p>
      </motion.div>
    </motion.div>
  );
}