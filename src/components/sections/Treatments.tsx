import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const treatments = [
  {
    name: 'Joint Logic',
    description: 'Restoring mechanical function to impact-stressed joints.',
    icon: '◆',
  },
  {
    name: 'Spinal Core',
    description: 'Realignment of vertebral column and whiplash mitigation.',
    icon: '◆',
  },
  {
    name: 'Neural Net',
    description: 'Decompression therapy for nerve signal obstruction.',
    icon: '◆',
  },
  {
    name: 'Cerebral',
    description: 'Concussion monitoring and cognitive recalibration.',
    icon: '◆',
  },
];

export function Treatments() {
  const { theme } = useTheme();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// INJURY PROTOCOLS
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Targeted Treatments
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                group cursor-pointer overflow-hidden
                ${theme === 'brutalist' ? 'border border-border hover:border-primary bg-card' : ''}
                ${theme === 'organic' ? 'bg-card rounded-3xl shadow-md hover:shadow-xl transition-shadow' : ''}
                ${theme === 'futuristic' ? 'glass rounded-xl hover:bg-primary/5 transition-colors' : ''}
                ${theme === 'minimal' ? 'bg-card hover:bg-secondary transition-colors' : ''}
                ${theme === 'artdeco' ? 'border-2 border-primary/20 hover:border-primary bg-card' : ''}
              `}
            >
              <div className={`
                aspect-square bg-muted relative overflow-hidden
                ${theme === 'organic' ? 'rounded-t-3xl' : ''}
                ${theme === 'futuristic' ? 'rounded-t-xl' : ''}
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-muted-foreground/30 rounded-full flex items-center justify-center">
                    <span className="text-muted-foreground text-2xl">{treatment.icon}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary text-sm">+</span>
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {treatment.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {treatment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
