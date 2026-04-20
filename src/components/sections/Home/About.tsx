"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Star, Globe, ArrowRight, History } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-primary font-display font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="font-display font-bold mb-6 text-on-surface">The Intersection of Logic &amp; Storytelling</h2>
            <div className="w-16 h-1.5 bg-primary rounded-full mb-8"></div>
            
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              My journey is a synthesis of two worlds. As the founder of Faxlab AI, I spend my days navigating the complex architectures of neural networks and operational scale.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
              As an author, I translate those technical complexities into human stories. I believe the future isn&apos;t just built with code—it&apos;s written in the values we embed within our systems.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group"
            >
              <History className="w-5 h-5" />
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>

          {/* Right: Bento Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Bento Style Highlight Cards */}
            <motion.div variants={itemVariants} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Terminal className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Faxlab AI</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                An emerging AI-powered learning platform dedicated to bridging the gap between theoretical machine learning and real-world application.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:mt-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Star className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">Published Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-lg">📘</span>
                  <div>
                    <p className="font-bold text-sm text-primary leading-tight mb-1">What If You Are a Superhero</p>
                    <p className="text-[11px] text-on-surface-variant leading-tight">Reflective take on identity &amp; potential.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-lg">📕</span>
                  <div>
                    <p className="font-bold text-sm text-secondary leading-tight mb-1">My 50 Arranged Marriage Dates</p>
                    <p className="text-[11px] text-on-surface-variant leading-tight">Insights into modern relationships.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Star className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Achievements</h3>
              <ul className="space-y-3">
                {["Founder of Faxlab AI", "Board Member – IIC", "Global Tech Contributor"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:mt-12">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Community</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Mentoring <strong>100+ developers</strong> globally, nurturing the next wave of technical and creative excellence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
