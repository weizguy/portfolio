'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { CodeIcon, DatabaseIcon, LayoutIcon } from 'lucide-react';
export function About() {
  const stats = [
  {
    label: 'Years Experience',
    value: '8+',
    icon: CodeIcon
  },
  {
    label: 'Projects Completed',
    value: '40+',
    icon: LayoutIcon
  },
  {
    label: 'Technologies',
    value: '15+',
    icon: DatabaseIcon
  }];

  return (
    <section id="about" className="w-full max-w-4xl mx-auto py-24 px-6">
      <SectionHeading number="01" title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
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
            duration: 0.5,
            delay: 0.2
          }}
          className="md:col-span-3 space-y-6 text-bodyText leading-relaxed">
          
          <p>
            Hello! My name is Dave and I enjoy creating things that live on the
            internet. My interest in web development started back when I
            decided to try creating gaming websites — turns out hacking
            together HTML & CSS taught me a lot about layout and design!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working for 
            small businesses, a start-up, a huge corporation, and a
            some mid-sized companies. My main focus these days is building
            accessible, inclusive products and digital experiences for a variety
            of clients.
          </p>
          <p>
            I also recently launched a web app that allows you to track your fitness goals and progress with gamification features and an AI coach. Check it out at <a href="https://mybodyquest.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">My BodyQuest</a>.
          </p>
        </motion.div>

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
            duration: 0.5,
            delay: 0.4
          }}
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
          
          {stats.map((stat, index) =>
          <div
            key={index}
            className="p-6 rounded-lg bg-surface border border-border/50 hover:border-accent/50 transition-colors group">
            
              <stat.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-mono font-bold text-cream mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted font-mono">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

}