import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-semibold mb-6">
            Founder of Faxlab AI &amp; Author
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold font-display text-on-surface leading-[1.1] mb-8">
            Architecting AI, <br />
            <span className="text-primary italic">Narrating</span> the Future.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Bridging the gap between technical precision and human narrative. Currently building Faxlab AI while exploring the philosophy of innovation through the written word.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://amzn.in/d/04YPt5mw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gradient-to-r hover:from-primary hover:to-primary-container hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-block text-center"
            >
              Explore Books
            </a>
            <a
              href="https://www.faxlab.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gradient-to-r hover:from-primary hover:to-primary-container hover:-translate-y-1 hover:shadow-xl transition-all duration-300 inline-block text-center"
            >
              Learn About Faxlab AI
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10 transform lg:rotate-2">
            <img
              alt="Rishabh Agarwal"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8KzK5Ys-QZAEcT-dWD3D3pL1hic42q9NAzgLmAJukmRbI4n_aDYbzdTp3H06e2BGSCLpvkvIQDyBpLsYagFvd667Y6lsXxQ-2iwQ5L3zlaYz1txmhRf_y5ONywVexV_xEKj3DDgABH5bjAyRZLltJ0D51a4LRUvqyCvK8YcHM4Y96ubJlRdzRJNH-3FcIhhllESUoLaA0zMzS4dFx2eE-5krg1Y36sRutPPX0bSsQvU3L7xF-1rrJIcElpdZuosh2i_qU6wfM99CH"
            />
          </div>
          {/* Decorative background element */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>
    </section>
  );
}
