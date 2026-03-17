'use client';

import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ChevronRightIcon } from
'lucide-react';
export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };
  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-4xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6">
          
          <div className="h-[1px] w-12 bg-accent"></div>
          <p className="font-mono text-accent text-sm tracking-wider uppercase">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-4 tracking-tight">
          
          Dave Weizenegger.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-muted mb-8 tracking-tight">
          
          I build things for the web.
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-2xl mb-12">
          <p className="text-lg md:text-xl text-bodyText leading-relaxed">
            I'm a full-stack developer specializing in building exceptional
            digital experiences. Currently focused on building accessible,
            human-centered products from database to pixel.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-accent text-background font-mono font-semibold px-6 py-3 rounded hover:bg-accentHover transition-colors">
            
            Check out my work
            <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex items-center gap-5 text-bodyText">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full">
              
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full">
              
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full">
              
              <TwitterIcon className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:dave@weizenegger.dev"
              className="hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full">
              
              <MailIcon className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Terminal decorative element */}
        <motion.div
          variants={itemVariants}
          className="mt-20 inline-block border border-border bg-surface rounded-lg p-4 font-mono text-sm text-muted shadow-2xl">
          
          <div className="flex items-center gap-2 mb-2 border-b border-border pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <p className="flex items-center gap-2">
            <span className="text-accent">~</span>
            <span className="text-cream">./start-dev-server.sh</span>
          </p>
          <p className="mt-1 text-bodyText">
            <span className="text-green-400">✓</span> Server running on
            http://localhost:3000
            <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-blink"></span>
          </p>
        </motion.div>
      </motion.div>
    </section>);

}