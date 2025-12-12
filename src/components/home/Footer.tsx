'use client';

import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const footerLinks = {
  reviews: [
    { label: 'All Reviews', href: '#' },
    { label: 'Top Rated', href: '#' },
    { label: 'Budget Picks', href: '#' },
    { label: 'Premium Options', href: '#' },
  ],
  resources: [
    { label: 'Testing Methodology', href: '#' },
    { label: 'Buying Guide', href: '#' },
    { label: 'Cat Care Tips', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-violet-500" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />
      
      {/* Cat Silhouette Watermark */}
      <div className="absolute bottom-0 right-12 opacity-5 pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="currentColor"
          className="text-white"
        >
          <path d="M100 50 L80 30 L70 40 L75 60 L85 70 L100 75 L115 70 L125 60 L130 40 L120 30 L100 50 Z M100 75 Q80 80 70 100 Q65 120 70 140 Q75 155 90 160 L110 160 Q125 155 130 140 Q135 120 130 100 Q120 80 100 75 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold text-white mb-4">
              Review<span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">CatLitter</span>
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Independent, data-driven cat litter reviews for discerning cat parents since 2024.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, gradient: 'from-cyan-400 to-blue-500' },
                { icon: Instagram, gradient: 'from-pink-500 to-rose-500' },
                { icon: Facebook, gradient: 'from-blue-500 to-indigo-500' },
                { icon: Youtube, gradient: 'from-red-500 to-rose-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Reviews Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Reviews
            </h4>
            <ul className="space-y-4">
              {footerLinks.reviews.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-violet-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 ReviewCatLitter.com. All rights reserved.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for cat parents everywhere 🐱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
