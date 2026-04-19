"use client";

// ============================================================
// AchievementsTimeline.tsx
// Section: Professional timeline with alternating layout.
// Design: Stitch "Achievements & Milestones" screen.
// To customize: Edit the TIMELINE_ITEMS array below.
//   Each item: { year, tag, tagColor, title, description }
//   tagColor: "primary" | "secondary"
// ============================================================

import React from "react";

// ─── Editable timeline items ──────────────────────────────────
const TIMELINE_ITEMS = [
  {
    year: "2018",
    tag: "FOUNDER ERA",
    tagColor: "primary" as const,
    title: "Inception of Faxlab AI",
    description:
      "Founded Faxlab with a vision to automate the editorial process without losing the human essence of storytelling. Scaled the platform to serve 500+ premium publishers worldwide within the first 18 months.",
  },
  {
    year: "2020",
    tag: "LITERARY DEBUT",
    tagColor: "secondary" as const,
    title: '"What If You Are a Superhero" Published',
    description:
      "Released debut work exploring the philosophy of human potential and untapped abilities. The book resonated deeply with readers across technology and self-help communities.",
  },
  {
    year: "2022",
    tag: "INNOVATION PEAK",
    tagColor: "primary" as const,
    title: "Faxlab AI v2.0 Launch",
    description:
      "Revolutionized the platform with proprietary AI tuned for editorial precision. This milestone marked the shift from a tool provider to a core infrastructure partner for global media houses.",
  },
];
// ─────────────────────────────────────────────────────────────

export const AchievementsTimeline = () => {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <h2 className="text-4xl font-display font-bold tracking-tight text-on-surface mb-20 text-center">
          Professional Timeline
        </h2>

        <div className="space-y-16">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isOdd = idx % 2 !== 0; // alternates layout direction
            return (
              <div
                key={item.year}
                className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start"
              >
                {/* Content column — order flips on odd rows */}
                <div className={isOdd ? "order-2" : "order-2 md:order-1"}>
                  {/* Tag */}
                  <div
                    className={`inline-block px-4 py-1 rounded text-sm font-bold mb-4 bg-surface-container-high ${item.tagColor === "primary"
                        ? "text-primary"
                        : "text-secondary"
                      }`}
                  >
                    {item.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-display font-bold text-on-surface mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Year + accent bar column */}
                <div
                  className={`flex items-center gap-6 ${isOdd ? "order-1" : "order-1 md:order-2 md:justify-end"
                    }`}
                >
                  {/* Year — large muted number for visual rhythm */}
                  <span className="text-6xl font-bold text-on-surface-variant/10 font-display">
                    {item.year}
                  </span>

                  {/* Vertical accent bar */}
                  <div
                    className={`w-2 h-24 rounded-full hidden md:block ${item.tagColor === "primary"
                        ? "bg-primary"
                        : "bg-primary-container"
                      }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
