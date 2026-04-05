'use client';

import React from 'react';
import SectionRenderer from '@/components/shared/SectionRenderer';
import { mockSectionsData } from '@/lib/data';
// import { useEffect, useState } from 'react';
// import { getPageBySlug, getPageSections } from '@/lib/data';

export default function HomePage() {
  // Normally we would use dynamic fetching here,
  // but for initialization we'll use our modular section system with mock data.
  const sections = mockSectionsData;

  return (
    <main className="flex-1 w-full flex flex-col items-stretch">
      <SectionRenderer sections={sections} />

      {/* Basic Footer for high-end look */}
      <footer className="mt-auto py-12 px-6 text-center border-t border-border/40 bg-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold text-gradient tracking-tight">RISHABH</div>
            <p className="text-muted-foreground text-sm font-medium">
              &copy; {new Date().getFullYear()} All Rights Reserved. Built with Next.js, Tailwind, and Firebase.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'GitHub', 'LinkedIn'].map((link) => (
                <a key={link} href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
