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
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project1,
      technologies: ["HTML", "CSS", "Figma", "Github"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Sophie BLUEL Architecte d'interieur",
      description: "En tant que développeur front-end pour l’agence ArchiWebos, je viens en renfort d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.",
      image: project2,
      technologies: ["JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Nina Carducci - photographe",
      description: "Développeur freelance, j’ai accompagné Nina Carducci dans l’optimisation complète de son site vitrine, en améliorant ses performances, son référencement (SEO local et global), son accessibilité, et en corrigeant plusieurs bugs pour garantir une expérience utilisateur fluide et moderne. .",
      image: project3,
      technologies: ["Chrome DevTools", "SEO", "Wave", "Meta"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Kasa",
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project4,
      technologies: ["HTML", "CSS", "Github", "MongoDB"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Mon vieux grimoire",
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project5,
      technologies: ["HTML", "CSS", "Github", "MongoDB"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Qwenta",
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project6,
      technologies: ["HTML", "CSS", "Github", "MongoDB"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "Mon Portfolio",
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project7,
      technologies: ["HTML", "CSS", "Github", "MongoDB"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
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