import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const faqs = [
  { question: 'Optimal Initialization Time?', answer: 'Treatment should begin within 72 hours of trauma for optimal results. Early intervention significantly improves recovery outcomes.' },
  { question: 'Referral Required?', answer: 'No referral is necessary. Direct access allows immediate care initiation without delay.' },
  { question: 'Coverage Parameters?', answer: 'We work with most insurance providers and offer complimentary benefits verification before treatment begins.' },
];

export function FAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Data Bank (FAQ)
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                overflow-hidden
                ${theme === 'brutalist' ? 'border border-border' : ''}
                ${theme === 'organic' ? 'bg-card rounded-2xl shadow-sm' : ''}
                ${theme === 'futuristic' ? 'glass rounded-xl' : ''}
                ${theme === 'minimal' ? 'border-b border-border' : ''}
                ${theme === 'artdeco' ? 'border border-primary/20' : ''}
              `}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="font-heading font-medium text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
