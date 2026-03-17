'use client';

import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  number: string;
  title: string;
}
export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
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
      }}
      className="flex items-center gap-4 w-full mb-12">
      
      <h2 className="text-2xl md:text-3xl font-bold text-cream flex items-baseline gap-2">
        <span className="font-mono text-accent text-xl md:text-2xl font-normal">
          {number}.
        </span>
        {title}
      </h2>
      <div className="h-[1px] flex-grow max-w-xs bg-border ml-4"></div>
    </motion.div>);

}