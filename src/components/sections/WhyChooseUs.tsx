import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { AlertTriangle, TrendingDown, Activity, FileText, Clock, Users } from 'lucide-react';

const delayRisks = [
  {
    icon: AlertTriangle,
    title: 'Persistent Pain',
    description: 'Untreated injuries can develop into chronic pain conditions that are harder to resolve.',
  },
  {
    icon: TrendingDown,
    title: 'Restricted Movement',
    description: 'Delayed treatment often leads to scar tissue formation and reduced range of motion.',
  },
  {
    icon: Activity,
    title: 'Compensatory Injuries',
    description: 'Your body compensates for injuries, creating new problems in other areas.',
  },
  {
    icon: FileText,
    title: 'Claim Processing Delays',
    description: 'Late medical documentation can complicate your insurance claim process.',
  },
  {
    icon: Clock,
    title: '20+ Years Experience',
    description: 'Our team specializes in MVA injuries with proven recovery outcomes.',
  },
  {
    icon: Users,
    title: 'Full Support Team',
    description: 'We handle your care and support your claim so you can focus on healing.',
  },
];

export function WhyChooseUs() {
  const { theme } = useTheme();

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance', 'executivenavy'].includes(theme);

  const getCardStyles = () => {
    switch (theme) {
      case 'brutalist':
        return 'border border-border hover:border-primary bg-card p-6';
      case 'organic':
      case 'wellnessspa':
        return 'bg-card rounded-3xl shadow-md hover:shadow-xl transition-shadow p-6';
      case 'futuristic':
        return 'glass rounded-xl hover:bg-primary/5 transition-colors p-6';
      case 'minimal':
      case 'clinicalmodern':
        return 'bg-card hover:bg-secondary transition-colors p-6 border-b border-border';
      case 'artdeco':
        return 'border-2 border-primary/20 hover:border-primary bg-card p-6';
      case 'cyberpunk':
        return 'border border-primary/30 hover:border-primary bg-card hover:box-glow transition-all p-6';
      case 'nordic':
      case 'medicaltrust':
        return 'bg-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-6';
      case 'corporate':
        return 'bg-card rounded-lg shadow-sm hover:shadow-md border border-border transition-shadow p-6';
      case 'synthwave':
        return 'border-2 border-primary/30 hover:border-primary bg-card/80 p-6';
      case 'darkelegance':
        return 'bg-card rounded-lg border border-border hover:border-accent/40 transition-colors p-6';
      case 'healthvitality':
        return 'bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-primary/5';
      case 'carewarmth':
        return 'bg-card rounded-3xl shadow-sm hover:shadow-lg transition-shadow p-6';
      default:
        return 'bg-card rounded-xl shadow-md p-6';
    }
  };

  const getIconStyles = () => {
    switch (theme) {
      case 'brutalist':
      case 'cyberpunk':
      case 'synthwave':
        return 'w-12 h-12 text-primary';
      case 'organic':
      case 'wellnessspa':
        return 'w-12 h-12 text-primary/80';
      case 'artdeco':
        return 'w-12 h-12 text-primary';
      default:
        return 'w-12 h-12 text-primary';
    }
  };

  return (
    <section id="why-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* What Happens After Injury */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// WHAT HAPPENS AFTER YOUR INJURY
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Early Treatment Matters
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Motor vehicle collisions can cause strain, pain, and dysfunction in joints, muscles, spine, and nerves. 
            Often pain doesn't begin immediately — symptoms may surface within 24–48 hours. 
            Early physiotherapy not only reduces pain but prevents chronic complications and functional loss.
          </p>
        </motion.div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`mb-16 p-6 md:p-8 border-2 border-accent/50 bg-accent/5 rounded-lg`}
        >
          <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-accent" />
            Delaying treatment can lead to:
          </h3>
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Persistent pain
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Restricted movement
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Chronic compensatory injuries
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Delays in insurance claim processing
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-heading font-bold text-foreground">
            Why Choose Advance Physical Therapy
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delayRisks.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${getCardStyles()}`}
            >
              <div className={`mb-4 ${isDarkTheme ? 'text-glow' : ''}`}>
                <reason.icon className={getIconStyles()} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#services"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-sm rounded-lg ${isDarkTheme ? 'box-glow' : 'shadow-lg hover:shadow-xl'} transition-shadow`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Treatment Programs
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}