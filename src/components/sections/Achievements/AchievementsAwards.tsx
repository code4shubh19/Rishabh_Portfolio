"use client";

// ============================================================
// AchievementsAwards.tsx
// Section: Recognition & Awards bento grid.
// Design: Stitch "Achievements & Milestones" screen.
// To customize: Edit FEATURED_AWARD and SIDE_AWARDS below.
//   Each side award has: icon (lucide), label, description, date, color.
// ============================================================

import React from "react";
import { Medal, BookOpen, Trophy, BadgeCheck, Star, MoveRight } from "lucide-react";

// ─── Editable: Main featured award ───────────────────────────
const FEATURED_AWARD = {
  year: "2023",
  title: "2023 Digital Innovator Award",
  description:
    "Recognized for pioneering contributions to AI-driven workflows, streamlining the nexus between complex data analysis and narrative storytelling.",
  learnMoreHref: "#", // Update with real link if available
};

// ─── Editable: Side awards grid ──────────────────────────────
// To add more: duplicate an object and add it to the array.
const SIDE_AWARDS = [
  {
    Icon: BookOpen,
    label: "Literary Merit Prize",
    description: 'Awarded by the International Writers Guild for debut creative work in late 2022.',
    date: "DEC 2022",
    variant: "primary", // "primary" → teal bg, "surface" → white card
  },
  {
    Icon: Trophy,
    label: "Top 40 Under 40",
    description: "Recognized by Tech Leadership Monthly for impactful contribution to the startup ecosystem.",
    date: "JUNE 2021",
    variant: "surface",
  },
  {
    Icon: BadgeCheck,
    label: "SaaS Excellence",
    description: "Awarded for Faxlab AI architecture and user-centric design principles at the Euro-Tech Summit.",
    date: "OCT 2020",
    variant: "surface",
  },
  {
    Icon: Star,
    label: "Best AI Integration",
    description: "Best-in-class implementation of generative AI within a creative production environment.",
    date: "JAN 2024",
    variant: "surface",
  },
];
// ─────────────────────────────────────────────────────────────

export const AchievementsAwards = () => {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-on-surface mb-4">
              Recognition &amp; Awards
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Defining industry standards through consistent excellence and disruptive thinking.
            </p>
          </div>
          <div className="h-1 w-24 bg-primary rounded-full"></div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured award — spans 2 cols */}
          <div className="md:col-span-2 bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/10">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <Medal className="w-12 h-12 text-primary" />
                <span className="text-sm font-bold text-on-surface-variant/40 font-display">
                  {FEATURED_AWARD.year}
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {FEATURED_AWARD.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
                {FEATURED_AWARD.description}
              </p>
              <div className="mt-auto pt-6 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-bold group/link">
                <span>Learn more</span>
                <MoveRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Side awards */}
          {SIDE_AWARDS.map((award) => {
            const { Icon } = award;
            if (award.variant === "primary") {
              return (
                <div key={award.label} className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
                  <div>
                    <Icon className="w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-display font-bold mb-4">{award.label}</h3>
                    <p className="text-on-primary/80 text-sm leading-relaxed">{award.description}</p>
                  </div>
                  <p className="font-display font-bold text-lg mt-8 opacity-60">{award.date}</p>
                </div>
              );
            }
            return (
              <div key={award.label} className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-on-secondary-container" />
                  </div>
                  <span className="text-sm font-bold text-on-surface-variant">{award.label}</span>
                </div>
                <p className="text-on-surface-variant text-sm">{award.description}</p>
                <p className="mt-6 text-xs font-bold text-primary tracking-widest uppercase">{award.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
