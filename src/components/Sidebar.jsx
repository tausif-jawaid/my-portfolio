import React from 'react';
import { Mail, Phone, Calendar, MapPin, Download } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col items-center shadow-xl">
      <div className="w-32 h-32 rounded-lg bg-white mb-4">
        <img className="h-auto w-max block mx-auto square mb-10" src="/public/assets/pics.jpeg" alt="Random Male avatar"/>
      </div>
      <br/>
      <br/>
      <h1 className="text-xl font-bold mb-1">Tausif Jawaid</h1>
      <span className="bg-gray-700 text-sm px-3 py-1 rounded-full mb-6">Web Developer</span>
      <div className="space-y-4 w-full">
        <div className="flex items-center gap-3 text-sm">
          <Mail size={16} /> tausifjawaid6@gmail.com
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone size={16} /> +91 9131015472
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Calendar size={16} /> December 21, 1996
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin size={16} /> Patna, Bihar, India
        </div>
        <a href="/resume.pdf" download className="mt-4 inline-flex items-center text-yellow-400 hover:underline">
          <Download size={16} className="mr-1" /> Download Resume
        </a>
      </div>
    </div>
  );
}
