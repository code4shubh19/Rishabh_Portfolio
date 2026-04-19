"use client";

// ============================================================
// BooksGrid.tsx
// Section: Bibliography grid of all book cards.
// Design: Stitch "Books & Publications" – The Complete Bibliography.
// To customize: Edit the BOOKS array below. Each book:
//   - title, description, year, genre, amazonHref, coverSrc, coverAlt
// ============================================================

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ─── Editable: All books data ─────────────────────────────────
// Add a new object to this array to add another book card.
const BOOKS = [
  {
    title: "What If You Are a Superhero",
    description:
      "An inspiring exploration of untapped human potential and what you could become if you believed in your own extraordinary abilities.",
    year: "2023",
    genre: "Self-help / Motivation",
    amazonHref: "https://amzn.in/d/04YPt5mw", // ← Update with real Amazon link
    coverSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEWjiSuIvGiUb9nNuDSsR3ULZvEEC6xqo1txLx31XfDfHBpttADRo_sV8YuOtN2G4mpCLeXsqYlL_3ONBqkfNzeZtgFwrrydel-t2fofqTmEhKpI0SeRFFF98vDIf0qpsITbOhZU44IzNik_QgyNuqpj0m_kvETbx_t3uXEjHnf1qKT7nAhkggsljil7gdMt6Y-iVJjJHh3y5gQwLGAGV9Wvud4ygEqILbz6YqGXw5uz7zPyyOE_VatXIx1lypeZZB0N3PquYsP4Vy",
    coverAlt: "What If You Are a Superhero - Book Cover",
  },
  {
    title: "My 50 Arranged Marriage Dates",
    description:
      "A hilarious and heartfelt account of navigating modern arranged marriages, dating, and human connection.",
    year: "2022",
    genre: "Humor / Memoir",
    amazonHref: "https://amzn.in/d/04YPt5mw", // ← Update with real Amazon link
    coverSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0ZKI0hVisG2RF_o3Dg-BzAdNqCEfewQ7Ns89qzPSWB5tix-jzm3mn1ewDt0WHSIIoTDc7siY7etzO_Y822uMpnYd8GEhSw2xUq3RyIh4aIfIKqSq1Yl8RfiRI0RC4-BIl9yZLzlpDyE3X58mtPNRQL7nnv3uHx4qEzrT6mzPVNHaNQYA3k8aRw7tCv4NBB1UGdMjxmha19LADx7sGA8wa8veQs_MiqiFsXRNFNwy_1tKQIHqCyUSRR-U4UgRdtaS5G8vfk8uxa_7",
    coverAlt: "My 50 Arranged Marriage Dates - Book Cover",
  },
  {
    title: "Neural Narratives",
    description:
      "A collection of short stories co-written with the first iteration of Faxlab's generative AI — where technology meets storytelling.",
    year: "2021",
    genre: "Tech Philosophy / Fiction",
    amazonHref: "#", // ← Update with real Amazon link
    coverSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBS-J68OqBH7y8WZtxPypE_pOgFD-imH_McJSA6B8d7NKyLAybKC2U7KMtBhoFtVD0BrETGMVzG93EKwfkZ9lgR2jAgSfXjW5d-XUbel0MT9CzRRZfSQAZa3piQmCvI9W5RXe_3K39BguvqCXJlG0WbSo0hgTDDwx6inTuXs5m3wogE-uJvfzmNsodB9-MwUXSvTuSz32dbEMNgD3nSKDeCFBvIOQ8Ky8fyC8iBWmFYGiMpCkVMy0lxS8eKqpAe9Mm0JObayjvSKkJ",
    coverAlt: "Neural Narratives - Book Cover",
  },
];
// ─────────────────────────────────────────────────────────────

export const BooksGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 space-y-12 pb-24">
      {/* Section header */}
      <div className="flex justify-between items-end">
        <h3 className="text-3xl font-display font-bold">The Complete Bibliography</h3>
      </div>

      {/* Book cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BOOKS.map((book) => (
          <div key={book.title} className="group">
            {/* Cover image container with hover zoom */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden mb-6 aspect-[3/4] flex items-center justify-center p-12 transition-all group-hover:bg-surface-container-high">
              <img
                alt={book.coverAlt}
                className="w-full h-auto shadow-2xl transition-transform duration-500 group-hover:scale-105"
                src={book.coverSrc}
              />
            </div>

            {/* Book text content */}
            <div className="space-y-3">
              <h4 className="text-2xl font-display font-bold text-on-surface group-hover:text-primary transition-colors">
                {book.title}
              </h4>
              <p className="text-on-surface-variant line-clamp-2">{book.description}</p>

              {/* Meta row: year + genre + Amazon link */}
              <div className="pt-4 flex justify-between items-center">
                <span className="text-sm font-bold text-outline uppercase tracking-tighter italic">
                  {book.year} · {book.genre}
                </span>
                <Link
                  href={book.amazonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Amazon
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
