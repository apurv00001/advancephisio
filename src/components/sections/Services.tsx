import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Activity, Brain, Bone, FileCheck, HeartPulse, UserCheck, Shield, FileText, Phone, CreditCard } from 'lucide-react';

const injuries = [
  {
    icon: Activity,
    name: 'Whiplash & Neck Injuries',
    description: 'Comprehensive treatment for whiplash, neck strain, and cervical spine injuries from motor vehicle accidents.',
  },
  {
    icon: Bone,
    name: 'Back & Spinal Disc Injuries',
    description: 'Advanced care for herniated discs, sciatica, and lower back trauma caused by collision impact.',
  },
  {
    icon: HeartPulse,
    name: 'Soft Tissue Sprains & Strains',
    description: 'Targeted therapy for muscle tears, ligament damage, and soft tissue trauma.',
  },
  {
    icon: UserCheck,
    name: 'Shoulder, Knee & Limb Injuries',
    description: 'Rehabilitation for extremity injuries including joint damage and mobility restrictions.',
  },
  {
    icon: Brain,
    name: 'Nerve Pain & Headaches',
    description: 'Treatment for post-traumatic headaches, nerve compression, and radiating pain.',
  },
  {
    icon: FileCheck,
    name: 'Concussion & Post-Accident Symptoms',
    description: 'Specialized protocols for concussion recovery and persistent post-accident symptoms.',
  },
];

const recoveryProgram = [
  {
    icon: FileCheck,
    title: 'Comprehensive Injury Assessment',
    description: 'Thorough evaluation to understand your specific injuries and recovery needs.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Treatment Plans',
    description: 'Custom rehabilitation programs designed around your unique condition.',
  },
  {
    icon: HeartPulse,
    title: 'Manual Therapy & Exercises',
    description: 'Hands-on treatment combined with therapeutic exercises for optimal recovery.',
  },
  {
    icon: Activity,
    title: 'Pain Management Strategies',
    description: 'Effective techniques to reduce pain and improve daily function.',
  },
  {
    icon: FileText,
    title: 'Insurance Claim Documentation',
    description: 'We help prepare all necessary documentation for your insurance claim.',
  },
  {
    icon: Phone,
    title: 'Specialist Referrals',
    description: 'Access to our network of specialists when additional care is needed.',
  },
];

const insuranceInfo = [
  { icon: Shield, text: 'Most auto injuries covered by insurance' },
  { icon: FileCheck, text: 'No referral required to begin physiotherapy' },
  { icon: FileText, text: 'We help you prepare claim documentation' },
  { icon: Phone, text: 'Direct support with insurance follow-up' },
];

export function Services() {
  const { theme } = useTheme();

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance', 'executivenavy'].includes(theme);

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
      case 'professionalblue':
        return 'bg-card rounded-lg shadow-sm hover:shadow-md border border-border transition-shadow';
      case 'synthwave':
        return 'border-2 border-primary/30 hover:border-primary bg-card/80';
      case 'darkelegance':
      case 'executivenavy':
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
        {/* Common Injuries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// COMMON INJURIES WE TREAT
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            MVA Injury Specialists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in treating all types of motor vehicle accident injuries with proven rehabilitation protocols.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {injuries.map((injury, index) => (
            <motion.div
              key={injury.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer p-8 ${getCardStyles()}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors ${isDarkTheme ? 'box-glow' : ''}`}>
                <injury.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {injury.name}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {injury.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recovery Program Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// OUR MVA RECOVERY PROGRAM
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Complete Recovery Support
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {recoveryProgram.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-6 ${getCardStyles()}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 ${isDarkTheme ? 'box-glow' : ''}`}>
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-8 md:p-12 ${getCardStyles()} border-2 border-primary/20`}
        >
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Insurance & Claim Assistance
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {insuranceInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <info.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{info.text}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm italic">
            Typical coverage includes Personal Injury Protection (PIP) or auto insurance benefits — ask us how it works.
          </p>
        </motion.div>

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
            Schedule Your Free MVA Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
