"use client";

import React from "react";
import { Check } from "lucide-react";

export const FaxlabProduct = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img 
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Macro shot of a high-tech circuit board with blue and cyan neon lights, symbolizing core AI architecture" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcwIxiJUsN0hpxzVZsmRQFU6pgmZ5hPsg3KAe5dwFwpVS1YvjYeZ5qaeZz84OOJwv8XCzmrut4XHyaaQMa0uj0OQqAtdPZuIZcNDaiY3S2Fh8k1fozg_C3Il-CSmbqDX7UwqN06b0tQJlHTBxvVRV3QByKIjjRdiHGgDng8neJhJjpFmxpzygrx5TPKTmLc1FaLQlAhyib8stLDO1O7X83A3Tko25aHjFBEji3LSC0ILEZb3_WbRVpffA5mXQnJrFF-biX5UfIwzFK"
            />
            <div className="absolute -bottom-10 -right-10 bg-surface p-6 rounded-lg shadow-xl max-w-xs hidden md:block border border-outline-variant/10">
              <p className="italic text-on-surface-variant font-medium">"Technology is the pen, but the logic is the story. Faxlab is the convergence of both."</p>
              <p className="mt-4 font-bold text-primary">— Risabh Agrawal</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl font-bold font-display">Our Flagship: Faxlab AI Engine</h2>
          <p className="text-on-surface-variant text-lg">
            The Faxlab AI Engine is a proprietary architecture designed for multi-modal reasoning. Unlike standard LLMs, our engine utilizes a recursive feedback loop that verifies facts in real-time.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-bold">Automated Editorial Review</h5>
                <p className="text-sm text-on-surface-variant">AI-driven refinement of complex documents for tone and technical accuracy.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-bold">Predictive Market Synthesis</h5>
                <p className="text-sm text-on-surface-variant">Real-time analysis of global trends to forecast business impacts.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h5 className="font-bold">Neural Knowledge Graphs</h5>
                <p className="text-sm text-on-surface-variant">Connecting disparate data points into a cohesive narrative for founders.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
