// ============================================================
// app/insights/page.tsx
// Route: /insights
// This page assembles all Insights section components.
// To add/remove sections, import and place them below.
// ============================================================

import React from "react";
import { InsightsHero } from "@/components/sections/Insights/InsightsHero";
import { InsightsFeatured } from "@/components/sections/Insights/InsightsFeatured";
import { InsightsGrid } from "@/components/sections/Insights/InsightsGrid";

export const metadata = {
  title: "Insights – Rishabh Agrawal",
  description:
    "Curated thoughts on AI, narrative strategy, and entrepreneurship from Rishabh Agrawal, Founder of Faxlab AI.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16 pb-20">
      {/* Page header + category chips */}
      <InsightsHero />

      {/* Featured article bento layout */}
      <InsightsFeatured />

      {/* Full article grid */}
      <InsightsGrid />

      {/* Newsletter signup block */}
      <section className="mt-32 p-12 md:p-20 rounded-3xl bg-surface-container-low text-center relative overflow-hidden max-w-5xl mx-auto px-8">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-display font-bold mb-6">The Synthesis Weekly</h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Get a curated digest of AI breakthroughs, narrative techniques, and
            founder mental models delivered to your inbox every Sunday.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              className="flex-grow bg-surface border border-outline-variant/20 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all"
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
          <p className="mt-6 text-xs text-tertiary">No spam. Only high-signal intellectual value. Unsubscribe anytime.</p>
        </div>
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </section>
    </div>
  );
}
