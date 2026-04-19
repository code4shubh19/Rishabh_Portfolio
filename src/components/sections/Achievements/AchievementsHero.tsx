"use client";

// ============================================================
// AchievementsHero.tsx
// Section: Hero header for the Achievements & Milestones page.
// Design: Stitch "Achievements & Milestones" screen.
// To customize:
//   - Change the badge text, headline, and subtext.
//   - Update imageSrc to Rishabh's actual photo.
//   - Update the stat card (number + label).
// ============================================================

import React from "react";

// ─── Editable stats card (bottom-left floating card) ─────────
const STAT = {
  number: "10+",
  label: "Global Innovation Awards Received",
};
// ─────────────────────────────────────────────────────────────

export const AchievementsHero = () => {
  return (
    <section className="relative min-h-[614px] flex items-center px-8 overflow-hidden bg-surface pt-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left: Text content */}
        <div>
          {/* Badge — update text here */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-bold tracking-wider mb-6">
            CURATED EXCELLENCE
          </span>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-on-surface leading-none mb-8">
            Achievements &amp; <br />
            <span className="text-primary italic">Milestones.</span>
          </h1>

          {/* Subtitle — update here */}
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            The intersection of technological innovation and literary mastery.
            A chronicle of the journey from lines of code to the power of the
            written word.
          </p>
        </div>

        {/* Right: Portrait + stat card */}
        <div className="relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            {/* TODO: Replace with Rishabh's actual photo */}
            <img
              className="w-full h-full object-cover"
              alt="Rishabh Agrawal achievements and milestones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMV7V3SIPk0s6goasXJNJNoCq9bbuWxZaVVoA3I1PVbwLvzBNVpN6NmvSEl4t5bFDvZn2CmUlcc_381N5qDstCb2ekxcMRLSv2ALpHEtt-fx5QnXKXk12YjA8T5RwlFuy-OrBbiy8_HNXF0vHvtDQV32XtDBRnzzgqI7OsHxJh1hD0vrX5_75BZIfqpnE3hCsnfiQSHZGoLD-rU8cWDKdCCw_9zw1mnURAljRLMVrUY142VLGqGmS-NctdJ4TO4-w14SuaQ7txkdNe"
            />
          </div>

          {/* Floating stat card — update STAT object above */}
          <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-xl shadow-xl max-w-xs -rotate-3">
            <p className="text-primary font-display font-bold text-3xl">{STAT.number}</p>
            <p className="text-on-surface-variant text-sm font-medium">{STAT.label}</p>
          </div>
        </div>
      </div>

      {/* Decorative gradient — cosmetic only */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
    </section>
  );
};
