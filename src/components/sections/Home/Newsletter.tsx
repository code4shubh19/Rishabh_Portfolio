'use client';
import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-surface-container-high">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold font-display mb-6">Stay ahead of the curve.</h2>
        <p className="text-xl text-on-surface-variant mb-10">Subscribe to my monthly editorial where I dissect the future of AI and the craft of storytelling.</p>
        <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            className="flex-1 px-6 py-4 rounded-md bg-surface-container-lowest border-none outline-none focus:ring-2 focus:ring-primary transition-all text-on-surface w-full"
            placeholder="Enter your email address"
            type="email"
            autoComplete="email"
          />
          <button className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold hover:opacity-90 transition-all text-lg" type="submit">
            Join 100+ Readers
          </button>
        </form>
      </div>
    </section>
  );
}
