'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto py-32 px-6 text-center">
      
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.5
        }}>
        
        <p className="font-mono text-accent mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
          Get In Touch
        </h2>

        <p className="text-bodyText mb-10 leading-relaxed">
          I am open to most opportunities including full-time, part-time, and contract work. I am mostly interested in remote work, but willing to relocate for the right opportunity. Whether you have work for me, have a question, or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <a
          href="mailto:dave@weizenegger.dev"
          className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-background transition-colors font-mono px-8 py-4 rounded">
          
          <MailIcon className="w-5 h-5" />
          Say Hello
        </a>

        <div className="mt-20 flex justify-center items-center gap-6 text-muted">
          <a
            href="https://github.com/weizguy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors">
            
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/weizguy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors">
            
            <LinkedinIcon className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/weizguy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors">
            
            <TwitterIcon className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </motion.div>
    </section>);

}