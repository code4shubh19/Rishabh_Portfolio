'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/types';

interface HeroProps {

  content: {
    title: string;
    subtitle?: string;
    cta?: string;
    image?: string;
  };
  style?: Record<string, any>;
}

export default function Hero({ content, style }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 bg-background">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight md:leading-[1.1]">
           <span className="text-foreground">{content.title.split(' ')[0]}</span>{' '}
            <span className="text-gradient drop-shadow-sm font-bold block md:inline">
              {content.title.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {content.subtitle && (
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              {content.subtitle}
            </p>
          )}

          {content.cta && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10"
            >
              <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all text-lg group overflow-hidden relative border-none">
                <span className="relative z-10">{content.cta}</span>
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
