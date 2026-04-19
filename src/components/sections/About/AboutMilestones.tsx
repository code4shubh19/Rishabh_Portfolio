"use client";

// ============================================================
// AboutMilestones.tsx
// Section: Bento grid of core milestone cards.
// Design: Stitch "About & Achievements" screen – Journey section.
// To customize: Edit MILESTONE_CARDS below. Each card has:
//   - type: "large" | "accent" | "small"
//   - title, description, imageSrc (optional), badge (optional)
// ============================================================

import React from "react";
import { Rocket, GraduationCap, Award } from "lucide-react";

export const AboutMilestones = () => {
  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section heading */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Core Milestones</h2>
          <div className="w-20 h-1.5 bg-primary"></div>
        </div>

        {/* Bento Grid: 4-col, 2-row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

          {/* Large card: Faxlab AI — col-span-2 + row-span-2 */}
          <div className="md:col-span-2 md:row-span-2 bg-surface p-10 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-surface-container-lowest transition-all shadow-sm border border-outline-variant/10">
            <div className="space-y-4">
              <Rocket className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-display font-bold">Faxlab AI Foundations</h3>
              {/* Update description here */}
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Scaled Faxlab AI from a conceptual framework to a leading
                enterprise solution, servicing 50+ Global 500 companies in
                deep-learning integration.
              </p>
            </div>
            <div className="mt-8">
              {/* Replace src with the actual image */}
              <img
                className="w-full h-48 object-cover rounded-lg"
                alt="Faxlab AI architecture visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxU1Mq7wHtomendANvtDvvMfzP9aHUOYKr3-hdvtV7Nckuqpk6nGLsKuzP8-1M_NA97rlrB95M_-LapbCWPfkAvbcdNowL3tzRX62H_w4KNq6wz-p19aYORAleXJUOVMH8AOk5OYaH4T-LkDsiZzqy4JLk0z7ViTtU7G02KFthZx43JWx7LKlQAdYlOiXvSMHAR6kLrGKj7HCy2nFcst3uNsLnfvHj8gARIDDJIMOXAuqaA-Q6xGxYiHXuryRWM8Oz22se2-boaXX"
              />
            </div>
          </div>

          {/* Accent card: Literary success — col-span-2, row-span-1 */}
          <div className="md:col-span-2 md:row-span-1 bg-primary text-on-primary p-8 rounded-xl flex items-center gap-8 shadow-xl">
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-display font-bold">Literary Success</h3>
              {/* Update with real book info */}
              <p className="text-primary-fixed leading-snug">
                Published &quot;What If You Are a Superhero&quot;, exploring human
                potential in an age of technological transformation.
              </p>
            </div>
            <div className="flex-shrink-0 w-24 h-32 bg-white/20 rounded shadow-lg backdrop-blur flex items-center justify-center p-2 text-center text-[10px] font-bold">
              WHAT IF YOU ARE A SUPERHERO
            </div>
          </div>

          {/* Small card: Education */}
          <div className="md:col-span-1 bg-surface-container-highest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <GraduationCap className="w-8 h-8 text-primary mb-4" />
            <h4 className="font-display font-bold text-lg">Education</h4>
            {/* Update with real education details */}
            <p className="text-sm text-on-surface-variant">
              Technical background with a passion for bridging engineering and
              creative disciplines.
            </p>
          </div>

          {/* Small card: Recognition */}
          <div className="md:col-span-1 bg-secondary-container p-8 rounded-xl shadow-sm">
            <Award className="w-8 h-8 text-on-secondary-container mb-4" />
            <h4 className="font-display font-bold text-lg text-on-secondary-container">Recognitions</h4>
            {/* Update with real awards */}
            <p className="text-sm text-on-secondary-container">
              Author, entrepreneur, and tech founder recognized for innovation
              at the intersection of AI and storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
