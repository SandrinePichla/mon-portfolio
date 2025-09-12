import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsMindMap from '@/components/SkillsMindMap';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'mindmap', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />

      {/* Main Content */}
      <main className="md:ml-64">
        <section id="home" className="py-12">
          <HeroSection onScrollToPortfolio={() => scrollToSection('portfolio')} />
        </section>

        <section id="about" className="py-12">
          <AboutSection />
        </section>
        
        <section id="mindmap" className="py-12">
          <SkillsMindMap />
        </section>

        <section id="portfolio" className="py-12">
          <PortfolioSection />
        </section>

        <section id="contact" className="py-12">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="md:ml-64 py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Sandrine PICHLA. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;