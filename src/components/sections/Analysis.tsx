import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export function Analysis() {
  const { theme } = useTheme();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`
              p-8 md:p-12 relative
              ${theme === 'brutalist' ? 'border border-border bg-card' : ''}
              ${theme === 'organic' ? 'bg-card rounded-3xl shadow-lg' : ''}
              ${theme === 'futuristic' ? 'glass rounded-2xl' : ''}
              ${theme === 'minimal' ? 'border-l-4 border-foreground pl-8' : ''}
              ${theme === 'artdeco' ? 'border-2 border-primary/30 bg-card relative' : ''}
            `}
          >
            {theme === 'artdeco' && (
              <div className="absolute -top-3 left-8 right-8 h-6 border-l-2 border-r-2 border-t-2 border-primary/30" />
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                  Trauma Analysis & Restoration
                </h2>
                <p className="text-muted-foreground mb-4">
                  Velocity impacts cause micro-tears in soft tissue and spinal misalignment 
                  undetected by standard scans. Pain latency is 24–48 hours.
                </p>
                <p className="text-foreground font-medium">
                  Our protocol isolates these injuries using advanced movement tracking and 
                  restores full functionality.
                </p>
              </div>

              <div className={`
                p-6 rounded-lg
                ${theme === 'brutalist' ? 'border border-accent bg-accent/5' : ''}
                ${theme === 'organic' ? 'bg-accent/10 rounded-2xl' : ''}
                ${theme === 'futuristic' ? 'border border-accent/30 bg-accent/5' : ''}
                ${theme === 'minimal' ? 'border-l-2 border-accent pl-6' : ''}
                ${theme === 'artdeco' ? 'border border-accent/50 bg-accent/5' : ''}
              `}>
                <span className="text-xs uppercase tracking-wider text-accent font-heading block mb-3">
                  /// SYSTEM NOTE
                </span>
                <p className="text-sm text-muted-foreground">
                  Chronic conditions originate from untreated trauma. Immediate intervention 
                  is mandated for optimal biological outcome.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
