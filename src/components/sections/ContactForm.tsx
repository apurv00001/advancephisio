import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';
import { Send, Shield, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance'].includes(theme);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const getInputStyles = () => {
    const base = 'w-full px-4 py-3 bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all';
    switch (theme) {
      case 'organic':
      case 'wellnessspa':
      case 'carewarmth':
        return `${base} rounded-2xl`;
      case 'futuristic':
        return `${base} rounded-xl glass`;
      case 'minimal':
      case 'clinicalmodern':
        return `${base} rounded-sm`;
      case 'artdeco':
      case 'brutalist':
        return `${base} rounded-none`;
      case 'nordic':
      case 'medicaltrust':
        return `${base} rounded-xl`;
      case 'corporate':
        return `${base} rounded-md`;
      case 'healthvitality':
        return `${base} rounded-xl`;
      default:
        return `${base} rounded-lg`;
    }
  };

  const getButtonStyles = () => {
    const base = 'w-full py-4 bg-primary text-primary-foreground font-heading uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all';
    switch (theme) {
      case 'organic':
      case 'wellnessspa':
      case 'carewarmth':
        return `${base} rounded-2xl hover:shadow-lg`;
      case 'futuristic':
      case 'cyberpunk':
      case 'synthwave':
        return `${base} rounded-xl ${isDarkTheme ? 'box-glow' : ''}`;
      case 'minimal':
      case 'clinicalmodern':
        return `${base} rounded-sm hover:bg-primary/90`;
      case 'artdeco':
      case 'brutalist':
        return `${base} rounded-none`;
      case 'nordic':
      case 'medicaltrust':
        return `${base} rounded-xl hover:shadow-md`;
      case 'healthvitality':
        return `${base} rounded-xl hover:shadow-lg`;
      default:
        return `${base} rounded-lg hover:shadow-md`;
    }
  };

  const getCardStyles = () => {
    switch (theme) {
      case 'brutalist':
        return 'border border-border bg-card';
      case 'organic':
      case 'wellnessspa':
        return 'bg-card rounded-3xl shadow-xl';
      case 'futuristic':
        return 'glass rounded-2xl';
      case 'minimal':
      case 'clinicalmodern':
        return 'bg-card border border-border';
      case 'artdeco':
        return 'border-2 border-primary/30 bg-card';
      case 'cyberpunk':
        return 'border border-primary/40 bg-card';
      case 'nordic':
      case 'medicaltrust':
        return 'bg-card rounded-2xl shadow-lg';
      case 'corporate':
        return 'bg-card rounded-lg shadow-md border border-border';
      case 'synthwave':
        return 'border-2 border-primary/40 bg-card/90';
      case 'darkelegance':
        return 'bg-card rounded-lg border border-accent/20';
      case 'healthvitality':
        return 'bg-card rounded-2xl shadow-xl';
      case 'carewarmth':
        return 'bg-card rounded-3xl shadow-lg';
      default:
        return 'bg-card rounded-xl shadow-lg';
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
              /// GET STARTED
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Schedule Your Appointment
            </h2>
            <p className="text-muted-foreground">
              Take the first step towards recovery. Our team is ready to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 md:p-12 ${getCardStyles()}`}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  We've received your message and will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={getInputStyles()}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={getInputStyles()}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={getInputStyles()}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How Can We Help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your condition or what services you're interested in..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${getInputStyles()} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={getButtonStyles()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Book Appointment
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Your information is secure and protected</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}