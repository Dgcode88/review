'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Top Picks', href: '#featured' },
  { label: 'Reviews', href: '#latest' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Guides', href: '#newsletter' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-primary text-white' : 'bg-primary/10 text-primary backdrop-blur-md'
              }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className={`font-display text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-primary'
              }`}>
              Review<span className="text-secondary-foreground">CatLitter</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${scrolled ? 'text-primary/80' : 'text-primary/80'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-secondary hover:bg-secondary/80 text-primary' : 'bg-white/50 hover:bg-white/80 text-primary'
              }`}>
              <Search className="w-5 h-5" />
            </button>
            <button className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${scrolled
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}>
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary' : 'text-primary'
              }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl p-6 md:hidden h-screen">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold shadow-lg">
              Subscribe
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
