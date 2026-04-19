"use client";

// ============================================================
// BooksFeatured.tsx
// Section: Featured book with large asymmetric layout.
// Design: Stitch "Books & Publications" – Featured Publication.
// To customize:
//   - Update FEATURED_BOOK object fields below.
//   - Set amazonHref to the actual Amazon product URL.
// ============================================================

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

// ─── Editable: Featured book data ────────────────────────────
const FEATURED_BOOK = {
  coverSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUAU9FducG11ygYxIe9R4xnKsSmIvd4YcmAoewt3drXwyitKB0aJLjLTm1HRXvSPdRXc6VIFvW223tJ7NsAfhKpqcmRbQhIk7sHErr5dUZZ-IaTtGNb3IPawmYJEqc2tCYe5ajz1HqnyzO-qCosZTg3GWaokOZjOqbbH5pK02sLgp9GLNUxjvUJUb1b1uqgauHG64WuSGchwgUhZvxB1NOlEUD3l40vLq22ALnnNGmLorlPH1s753_NEwQdbZSRKGig3HNizDvcSv0",
  coverAlt: "What If You Are a Superhero - Book Cover",
  badge: "Featured Book",
  title: "What If You Are a Superhero",
  description:
    "An inspiring exploration of untapped human potential and what you could become if you believed in your own extraordinary abilities.",
  amazonHref: "https://amzn.in/d/04YPt5mw", // ← Update this with the real Amazon link
  published: "2023",
  format: "Paperback, Digital",
};
// ─────────────────────────────────────────────────────────────

export const BooksFeatured = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <div className="bg-surface-container-low rounded-xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center overflow-hidden">
        {/* Book cover image */}
        <div className="w-full md:w-2/5 relative">
          {/* Decorative blurred glow — cosmetic only */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 translate-x-10 translate-y-10"></div>
          <img
            alt={FEATURED_BOOK.coverAlt}
            className="w-full h-auto rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            src={FEATURED_BOOK.coverSrc}
          />
        </div>

        {/* Book details */}
        <div className="w-full md:w-3/5 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-container/20 text-primary font-bold text-xs uppercase tracking-widest">
            {FEATURED_BOOK.badge}
          </div>

          {/* Title — update FEATURED_BOOK.title */}
          <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
            {FEATURED_BOOK.title}
          </h2>

          {/* Description */}
          <p className="text-xl text-on-surface-variant leading-relaxed">
            {FEATURED_BOOK.description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={FEATURED_BOOK.amazonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition-all"
            >
              Buy on Amazon
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Book metadata */}
          <div className="pt-6 border-t border-outline-variant/20 flex gap-8">
            <div>
              <p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">Published</p>
              <p className="font-display font-medium">{FEATURED_BOOK.published}</p>
            </div>
            <div>
              <p className="text-xs text-outline uppercase font-bold tracking-widest mb-1">Format</p>
              <p className="font-display font-medium">{FEATURED_BOOK.format}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
