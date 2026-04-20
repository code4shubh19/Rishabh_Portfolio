// ============================================================
// app/about/page.tsx
// Route: /about
// This page assembles all About section components.
// To add/remove sections, import and place them below.
// ============================================================

import React from "react";
import { AboutHero } from "@/components/sections/About/AboutHero";
import { AboutMilestones } from "@/components/sections/About/AboutMilestones";
import { AboutTimeline } from "@/components/sections/About/AboutTimeline";
import { AboutCTA } from "@/components/sections/About/AboutCTA";

export const metadata = {
  title: "About – Rishabh Agrawal",
  description:
    "Founder of Faxlab AI and published author. Learn about the journey, milestones, and professional narrative of Rishabh Agrawal.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      {/* Hero section with portrait */}
      <AboutHero />

      {/* Bento grid of milestone cards */}
      <AboutMilestones />

      {/* Professional timeline */}
      <AboutTimeline />

      {/* CTA block */}
      <AboutCTA />
    </div>
  );
}
