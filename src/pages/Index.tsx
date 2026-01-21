import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <ThemeSwitcher />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
