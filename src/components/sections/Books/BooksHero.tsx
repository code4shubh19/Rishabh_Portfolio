"use client";

// ============================================================
// BooksHero.tsx
// Section: Header for the Books & Publications page.
// Design: Stitch "Books & Publications" screen.
// To customize: Change the headline or the sidebar description.
// ============================================================

import React from "react";

export const BooksHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        {/* Left: Main headline */}
        <div className="md:col-span-8">
          {/* Eyebrow label */}
          <span className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-4 block">
            Publications &amp; Intellect
          </span>

          {/* Headline — update wording or line break as needed */}
          <h1 className="text-6xl md:text-7xl font-display font-bold text-on-surface leading-tight tracking-tighter">
            Books that bridge <br />
            <span className="text-primary-container">Tech and Narrative.</span>
          </h1>
        </div>

        {/* Right: Description with left accent bar */}
        <div className="md:col-span-4 border-l-4 border-primary-container pl-6 pb-2">
          {/* Update the description text here */}
          <p className="text-lg text-on-surface-variant leading-relaxed">
            A curated collection of explorations into artificial intelligence,
            digital philosophy, and the future of human-machine synthesis.
          </p>
        </div>
      </div>
    </section>
  );
};
