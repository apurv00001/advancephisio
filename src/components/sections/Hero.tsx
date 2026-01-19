import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background decorations based on theme */}
      {theme === 'brutalist' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-accent" />
        </div>
      )}
      
      {theme === 'organic' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'futuristic' && (
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
        </div>
      )}

      {theme === 'artdeco' && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="artdeco-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" className="text-primary" />
            </pattern>
            <rect width="100" height="100" fill="url(#artdeco-pattern)" />
          </svg>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading">
            + SYSTEM STATUS: ONLINE
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-foreground">Advanced</span>
              <br />
              <span className="text-primary text-glow">Trauma Recovery.</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Initiating expedited healing protocols for motor vehicle accident trauma. 
              We utilize data-driven diagnostics and specialized physical therapy.
            </p>

            <motion.button
              className="px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider rounded-lg text-sm box-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Recovery Sequence
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-card rounded-lg border border-border overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 border-2 border-current rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm uppercase tracking-wider">Trauma Recovery Visualization</p>
                </div>
              </div>
              {/* Scan line effect for brutalist theme */}
              {theme === 'brutalist' && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-1 bg-primary/30 animate-scan-line" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
