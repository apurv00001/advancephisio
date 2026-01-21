import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Activity, Brain, Bone, Stethoscope, Zap, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Bone,
    name: 'Orthopedic Therapy',
    description: 'Comprehensive rehabilitation for joint injuries, fractures, and musculoskeletal conditions. We restore mobility and strength through targeted exercises.',
  },
  {
    icon: Brain,
    name: 'Neurological Rehab',
    description: 'Specialized treatment for concussions, nerve damage, and brain injuries. Our protocols accelerate cognitive and motor recovery.',
  },
  {
    icon: Activity,
    name: 'Spinal Care',
    description: 'Advanced spinal decompression and alignment therapy for herniated discs, sciatica, and chronic back pain relief.',
  },
  {
    icon: HeartPulse,
    name: 'Sports Medicine',
    description: 'Return to peak performance with athletic injury treatment, performance optimization, and injury prevention programs.',
  },
  {
    icon: Zap,
    name: 'Pain Management',
    description: 'Multi-modal approaches including manual therapy, electrical stimulation, and therapeutic exercises for chronic pain conditions.',
  },
  {
    icon: Stethoscope,
    name: 'Post-Surgery Recovery',
    description: 'Customized rehabilitation programs following surgical procedures to ensure optimal healing and functional restoration.',
  },
];

export function Services() {
  const { theme } = useTheme();

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance'].includes(theme);

  const getCardStyles = () => {
    switch (theme) {
      case 'brutalist':
        return 'border border-border hover:border-primary bg-card';
      case 'organic':
      case 'wellnessspa':
        return 'bg-card rounded-3xl shadow-md hover:shadow-xl transition-shadow';
      case 'futuristic':
        return 'glass rounded-xl hover:bg-primary/5 transition-colors';
      case 'minimal':
      case 'clinicalmodern':
        return 'bg-card hover:bg-secondary transition-colors border-l-4 border-l-primary';
      case 'artdeco':
        return 'border-2 border-primary/20 hover:border-primary bg-card';
      case 'cyberpunk':
        return 'border border-primary/30 hover:border-primary bg-card hover:box-glow transition-all';
      case 'nordic':
      case 'medicaltrust':
        return 'bg-card rounded-2xl shadow-sm hover:shadow-lg transition-shadow';
      case 'corporate':
        return 'bg-card rounded-lg shadow-sm hover:shadow-md border border-border transition-shadow';
      case 'synthwave':
        return 'border-2 border-primary/30 hover:border-primary bg-card/80';
      case 'darkelegance':
        return 'bg-card rounded-lg border border-border hover:border-accent/40 transition-colors';
      case 'healthvitality':
        return 'bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-primary/5';
      case 'carewarmth':
        return 'bg-card rounded-3xl shadow-sm hover:shadow-lg transition-shadow';
      default:
        return 'bg-card rounded-xl shadow-md';
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Comprehensive Treatment Options
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From injury recovery to performance enhancement, we offer a full spectrum of physical therapy services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer p-8 ${getCardStyles()}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${isDarkTheme ? 'box-glow' : ''}`}>
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.name}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
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
            href="#contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-sm rounded-lg ${isDarkTheme ? 'box-glow' : 'shadow-lg hover:shadow-xl'} transition-shadow`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book an Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}