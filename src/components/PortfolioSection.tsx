import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project1.webp';
import project2 from '@/assets/project2.webp';
import project3 from '@/assets/project3.webp';
import project4 from '@/assets/project4.webp';
import project5 from '@/assets/project5.webp';
import project6 from '@/assets/project6.webp';
import project7 from '@/assets/project7.webp';

const PortfolioSection = () => {
  
  const projects = [
    {
      title: "BOOKI",
      description: "J’ai intégré le site responsive Booki, une plateforme fictive de réservation d’hébergements et d’activités, à partir de maquettes Figma. Ce projet m’a permis d’approfondir mes compétences en HTML sémantique, CSS responsive et gestion de version avec Git/GitHub, ",
      image: project1,
      technologies: ["HTML", "CSS", "Figma", "Github"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Sophie BLUEL Architecte d'interieur",
      description: "En tant que développeur front-end, je suis venue en renfort d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.. Ma mission a été de développer des fonctionnalités dynamiques en JavaScript : galerie de projets, authentification administrateur, et modale d’upload d’images",
      image: project2,
      technologies: ["JavaScript", "Kanban", "API Rest"],
      liveLink: "https://sandrinepichla.github.io/Portfolio-architecte-sophie-bluel-master/FrontEnd/",
      githubLink: "https://github.com/SandrinePichla/Portfolio-architecte-sophie-bluel-master "
    },
    {
      title: "Nina Carducci - photographe",
      description: "Développeur freelance, j’ai accompagné Nina Carducci dans l’optimisation complète de son site vitrine, en améliorant ses performances, son référencement (SEO local et global), son accessibilité, et en corrigeant plusieurs bugs pour garantir une expérience utilisateur fluide et moderne. .",
      image: project3,
      technologies: ["Chrome DevTools", "SEO", "Wave", "Meta"],
      liveLink: "https://sandrinepichla.github.io/Nina-Carducci-Dev-master/",
      githubLink: "https://github.com/SandrinePichla/Nina-Carducci-Dev-master"
    },
    {
      title: "Kasa",
      description: "J’ai participé à la refonte du site de Kasa, une plateforme de location d’hébergements, en développant toute l’interface utilisateur en React à partir de maquettes Figma responsives. Mon travail a inclus la mise en place des composants dynamiques, du routing, des animations CSS et du style via SASS, pour un rendu fidèle, accessible et fluide.",
      image: project4,
      technologies: ["React", "React Router", "SASS ", "BEM"],
      liveLink: "https://sandrinepichla.github.io/kasa/",
      githubLink: "https://github.com/SandrinePichla/kasa"
    },
    {
      title: "Mon vieux grimoire",
      description: "J’ai développé l’API complète du site Mon Vieux Grimoire, une plateforme de notation de livres. À partir des spécifications techniques fournies, j’ai conçu un back-end sécurisé et performant en Node.js, avec gestion des utilisateurs, des livres et des notes, ainsi qu’un système d’optimisation automatique des images uploadées.",
      image: project5,
      technologies: ["Node.js / Express ", "MongoDB", "Bcrypt", "Postman"],
      liveLink: "https://flourishing-kitsune-ca5c55.netlify.app/",
      githubLink: "https://github.com/SandrinePichla/mon_vieux_grimoire "
    },
    {
      title: "Qwenta",
      description: "J’ai pris en charge la gestion de projet du site Menu Maker pour le client Qwenta, un outil destiné aux restaurateurs pour créer leurs menus en ligne. En l’absence du Product Owner, j’ai rédigé l’ensemble des spécifications techniques (analyse de la maquette Figma), structuré un Kanban complet dans Notion, et mis en place une veille technologique ciblée pour orienter les choix de stack. Ce projet m’a permis d’endosser un rôle de chef de projet digital en autonomie.",
      image: project6,
      technologies: ["Notion", "Feedly", "Agile/Scrum"],          
    },
    {
      title: "Mon Portfolio",
      description: "J’ai conçu et développé mon portfolio professionnel en ligne, un site web full stack léger destiné à présenter mon profil de développeuse, mes compétences et mes projets. Ce projet m’a permis de travailler la mise en page et le styling côté front-end, tout en intégrant une partie back-end simple pour gérer le formulaire de contact. J’ai ainsi pu valoriser mon autonomie, ma capacité à relier un front statique à un service backend, et à livrer un produit responsive et accessible.",
      image: project7,
      technologies: ["React", "Vite", "CSS", "Node.js/Express", "Netlify", "Railway"],
      liveLink: "https://sandrinepichla.github.io/mon-portfolio/",
      githubLink: "https://github.com/SandrinePichla/mon-portfolio "
    },

  ];

  return (
    <section className="px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">Projets</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents, alliant innovation technique et design soigné.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="relative w-full h-72 rounded-xl overflow-hidden border-4 border-primary shadow-lg shadow-primary/50 flex items-center justify-center bg-background">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[85%] max-w-[90%] object-contain rounded-lg"
                />                
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display text-primary mb-4">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.liveLink}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-primary rounded-lg text-primary-foreground font-medium hover:shadow-elegant transition-all duration-300 text-sm md:text-base"
                  >
                    <ExternalLink size={16} />
                    Voir le projet
                  </a>
                  
                  <a
                    href={project.githubLink}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-card border border-border rounded-lg font-medium hover:shadow-card transition-all duration-300 text-sm md:text-base"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PortfolioSection;