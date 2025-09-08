import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Lead Developer",
      company: "TechCorp Solutions",
      period: "2022 - Présent",
      location: "Paris, France",
      description: "Direction d'une équipe de développement pour la création d'applications web complexes. Migration vers une architecture microservices et amélioration des performances de 40%.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      location: "Lyon, France",
      description: "Développement d'applications e-commerce et de plateformes SaaS. Mise en place d'outils CI/CD et optimisation SEO.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Kubernetes"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      location: "Toulouse, France",
      description: "Création d'interfaces utilisateur modernes et responsives. Collaboration étroite avec les équipes design et product.",
      technologies: ["JavaScript", "HTML/CSS", "Sass", "Webpack", "Jest"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">Expérience professionnelle</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-elegant p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-primary mb-2">{exp.title}</h3>
                  <h4 className="text-xl font-semibold mb-3">{exp.company}</h4>
                </div>
                
                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;