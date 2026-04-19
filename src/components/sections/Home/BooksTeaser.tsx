import React from 'react';

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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ4Zg3NG3UMrHTKi2qQ96m9MTQH8pIdTjKEZd5TsQj8SZZBIs_UjJREPYDIDCDg--3Qopv_hsY9oI_ugIEynOgV66rTgCci7Qlerlz9rg845CBqHIsG3lWpW0iUzNxRsZL9PvZkkl5rTOy3-1o7FC_2NC8li_DyWekTKcg9_9PFq40HAI7zm_0-upKAVCLFjc2mirCCl6uUGMyo1q6IgTlIzxGGmGdlWfstkhpTcTW8zxNPGKK1SIzIFwJYatP-ey1HCML-sqibvrf"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvTjG7vS9EaTixkuzt3T4uppeKwfj6g5RNaNfLQX-o9M4qUYKpx0Wy9vdapaia6qm9o_DY6XXXigeoGyMF4Vr6p82WrOp1iz3l_Tm_eykVWg6OXYs4aavPd3_n7VssmJU9iMUDIQ3vWIE1DoaWi1if-0Pb5XueXJMrsP074O7xOlTSLo7tdzNhK7kOH-WDDZoZ-alaeUJGBqjQPcWRyjeRQqXVicHTs6YjYW-ZfEu8G4f3WrQ6HF-ELwoA9vi37RDBVnAY7-rZ02rm"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGKelMui4pxZx419H8Huw1ERTNJg7foBspbZ3QPL5kX5jN2I5gJsVM4T1Mw_66dlt5NEespYan6Dk1J75YyGiH9Yy-cEUD5ZLjqzUKGxmBJKsQgAEW5qgo-0NTzwBsudPQ5pzfbJXGzzQVCpYaCVwJ9UP78uQJ4eZq3LcQYEiR6cHplRte4QrNAmzCKUJR6dutFV20yUK3v6tigT_eDpaB4yk0vNfbs5GWvwCxwAvHVtQECukjkxxRNOELcihUpP0r5Hy4ZAS1pvM7"
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
