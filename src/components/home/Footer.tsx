'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const footerLinks = {
  reviews: [
    { label: 'All Reviews', href: '/reviews' },
    { label: 'Best Clumping', href: '/categories/best-clumping-cat-litter' },
    { label: 'Budget Picks', href: '/categories/best-budget-cat-litter' },
    { label: 'Natural & Eco', href: '/categories/best-natural-cat-litter' },
  ],
  resources: [
    { label: 'Testing Methodology', href: '/methodology' },
    { label: 'All Guides', href: '/guides' },
    { label: 'Compare Products', href: '/compare' },
    { label: 'Search', href: '/search' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Purrify', href: 'https://purrify.ca' },
    { label: 'Contact', href: '/about' },
    { label: 'Methodology', href: '/methodology' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      {/* Cat Silhouette Watermark */}
      <div className="absolute bottom-0 right-12 opacity-[0.03] pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="currentColor"
          className="text-secondary"
        >
          <path d="M100 50 L80 30 L70 40 L75 60 L85 70 L100 75 L115 70 L125 60 L130 40 L120 30 L100 50 Z M100 75 Q80 80 70 100 Q65 120 70 140 Q75 155 90 160 L110 160 Q125 155 130 140 Q135 120 130 100 Q120 80 100 75 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold text-secondary mb-4">
              Review<span className="text-accent">CatLitter</span>
            </h3>
            <p className="text-secondary/60 mb-8 leading-relaxed">
              Independent, data-driven cat litter reviews for discerning cat parents since 2024.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'Youtube' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="w-12 h-12 bg-secondary/10 hover:bg-accent text-secondary hover:text-foreground rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Reviews Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-secondary mb-6">
              Reviews
            </h4>
            <ul className="space-y-4">
              {footerLinks.reviews.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-secondary mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-secondary mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-secondary/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary/40 text-sm">
              © 2024 ReviewCatLitter.com. All rights reserved.
            </p>
            <p className="text-secondary/40 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for cat parents everywhere 🐱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
