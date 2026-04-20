import React from 'react';
import { IMAGES } from '@/lib/imageConfig';

export default function BooksTeaser() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-display mb-4">Latest Releases</h2>
            <p className="text-on-surface-variant max-w-xl">Deep dives into the philosophy of technology, the future of work, and the human spirit in an age of automation.</p>
          </div>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-md font-bold hover:bg-primary-container hover:text-on-primary-container transition-all">
            View All Titles
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Book Card 1 */}
          <a href="https://amzn.in/d/04YPt5mw" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
            <div className="aspect-[2/3] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative">
              <img
                alt="Book Cover"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={IMAGES.books.superhero}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-on-surface px-6 py-2 rounded-full font-bold">Preview Insight</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">What If You Are a Superhero</h3>
            <p className="text-on-surface-variant mb-4">Exploration of human consciousness in the wake of sentient-parallel AI development.</p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>Get Copy</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </a>
          {/* Book Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/3] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative">
              <img
                alt="Book Cover"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={IMAGES.books.marriageDates}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-on-surface px-6 py-2 rounded-full font-bold">Preview Insight</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">My 50 Arranged Marraige Dates</h3>
            <p className="text-on-surface-variant mb-4">The untold story of building a silicon valley powerhouse from a home garage in Mumbai.</p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>Get Copy</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
          {/* Book Card 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[2/3] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative">
              <img
                alt="Book Cover"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={IMAGES.books.neuralNarratives}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-on-surface px-6 py-2 rounded-full font-bold">Preview Insight</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">Neural Narratives</h3>
            <p className="text-on-surface-variant mb-4">A collection of short stories co-written with the first iteration of Faxlab's generative AI.</p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <span>Get Copy</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
