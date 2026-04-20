"use client";

// ============================================================
// AboutHero.tsx
// Section: Hero header for the About & Achievements page.
// Design: Pulled from external design(figma) "About & Achievements" screen.
// To customize: Change the badge text, headline, subheadline,
//   image `src`, or the accent label text below.
// ============================================================

import React from "react";
import { IMAGES } from "@/lib/imageConfig";

export const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left: Text content */}
      <div className="lg:col-span-7 space-y-8">
        {/* Badge — update text to change the label chip */}
        <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest">
          The Synthesis
        </span>

        {/* Main Headline — update for different wording/emphasis */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-on-surface leading-[1.1] tracking-tight">
          Architecting{" "}
          <span className="text-primary italic">Innovation</span> through
          Narrative.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          Founder of Faxlab AI and Author. Bridging the gap between
          technological precision and human storytelling.
        </p>

        {/* Accent rule + label */}
        <div className="flex gap-4 items-center">
          <div className="w-12 h-1 bg-primary-container self-center"></div>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            About &amp; Achievements
          </span>
        </div>
      </div>

      {/* Right: Portrait image */}
      <div className="lg:col-span-5 relative">
        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10">
          {/* TODO: Replace src with Rishabh's actual portrait */}
          <img
            className="w-full h-full object-cover"
            alt="Rishabh Agrawal - Founder of Faxlab AI and Author"
            src={IMAGES.profile.aboutPortrait}
          />
        </div>

        {/* Decorative blur circles — purely visual, can be removed */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-surface-container-high rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl opacity-60 -z-10"></div>
      </div>
    </section>
  );
};
