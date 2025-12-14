'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Categories', href: '/categories/best-clumping-cat-litter' },
  { label: 'Compare', href: '/compare' },
  { label: 'Guides', href: '/guides' },
  { label: 'Methodology', href: '/methodology' },
  { label: 'Purrify', href: 'https://purrify.ca', external: true, highlight: true },
  { label: 'About', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 py-3 shadow-sm'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-primary text-secondary' : 'bg-primary/10 text-primary backdrop-blur-md'
              }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <span className={`font-display text-2xl font-bold transition-colors duration-300 text-primary`}>
              Review<span className="text-foreground">CatLitter</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  link.highlight
                    ? 'text-emerald-600 font-bold hover:text-emerald-700'
                    : scrolled ? 'text-foreground/80' : 'text-foreground/80'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {searchOpen ? (
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
                  autoFocus
                  className="pl-4 pr-10 py-2 rounded-full border border-primary/20 bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setSearchOpen(false)}
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${scrolled ? 'bg-secondary hover:bg-secondary/80 text-primary' : 'bg-white/50 hover:bg-white/80 text-primary'
                  }`}
              >
                <Search className="w-5 h-5" />
              </button>
            )}

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
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </form>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`text-lg font-medium transition-colors ${
                  link.highlight
                    ? 'text-emerald-600 font-bold hover:text-emerald-700'
                    : 'text-foreground/80 hover:text-primary'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
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
