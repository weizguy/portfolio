'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
export function Experience() {
  const jobs = [
  {
    company: 'BI Worldwide',
    role: 'Senior Software Engineer',
    date: '05/2021 - 02/2026',
    description: [
    'Backend & APIs: Built and maintained backend for Learning Management Systems using Node.js, Docker, AWS, MySQL, PostgreSQL, and GraphQL; designed and shipped microservices to extend platform capabilities.',
    'Performance: Cut API response times from several minutes to seconds by introducing Redis caching, improving UX and system throughput.',
    'Data & reporting: Implemented SCORM upload and management via AWS S3 and REST APIs; engineered a data warehouse and reporting layer for aggregated analytics and custom reports.',
    'Search: Delivered multi-query search using Elasticsearch so users could run custom searches and get targeted results.',
    'Automation & reliability: Built an automated email reporting pipeline that queries PostgreSQL and sends reports via Amazon SES; integrated Slack error alerts with detailed context for faster debugging.',
    'Quality & delivery: Led code reviews and managed deployments through GitLab CI/CD; collaborated remotely via Slack and Teams in two-week sprints with daily standups.']
  },
  {
    company: 'Smarte Carte',
    role: 'Full Stack Developer (Part-time)',
    date: '04/2022 - 05/2024',
    description: [
    'Led frontend modernization with React and MUI to improve usability and consistency; delivered pixel-accurate reporting components for clarity and correctness.',
    'Owned UX and frontend delivery in a small agile team; participated in daily standups and remote collaboration via Teams.']
  },
  {
    company: 'Trane',
    role: 'Full Stack Engineer',
    date: '08/2019 - 05/2021',
    description: [
    'Built charting tools and dashboard widgets for energy usage apps using React, Plotly, Highcharts, and d3; supported data-driven decisions for internal and external users.',
    'Contributed to deployment and release process using GitLab CI/CD; wrote unit tests with React Testing Library and Jest to protect quality and regressions.',
    'Mentored engineers via Slack and Teams; performed bug fixes and enhancements to stabilize and improve performance.']
  },
  {
    company: 'My Office Apps',
    role: 'Software Engineer',
    date: '08/2017 - 05/2019',
    description: [
    'Developed and evolved a custom ERP system using customer feedback; designed and led adoption of SOAP and REST APIs to streamline integrations.',
    'Wrote and ran tests to validate behavior and reliability; demonstrated the system to prospects and stakeholders to support sales and adoption.']
  }];

  return (
    <section id="experience" className="w-full max-w-3xl mx-auto py-24 px-6">
      <SectionHeading number="04" title="Where I've Worked" />

      <div className="relative border-l border-border ml-3 md:ml-0">
        {jobs.map((job, idx) =>
        <motion.div
          key={job.company}
          initial={{
            opacity: 0,
            x: -20
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.5,
            delay: idx * 0.2
          }}
          className="mb-12 pl-8 relative group">
          
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-background border-2 border-muted rounded-full -left-[6.5px] top-1.5 group-hover:border-accent group-hover:bg-accent/20 transition-colors"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-cream">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-sm text-muted mt-1 md:mt-0">
                {job.date}
              </span>
            </div>

            <ul className="mt-4 space-y-3">
              {job.description.map((desc, i) =>
            <li
              key={i}
              className="text-bodyText text-sm leading-relaxed flex items-start gap-3">
              
                  <span className="text-accent mt-1.5 text-xs">▹</span>
                  <span>{desc}</span>
                </li>
            )}
            </ul>
          </motion.div>
        )}
      </div>
    </section>);

}