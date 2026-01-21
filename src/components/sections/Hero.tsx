import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronDown, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-accident.jpg';

export function Hero() {
  const { theme } = useTheme();

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance', 'executivenavy'].includes(theme);

  return (
    <section id="hero" className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Motor Vehicle Accident Recovery" 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDarkTheme 
            ? 'bg-gradient-to-r from-background/95 via-background/85 to-background/70' 
            : 'bg-gradient-to-r from-background/90 via-background/80 to-background/60'
        }`} />
      </div>

      {/* Theme-specific decorations */}
      {theme === 'futuristic' && (
        <div className="absolute inset-0 z-1">
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        </div>
      )}

      {theme === 'cyberpunk' && (
        <div className="absolute inset-0 z-1">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
        </div>
      )}

      {theme === 'synthwave' && (
        <div className="absolute inset-0 z-1">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/20 via-accent/10 to-transparent" />
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
            + MOTOR VEHICLE ACCIDENT REHABILITATION
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            <span className="text-foreground">Injured in a Motor Vehicle Accident?</span>
            <br />
            <span className={`text-primary ${isDarkTheme ? 'text-glow' : ''}`}>Get Fast, Effective Recovery.</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-4 max-w-xl">
            Expert physiotherapy for MVA injuries. No referral needed.
          </p>
          <p className="text-accent font-medium text-lg mb-8 max-w-xl">
            Insurance support and claim help available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              className={`px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider rounded-lg text-sm text-center ${isDarkTheme ? 'box-glow' : 'shadow-lg hover:shadow-xl'} transition-shadow`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Appointment
            </motion.a>
            <motion.a
              href="tel:+1234567890"
              className="px-8 py-4 border border-border text-foreground font-heading uppercase tracking-wider rounded-lg text-sm hover:bg-secondary transition-colors text-center flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Call Now for Same-Day Availability
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#why-us"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
