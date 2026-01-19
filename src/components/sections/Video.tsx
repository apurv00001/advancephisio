import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function Video() {
  const { theme } = useTheme();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading">
            TEC — 00:04:23
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className={`
            relative overflow-hidden group cursor-pointer
            ${theme === 'brutalist' ? 'border border-border' : ''}
            ${theme === 'organic' ? 'rounded-3xl shadow-xl' : ''}
            ${theme === 'futuristic' ? 'glass rounded-2xl' : ''}
            ${theme === 'minimal' ? 'border border-border' : ''}
            ${theme === 'artdeco' ? 'border-2 border-primary/30' : ''}
          `}>
            <div className="aspect-video bg-card relative">
              {/* Video placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-heading font-bold text-primary mb-2">
                  <span className="text-accent">/</span>ADVANCE
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Physical Therapy
                </p>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center cursor-pointer
                    ${theme === 'brutalist' ? 'border-2 border-primary bg-primary/10 group-hover:bg-primary/20' : ''}
                    ${theme === 'organic' ? 'bg-primary shadow-lg group-hover:scale-110 transition-transform' : ''}
                    ${theme === 'futuristic' ? 'glass border border-primary/50 group-hover:bg-primary/20' : ''}
                    ${theme === 'minimal' ? 'border-2 border-foreground group-hover:bg-foreground group-hover:text-background' : ''}
                    ${theme === 'artdeco' ? 'border-2 border-primary bg-primary/10 group-hover:bg-primary/30' : ''}
                  `}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className={`w-8 h-8 ml-1 ${theme === 'organic' ? 'text-primary-foreground' : 'text-primary'}`} />
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <Play className="w-4 h-4" />
                  <span>0:00 / 6:30</span>
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
