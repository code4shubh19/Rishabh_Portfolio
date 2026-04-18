import React from "react";
import Link from "next/link";
import { Code2, Briefcase, Send, Mail, Rocket } from "lucide-react";

const socialLinks = [
  { icon: Code2, href: "https://github.com", label: "GitHub" },
  { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@rishabh.dev", label: "Email" },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Privacy Policy", href: "/privacy" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gradient">
                Rishabh.dev
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Crafting innovative web experiences with a focus on performance, 
              accessibility, and modern design. Let&apos;s build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-none bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
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
            <h3 className="text-foreground font-semibold uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-foreground font-semibold uppercase tracking-wider text-xs">Let&apos;s Connect</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Currently available for new projects and collaborations.
              </p>
              <Link
                href="#contact"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-none text-sm font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rishabh. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with ❤️ and Next.js</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
