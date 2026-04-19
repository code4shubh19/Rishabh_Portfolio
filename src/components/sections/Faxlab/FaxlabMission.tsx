"use client";

import React from "react";
import Link from "next/link";
import { Brain, MoveRight, Shield, Zap, Globe } from "lucide-react";

export const FaxlabMission = () => {
  return (
    <section className="bg-surface-container-low py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">Core Philosophy</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Large Feature Card */}
          <div className="md:col-span-2 bg-surface p-10 rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/10">
            <div>
              <Brain className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display mb-4">Human-Centric Intelligence</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We believe AI should be an extension of human creativity, not a replacement. Our mission is to automate the mundane so humanity can focus on the extraordinary. Faxlab AI is built on the intersection of deep learning and semantic nuance.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <Link href="#" className="flex items-center gap-4 text-primary font-bold group">
                <span>Learn about our ethics</span>
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          {/* Small Highlight Card */}
          <div className="bg-primary p-10 rounded-xl text-on-primary flex flex-col justify-center text-center">
            <div className="text-5xl md:text-6xl font-bold font-display mb-2">99.9%</div>
            <div className="text-primary-fixed font-medium uppercase tracking-widest text-sm">Semantic Accuracy</div>
            <p className="mt-4 opacity-80 text-sm w-full">Leading the industry in contextual understanding for complex workflows.</p>
          </div>
          {/* Row 2 */}
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Privacy First</h4>
            <p className="text-on-surface-variant text-sm border-none">Enterprise-grade security protocols integrated into every node of the Faxlab stack.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Zap className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Real-time Synthesis</h4>
            <p className="text-on-surface-variant text-sm">Experience latency-free data interpretation designed for high-stakes decision making.</p>
          </div>
          <div className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
            <Globe className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-bold text-xl font-display mb-2">Global Scale</h4>
            <p className="text-on-surface-variant text-sm">Supporting over 40+ languages with native-level cultural nuance and context.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
