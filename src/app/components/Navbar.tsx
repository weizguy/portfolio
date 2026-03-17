'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalIcon } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Stack',
    href: '#stack'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <motion.header
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-background/80 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
      
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <TerminalIcon className="w-6 h-6 text-accent group-hover:text-accentHover transition-colors" />
          <span className="font-mono font-bold text-cream text-lg tracking-tight">
            dave<span className="text-accent">.</span>weizenegger
            <span className="text-accent">.</span>dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-mono text-bodyText hover:text-accent transition-colors relative group">
            
              <span className="text-accent/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                /
              </span>
              {link.name}
            </a>
          )}
        </nav>

        {/* Mobile menu button could go here, keeping it simple for now */}
        <a
          href="#contact"
          className="md:hidden text-sm font-mono text-accent border border-accent/30 px-3 py-1.5 rounded hover:bg-accent/10 transition-colors">
          
          Say Hi
        </a>
      </div>
    </motion.header>);

}