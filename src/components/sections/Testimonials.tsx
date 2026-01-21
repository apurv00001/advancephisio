import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const testimonials = [
  {
    name: 'Sarah M.',
    quote: 'After my car accident, I thought I would never recover. The team here gave me my life back. Incredible care and results!',
    rating: 5,
    treatment: 'Spinal Rehabilitation',
  },
  {
    name: 'James T.',
    quote: 'Professional, caring, and effective. My chronic pain is finally manageable thanks to their personalized treatment plan.',
    rating: 5,
    treatment: 'Joint Therapy',
  },
  {
    name: 'Maria L.',
    quote: 'The concussion protocol here is world-class. I was back to work in half the time my doctor expected.',
    rating: 5,
    treatment: 'Concussion Recovery',
  },
  {
    name: 'David K.',
    quote: 'State-of-the-art facilities and a team that truly cares. I recommend them to everyone I know.',
    rating: 5,
    treatment: 'Neural Therapy',
  },
  {
    name: 'Emily R.',
    quote: 'From the first consultation to my final session, every step was handled with expertise and compassion.',
    rating: 5,
    treatment: 'Full Recovery Program',
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function Testimonials() {
  const { theme } = useTheme();
  const { count, ref: counterRef } = useCountUp(25000, 2500);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDarkTheme = ['brutalist', 'futuristic', 'artdeco', 'cyberpunk', 'synthwave', 'darkelegance'].includes(theme);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyles = () => {
    switch (theme) {
      case 'brutalist':
        return 'border border-border bg-card';
      case 'organic':
      case 'wellnessspa':
        return 'bg-card rounded-3xl shadow-lg';
      case 'futuristic':
        return 'glass rounded-xl';
      case 'minimal':
      case 'clinicalmodern':
        return 'bg-card border border-border';
      case 'artdeco':
        return 'border-2 border-primary/30 bg-card';
      case 'cyberpunk':
        return 'border border-primary/40 bg-card';
      case 'nordic':
      case 'medicaltrust':
        return 'bg-card rounded-2xl shadow-md';
      case 'corporate':
        return 'bg-card rounded-lg shadow-sm border border-border';
      case 'synthwave':
        return 'border-2 border-primary/40 bg-card/90';
      case 'darkelegance':
        return 'bg-card rounded-lg border border-accent/20';
      case 'healthvitality':
        return 'bg-card rounded-2xl shadow-lg border border-primary/10';
      case 'carewarmth':
        return 'bg-card rounded-3xl shadow-md border border-primary/10';
      default:
        return 'bg-card rounded-xl shadow-md';
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-heading block mb-3">
            /// PATIENT SUCCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their health with our expert care.
          </p>
        </motion.div>

        {/* Counter Section */}
        <motion.div
          ref={counterRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-block px-12 py-8 ${getCardStyles()}`}>
            <div className={`text-6xl md:text-7xl font-heading font-bold text-primary ${isDarkTheme ? 'text-glow' : ''}`}>
              {count.toLocaleString()}+
            </div>
            <p className="text-muted-foreground mt-2 text-lg">
              Patients Successfully Treated
            </p>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`p-8 ${getCardStyles()} relative`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}