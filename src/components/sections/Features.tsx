import { motion } from 'framer-motion';
import { Download, Stethoscope, Scan, Network } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const features = [
  { icon: Download, label: 'No-Cost Medical', description: 'Free initial consultation' },
  { icon: Stethoscope, label: 'Medical Consult', description: 'Expert diagnosis' },
  { icon: Scan, label: 'Injury Scan', description: 'Advanced imaging' },
  { icon: Network, label: 'Specialist Net', description: 'Connected care' },
];

export function Features() {
  const { theme } = useTheme();

  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                text-center p-6 rounded-lg transition-all cursor-pointer group
                ${theme === 'brutalist' ? 'border border-border hover:border-primary hover:box-glow' : ''}
                ${theme === 'organic' ? 'bg-card hover:bg-primary/10 rounded-2xl shadow-sm' : ''}
                ${theme === 'futuristic' ? 'glass hover:bg-primary/10' : ''}
                ${theme === 'minimal' ? 'hover:bg-secondary border-b-2 border-transparent hover:border-foreground' : ''}
                ${theme === 'artdeco' ? 'border border-primary/30 hover:border-primary bg-card' : ''}
              `}
            >
              <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">
                {feature.label}
              </h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
