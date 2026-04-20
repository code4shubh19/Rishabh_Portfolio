// ============================================================
// app/books/page.tsx
// Route: /books
// This page assembles all Books section components.
// To add/remove sections, import and place them below.
// ============================================================

import React from "react";
import { BooksHero } from "@/components/sections/Books/BooksHero";
import { BooksFeatured } from "@/components/sections/Books/BooksFeatured";
import { BooksGrid } from "@/components/sections/Books/BooksGrid";

export const metadata = {
  title: "Books – Rishabh Agrawal",
  description:
    "Explore books by Rishabh Agrawal that bridge technology, AI, and human narrative.",
};

export default function BooksPage() {
  return (
    <div className="pb-24 pt-16">
      {/* Page header */}
      <BooksHero />

      {/* Featured/latest book showcase */}
      <BooksFeatured />

      {/* Full bibliography grid */}
      <BooksGrid />

      {/* Newsletter / subscriber CTA */}
      <section className="max-w-4xl mx-auto px-8 mt-16 mb-24">
        <div className="relative rounded-2xl p-12 overflow-hidden bg-primary/5 text-center border border-white/20 backdrop-blur-md">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <h4 className="text-3xl font-display font-bold mb-4 relative">Stay Updated on New Releases</h4>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto relative">
            Get early access to chapter previews, limited edition copies, and
            quarterly essays from Rishabh Agrawal.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative">
            <input
              className="flex-grow bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder="Email Address"
              type="email"
            />
            <button
              className="bg-primary text-on-primary font-bold px-8 py-3 rounded-md hover:opacity-90 transition-all"
              type="submit"
            >
              Join the Circle
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
