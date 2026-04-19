"use client";

import React from "react";
import Link from "next/link";

export const FaxlabCTA = () => {
  return (
    <section className="mb-24 px-8 max-w-7xl mx-auto">
      <div className="bg-primary-container/10 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center border border-primary-container/20">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-on-primary-container">Ready to see the future?</h2>
          <p className="text-on-surface-variant text-xl mb-10 leading-relaxed">
            Join hundreds of innovative companies using Faxlab to automate their intelligence workflows. Explore the main platform or book a demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://www.faxlab.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-gradient-to-r hover:from-primary hover:to-primary-container transition-all text-center"
            >
              Go to Faxlab.com
            </Link>
            <Link 
              href="#" 
              className="bg-surface text-primary px-10 py-4 rounded-md font-bold text-lg border border-primary/20 hover:bg-surface-container-low transition-all text-center"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
        {/* Glassmorphism decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
