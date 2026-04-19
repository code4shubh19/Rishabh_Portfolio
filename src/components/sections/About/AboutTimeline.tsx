"use client";

// ============================================================
// AboutTimeline.tsx
// Section: Professional timeline for the About page.
// Design: Stitch "About & Achievements" — "Professional Narrative".
// To customize: Edit the TIMELINE_ITEMS array below.
//   Each item: { period, role, description, isActive }
//   isActive=true → teal dot, isActive=false → grey dot.
// ============================================================

import React from "react";

// ─── Editable timeline data ────────────────────────────────
// Add, remove, or reorder timeline entries here.
const TIMELINE_ITEMS = [
  {
    period: "2023 - Present",
    role: "CEO & Founder @ Faxlab AI",
    description:
      "Pioneering modular AI architectures that allow organizations to scale intelligence without sacrificing data privacy. Building AI systems that bridge technical precision with human narrative.",
    isActive: true, // Renders with highlighted (primary) dot
  },
  {
    period: "2021 - 2023",
    role: "Author & Entrepreneur",
    description:
      "Published books exploring the intersection of technology and human potential. Grew a readership community through storytelling that demystifies AI for everyday readers.",
    isActive: false,
  },
  {
    period: "2019 - 2021",
    role: "Tech Architect & Builder",
    description:
      "Architected core product pillars for Faxlab before its official launch. Built technical foundations while simultaneously developing the editorial voice that defines the brand.",
    isActive: false,
  },
  {
    period: "2016 - 2019",
    role: "The Beginning",
    description:
      "Early-stage product development, ideation, and the foundational groundwork for what would become Faxlab AI. First forays into long-form writing alongside technical work.",
    isActive: false,
  },
];
// ─────────────────────────────────────────────────────────────

export const AboutTimeline = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left: Sticky context panel */}
        <div className="lg:col-span-4 sticky top-32 h-fit">
          <h2 className="text-4xl font-display font-bold leading-tight mb-6">
            Professional Narrative
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            A commitment to pushing the boundaries of what's possible at the
            intersection of logic and creativity.
          </p>

          {/* Pull-quote block — update the quote text here */}
          <div className="p-6 bg-surface-container rounded-xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1 bg-primary-container h-12 flex-shrink-0"></div>
              <blockquote className="text-lg font-display font-medium text-primary italic">
                &ldquo;Technology is the tool, but the story we tell with it
                defines our humanity.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right: Timeline entries */}
        <div className="lg:col-span-8 space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isLast = idx === TIMELINE_ITEMS.length - 1;
            return (
              <div
                key={item.period}
                className={`relative pl-12 ${
                  isLast ? "" : "border-l-2 border-surface-container-high"
                }`}
              >
                {/* Timeline dot — teal for active, grey for past */}
                <div
                  className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-4 ring-surface ${
                    item.isActive ? "bg-primary" : "bg-outline-variant"
                  }`}
                ></div>

                {/* Period label */}
                <span
                  className={`font-bold text-sm tracking-widest uppercase ${
                    item.isActive ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.period}
                </span>

                {/* Role */}
                <h3 className="text-2xl font-display font-bold mt-2 mb-4">
                  {item.role}
                </h3>

                {/* Description */}
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
