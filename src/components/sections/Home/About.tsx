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
            <div className="p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Faxlab AI</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                An emerging AI-powered learning platform dedicated to bridging the gap between theoretical machine learning and real-world application through structured, hands-on experience.
              </p>
            </div>

            <div className="p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:mt-12">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">Published Works</h3>
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📘</span>
                    <span className="font-bold text-sm text-primary">What If You Are a Superhero</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed pl-7">
                    A reflective take on identity, potential, and self-discovery.
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📕</span>
                    <span className="font-bold text-sm text-secondary">My 50 Arranged Marriage Dates</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed pl-7">
                    Capturing real-life insights into modern relationships and society.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">star</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Achievements</h3>
              <ul className="space-y-3">
                {[
                  "Founder of Faxlab AI",
                  "Board Member – IIC",
                  "Pioneer in AI-driven education",
                  "Global Tech Contributor"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:mt-12">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-on-surface">Community</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Mentoring a global community of <strong>100+ developers</strong> and innovators, nurturing the next wave of technical and creative excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
