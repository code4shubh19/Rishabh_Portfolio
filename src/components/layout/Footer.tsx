import React from "react";
import Link from "next/link";
import { BookOpen, Briefcase, Send, Mail } from "lucide-react";

const socialLinks = [
  { icon: BookOpen, href: "https://github.com", label: "Literary Works" },
  { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@rishabh.dev", label: "Email" },
];

const footerLinks = [
  { name: "Faxlab AI", href: "#faxlab" },
  { name: "Insights & Essays", href: "#insights" },
  { name: "Books", href: "#books" },
  { name: "About", href: "#about" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-none mt-auto">
      {/* Design System Note: Level 1 (Sections) surface-container-low used here */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold font-display tracking-tight text-on-surface">
                Risabh Agrawal
              </span>
            </Link>
            <p className="text-on-surface-variant text-base max-w-sm leading-relaxed">
              Bridging the gap between the precision of a tech founder and the narrative authority of an author.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-surface border-none flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-variant transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-on-surface font-display font-semibold uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-on-surface font-display font-semibold uppercase tracking-wider text-sm">Let&apos;s Connect</h3>
            <div className="space-y-4">
              <p className="text-base text-on-surface-variant">
                Available for intellectual inquiries and professional collaborations.
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-3 bg-primary text-on-primary rounded-md text-sm font-medium shadow-none hover:bg-gradient-to-br hover:from-primary hover:to-primary-container transition-all active:scale-95"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Ghost Border applied here as a subtle fallback (outline-variant at 20%) */}
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} Risabh Agrawal. All rights reserved.</p>
          <div className="flex gap-6">
            <span>The Intellectual Architect</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
