import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E1E1E] rounded-2xl p-6 shadow-xl text-white space-y-6"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Resume</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li><strong>Programming:</strong> Node.js, React.js, Express.js, Core PHP, CodeIgniter</li>
          <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, jQuery, Shopify Liquid</li>
          <li><strong>Database:</strong> MongoDB, MySQL</li>
          <li><strong>Tools:</strong> Git, Jira, Postman, VS Code</li>
          <li><strong>Other:</strong> REST APIs, E-commerce Development, Theme Customization</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-6 mb-2">Professional Experience</h3>

        <div className="mb-4">
          <h4 className="font-semibold">Software Developer | HCLTech, Lucknow | Apr 2022 – Present</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Developed e-commerce web applications using Shopify Liquid, Node.js, React.js, and MySQL.</li>
            <li>Improved page load time by 2 seconds using code splitting and lazy loading.</li>
            <li>Customized Shopify themes and ensured UX/UI consistency.</li>
            <li>Maintained code quality using Git and documented solutions clearly.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold">Software Developer | Fastinfo Legal Services, Kolkata | Nov 2021 – Mar 2022</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Built a web application for tracking customers and students using PHP and MySQL.</li>
            <li>Implemented backend services and CRUD operations for educational management.</li>
            <li>Designed and optimized databases for performance and reliability.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Software Developer | Adreno Technology, Chandigarh | Jan 2021 – Oct 2021</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Customized and maintained client websites based on business requirements.</li>
            <li>Developed new modules and collaborated with teams to provide technical resolutions.</li>
            <li>Focused on website optimization and client satisfaction.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
        <p className="text-gray-300">Bachelor of Engineering in Computer Science & Engineering | RITS, Bhopal | 2015 – 2019<br />CGPA: 7.6 / 10</p>
      </section>
    </motion.div>
  );
}