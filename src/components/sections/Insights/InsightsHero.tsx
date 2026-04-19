"use client";

// ============================================================
// InsightsHero.tsx
// Section: Header + category chips for the Insights page.
// Design: Stitch "Insights – Blog Listing" screen.
// To customize: Change headline, subtext, or add/remove chips
//   in the CATEGORIES array below.
// ============================================================

import React, { useState } from "react";

// ─── Editable data ───────────────────────────────────────────
// Add/remove categories here. The first entry is the default.
const CATEGORIES = [
  "All Topics",
  "AI & Technology",
  "Narrative Strategy",
  "Entrepreneurship",
];
// ─────────────────────────────────────────────────────────────

export const InsightsHero = () => {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <header className="py-16 md:py-24 max-w-7xl mx-auto px-8">
      <div className="max-w-3xl">
        {/* Eyebrow label */}
        <span className="text-primary font-bold tracking-widest text-sm uppercase">
          Curated Thoughts
        </span>

        {/* Main Headline — update wording here */}
        <h1 className="text-5xl md:text-7xl font-display font-bold mt-4 leading-tight">
          Latest Insights
        </h1>

        {/* Subtitle — update or remove as needed */}
        <p className="mt-6 text-xl text-on-surface-variant leading-relaxed">
          Exploring the intersection of artificial intelligence, narrative
          structures, and the raw mechanics of modern entrepreneurship.
        </p>
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-4 mt-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
              active === cat
                ? "bg-primary text-on-primary"
                : "bg-secondary-container text-on-secondary-container hover:bg-surface-container-highest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
};
