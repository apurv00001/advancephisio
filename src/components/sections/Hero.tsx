import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import heroImage from '@/assets/hero-accident.jpg';

export function Hero() {
  const { theme } = useTheme();

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance'].includes(theme);

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

      {theme === 'cyberpunk' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px]" />
        </div>
      )}

      {theme === 'synthwave' && (
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[100px]" />
        </div>
      )}

      {theme === 'nordic' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl" />
        </div>
      )}

      {theme === 'darkelegance' && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
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
              <span className={`text-primary ${isDarkTheme ? 'text-glow' : ''}`}>Trauma Recovery.</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Initiating expedited healing protocols for motor vehicle accident trauma. 
              We utilize data-driven diagnostics and specialized physical therapy.
            </p>

            <motion.button
              className={`px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider rounded-lg text-sm ${isDarkTheme ? 'box-glow' : 'shadow-lg hover:shadow-xl'} transition-shadow`}
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
            <div className={`
              aspect-[4/3] rounded-lg border border-border overflow-hidden relative
              ${theme === 'organic' ? 'rounded-3xl shadow-2xl' : ''}
              ${theme === 'futuristic' ? 'rounded-2xl' : ''}
              ${theme === 'artdeco' ? 'border-2 border-primary/30' : ''}
              ${theme === 'cyberpunk' ? 'border-primary/50' : ''}
              ${theme === 'nordic' ? 'rounded-2xl shadow-xl' : ''}
              ${theme === 'corporate' ? 'rounded-lg shadow-lg' : ''}
              ${theme === 'synthwave' ? 'border-2 border-primary/40' : ''}
              ${theme === 'darkelegance' ? 'rounded-lg border-accent/20' : ''}
            `}>
              <img 
                src={heroImage} 
                alt="Trauma recovery visualization" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Scan line effect for tech themes */}
              {['brutalist', 'cyberpunk', 'synthwave'].includes(theme) && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
