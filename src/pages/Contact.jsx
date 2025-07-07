import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1E1E1E] rounded-2xl p-6 shadow-xl text-white max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-300">
            I’m currently open to new opportunities. Whether you have a question or just want to say hi — feel free to reach out. I’ll try my best to get back to you!
          </p>

          <div className="space-y-2 mt-4">
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2 text-yellow-400" />
              tausifjawaid6@gmail.com
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2 text-yellow-400" />
              +91 9131015472
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
              Patna, Bihar, India
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#2A2A2A] rounded-xl text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#2A2A2A] rounded-xl text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 bg-[#2A2A2A] rounded-xl text-white placeholder-gray-400 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}