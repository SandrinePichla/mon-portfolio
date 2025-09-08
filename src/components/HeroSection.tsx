import { Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary glow-effect">
            <img
              src={profilePhoto}
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-6">
          <span className="gradient-text">Alexandre Dupont</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4">
          Développeur Full Stack & Designer UI/UX
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Passionné par la création d'expériences digitales innovantes, je combine 
          expertise technique et vision créative pour donner vie à des projets web ambitieux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4">
          <button className="px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-primary-foreground hover:shadow-elegant transition-all duration-300 flex items-center justify-center gap-2">
            <Download size={18} />
            Télécharger CV
          </button>
          
          <button className="px-6 py-3 bg-card border border-border rounded-lg font-semibold hover:shadow-card transition-all duration-300">
            Voir mes projets
          </button>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 px-4">
          <a href="https://github.com" className="p-3 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="p-3 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="p-3 bg-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;