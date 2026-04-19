"use client";

// ============================================================
// InsightsGrid.tsx
// Section: Main 3-column article grid below featured.
// Design: Stitch "Insights – Blog Listing" grid section.
// To customize: Update the ARTICLES array. Each article has:
//   - imageSrc, imageAlt, category, title, excerpt, date, readTime, href
// ============================================================

import React from "react";

// ─── Editable article data ────────────────────────────────────
// Add/remove articles or update their data here.
const ARTICLES = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGMs5yAPywoBOMMN1yocU7UCSQbJlYb7C-HnmGB5UNfh6W1Xx8ubYj2fSG6xIVxY6gt-XRxVLdkQievuph3cL0PcH29pZ4FAmVokwWa6C2Q3_SdONLm4aofTwk2XTutzZT2LS3hzkRYRXn9rVCE0YKERDx-08JARf7YTKvObp7CgtL3BrsrSY9ob-U9ZF6255sm0QUOgyriwn-0AQrvBLqq2lNMVCvYUN30Sb6NfZS5F6VT5VaaiCAhIGcQTyTNXhtjmxQd3RGGQNU",
    imageAlt: "AI & Technology article image",
    category: "AI & Technology",
    title: "The Ethics of Prompting: Who Owns the Output?",
    excerpt:
      "A legal and philosophical dive into the ownership of AI-assisted literary works in the age of global datasets.",
    date: "Jan 22, 2024",
    readTime: "10 min read",
    href: "#",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGfdl0K-vYsacvKOJnIKKa3HCzUeY6BQIvqPjDcTThHdi1-GVlKa2oYCbde8ddyzxEkgEhteviLt572TOyrzaF0C3yPcpzGPjWUpB-6Hm0PL-nNvZ-qgTqdyAD79ur-LCq1UM757rTraP_J0TMEcO5eA02JZLTGs9PZv5slEUtzvZobaWZjslrPvaqwqZdB3l4kDp6aXp0PSi0lu9TmyvzLtvMjECKSgfGro9KlLbWxdon4EMDvT28iNKPYYR9Wdvubm4_DpzF2nar",
    imageAlt: "Narrative Strategy article image",
    category: "Narrative Strategy",
    title: "Building 'The Author' Brand in Tech",
    excerpt:
      "Why founders are increasingly turning to long-form writing to establish defensible market authority.",
    date: "Jan 18, 2024",
    readTime: "6 min read",
    href: "#",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBopImNKm7kes778nkjUOwgiXPQp81elEpHdkhzz1VtxBN7FFlsOjbJ4RukNqQyRRg-AV-MM9eQdoaDUT1s0-zVAP7gbzj-hdHcvZ6c7gAixY1CgXnrStPfXpVYsiLy9sKfWZJyQWiE0mr6olEunoyRQtiC3eqm_fIDbw9fFM1puI-6nqkvljhS5H0NXoXCB3BfFjMzxRxObtaE9Kfy0YBuHR9uZdrDVc4dOu1EretBVw_si_uXnrYBWsq9D-TnlfWbxUZcLbh8HZXT",
    imageAlt: "Entrepreneurship article image",
    category: "Entrepreneurship",
    title: "Failure is a Draft: Redefining Pivot Culture",
    excerpt:
      "How literary editing processes can be applied to startup pivots for more graceful transitions.",
    date: "Jan 05, 2024",
    readTime: "14 min read",
    href: "#",
  },
];
// ─────────────────────────────────────────────────────────────

export const InsightsGrid = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto px-8">
      {ARTICLES.map((article) => (
        <article key={article.title} className="flex flex-col group cursor-pointer">
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container mb-6">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={article.imageAlt}
              src={article.imageSrc}
            />
          </div>

          {/* Category label */}
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
            {article.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{article.excerpt}</p>

          {/* Meta: date + read time */}
          <div className="mt-auto flex justify-between items-center text-xs text-tertiary">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </article>
      ))}
    </section>
  );
};
