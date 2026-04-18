import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <h2 className="text-4xl font-bold font-display mb-6">The Intersection of Logic &amp; Storytelling</h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
              My journey is a synthesis of two worlds. As the founder of Faxlab AI, I spend my days navigating the complex architectures of neural networks and operational scale.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              As an author, I translate those technical complexities into human stories. I believe the future isn't just built with code—it's written in the values we embed within our systems.
            </p>
            <div className="flex items-center gap-4 text-primary font-bold">
              <span className="material-symbols-outlined">history</span>
              <span>Read Full Story</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bento Style Highlight Cards */}
            <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">terminal</span>
              <h3 className="text-xl font-bold font-display mb-2">Faxlab AI</h3>
              <p className="text-sm text-on-surface-variant">Leading the next generation of autonomous intelligence and enterprise integration.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow md:mt-12">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">menu_book</span>
              <h3 className="text-xl font-bold font-display mb-2">Published Works</h3>
              <p className="text-sm text-on-surface-variant">Author of three best-selling titles exploring the human-machine interface.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">star</span>
              <h3 className="text-xl font-bold font-display mb-2">Achievements</h3>
              <p className="text-sm text-on-surface-variant">Recipient of the 2023 Digital Innovator Award and Literary Merit Prize.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow md:mt-12">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">public</span>
              <h3 className="text-xl font-bold font-display mb-2">Community</h3>
              <p className="text-sm text-on-surface-variant">Mentoring over 500+ developers and aspiring authors globally through Faxlab.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
