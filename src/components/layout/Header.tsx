import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = ['ABOUT', 'PROTOCOL', 'DATA', 'CONNECT'];

export function Header() {
  const { theme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">
            <span className="text-accent">/</span>ADVANCE
          </span>
          <span className="text-xs text-muted-foreground hidden sm:block">
            PHYSICAL THERAPY
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wider"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.button
          className="px-6 py-2 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Initialize
        </motion.button>
      </div>
    </motion.header>
  );
}
