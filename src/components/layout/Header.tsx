import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">
            <span className="text-accent">/</span>ADVANCE
          </span>
          <span className="text-xs text-muted-foreground hidden sm:block">
            PHYSICAL THERAPY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              whileHover={{ y: -2 }}
            >
              {item.label.toUpperCase()}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider py-2"
              >
                {item.label.toUpperCase()}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider rounded-lg text-center mt-2"
            >
              Get Started
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
