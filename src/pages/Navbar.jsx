import { NavLink } from 'react-router-dom';
import React from 'react';

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-yellow-400 font-semibold"
    : "text-white hover:text-yellow-400 transition";

export default function Navbar() {
  return (
    <nav className="flex space-x-6 p-4 bg-[#1E1E1E] shadow-lg rounded-xl">
      <NavLink to="/" className={navLinkClass}>About</NavLink>
      <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
      <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
    </nav>
  );
}