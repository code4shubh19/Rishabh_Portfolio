"use client";

// ============================================================
// AboutCTA.tsx
// Section: Call to action block at the bottom of the About page.
// Design: Stitch "About & Achievements" – CTA section.
// To customize: Update headline, body text, and button labels/hrefs.
// ============================================================

import React from "react";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="py-24 max-w-5xl mx-auto px-8 text-center">
      <div className="bg-surface-container-high rounded-3xl p-12 md:p-20 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          {/* Headline — update here */}
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Build the Future?
          </h2>

          {/* Body text — update here */}
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            Whether you&apos;re interested in AI partnerships or literary
            collaborations, let&apos;s connect and create something impactful.
          </p>

          {/* CTA buttons — update hrefs and labels as needed */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rishabhbenz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/books"
              className="bg-surface text-primary px-8 py-4 rounded-xl font-bold shadow-sm border border-primary/10 hover:bg-surface-container-lowest transition-all text-center"
            >
              View My Books
            </Link>
          </div>
        </div>

        {/* Decorative blurred circles — cosmetic only */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 blur-[100px]"></div>
      </div>
    </section>
  );
};
