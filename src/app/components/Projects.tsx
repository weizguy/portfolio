'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { GithubIcon, ExternalLinkIcon, FolderIcon } from 'lucide-react';
export function Projects() {
  const projects = [
  {
    title: 'My BodyQuest',
    description:
    'A fitness tracking web app built with multiple technologies that has gamification features, a community, some charting elements, and also has an AI coach.',
    tech: ['Turborepo', 'NestJs', 'NextJs', 'TypeScript', 'GraphQL','PostgreSQL', 'AWS (S3, SES, Bedrock)', 'Recharts'],
    github: '',
    live: 'https://mybodyquest.com'
  },
  {
    title: "Sshado's Games",
    description:
    'A Gaming site with a re-creation of my old games - rewritten in React. Currently a work in progress, but Mortal Match is playable.',
    tech: ['React.js'],
    github: 'https://github.com/weizguy',
    live: 'https://sshado.com'
  },
  {
    title: 'My Portfolio',
    description:
    'Just a quick portfolio website (this one) built with Nextjs using Cursor.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'Cursor'],
    github: 'https://github.com/weizguy/portfolio',
    live: 'https://dave.weizenegger.dev'
  }];

  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-24 px-6">
      <SectionHeading number="03" title="Some Things I've Built" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) =>
        <motion.div
          key={project.title}
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
          className="group relative bg-surfaceHighlight rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
          
            <div className="flex justify-between items-center mb-8">
              <FolderIcon className="w-10 h-10 text-accent" />
              <div className="flex gap-4 items-center">
                {project.github &&
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-bodyText hover:text-accent transition-colors">
                
                    <GithubIcon className="w-5 h-5" />
                    <span className="sr-only">GitHub Repository</span>
                  </a>
              }
                {project.live &&
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-bodyText hover:text-accent transition-colors">
                
                    <ExternalLinkIcon className="w-5 h-5" />
                    <span className="sr-only">Live Demo</span>
                  </a>
              }
              </div>
            </div>

            <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-bodyText text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.tech.map((tech) =>
            <li key={tech} className="font-mono text-xs text-muted">
                  {tech}
                </li>
            )}
            </ul>
          </motion.div>
        )}
      </div>
    </section>);

}