// ============================================================
// app/achievements/page.tsx
// Route: /achievements
// Assembles all Achievements section components.
// To add/remove sections, import and place components here.
// ============================================================

import React from "react";
import { AchievementsHero } from "@/components/sections/Achievements/AchievementsHero";
import { AchievementsAwards } from "@/components/sections/Achievements/AchievementsAwards";
import { AchievementsTimeline } from "@/components/sections/Achievements/AchievementsTimeline";
import Link from "next/link";

export const metadata = {
  title: "Achievements & Milestones – Rishabh Agrawal",
  description:
    "Awards, recognition, and the professional journey of Rishabh Agrawal — founder of Faxlab AI and published author.",
};

export default function AchievementsPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      {/* Hero with floating stat card */}
      <AchievementsHero />

      {/* Awards bento grid */}
      <AchievementsAwards />

      {/* Alternating professional timeline */}
      <AchievementsTimeline />

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold mb-8">
            Ready to build the future together?
          </h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Whether you have a groundbreaking idea or a story that needs to
            be told, let&apos;s connect.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/books"
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-container-high transition-colors text-center"
            >
              Explore My Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
