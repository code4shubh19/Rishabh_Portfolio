'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  content: {
    heading: string;
    description: string;
    skills?: string[];
  };
  style?: Record<string, any>;
}

export default function About({ content, style }: AboutProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/10 backdrop-blur-sm border-t border-b border-border/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {content.heading}
            </h2>
            <div className="w-20 h-2 bg-primary rounded-full" />
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
             {content.skills?.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 glass-morphism rounded-xl text-sm md:text-base font-semibold hover:border-primary/50 transition-colors"
                >
                  {skill}
                </motion.span>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
