import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const coordinates = ['Houston', 'College Station', 'Cypress', 'Dallas'];
const navigation = ['Careers', 'Community', 'Conditions', 'Gym Service'];
const system = ['Appointments', 'Contact Interface', 'Privacy Protocol'];

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-heading font-bold text-primary mb-2">
              <span className="text-accent">/</span>ADVANCE
            </div>
            <p className="text-sm text-muted-foreground italic">
              Isolating pain. Restoring Life.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-accent font-heading mb-4">
              Coordinates
            </h4>
            <ul className="space-y-2">
              {coordinates.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-accent font-heading mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-accent font-heading mb-4">
              System
            </h4>
            <ul className="space-y-2">
              {system.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`
          pt-8 border-t border-border text-center text-xs text-muted-foreground
        `}>
          <p>© 2024 ADVANCE PT. SYSTEMS — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
