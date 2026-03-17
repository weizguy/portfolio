'use client';

import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
export function TechStack() {
  const categories = [
  {
    title: 'Frontend',
    skills: [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Redux']

  },
  {
    title: 'Backend',
    skills: [
    'Node.js',
    'Python',
    'PostgreSQL',
    'Redis',
    'GraphQL',
    'Express']

  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'AI', 'MLOps']
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <section id="stack" className="w-full max-w-4xl mx-auto py-24 px-6">
      <SectionHeading number="02" title="Technical Arsenal" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, idx) =>
        <motion.div
          key={category.title}
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
            duration: 0.5,
            delay: idx * 0.2
          }}
          className="bg-surface border border-border/50 rounded-xl p-6 hover:border-muted transition-colors">
          
            <h3 className="text-lg font-mono text-cream mb-6 flex items-center gap-2">
              <span className="text-accent">{'//'}</span> {category.title}
            </h3>

            <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="space-y-3">
            
              {category.skills.map((skill) =>
            <motion.li
              key={skill}
              variants={itemVariants}
              className="flex items-center gap-3 text-bodyText group">
              
                  <span className="w-1.5 h-1.5 rounded-full bg-muted group-hover:bg-accent transition-colors"></span>
                  <span className="font-mono text-sm group-hover:text-cream transition-colors">
                    {skill}
                  </span>
                </motion.li>
            )}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </section>);

}