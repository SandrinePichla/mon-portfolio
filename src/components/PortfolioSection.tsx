import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/booki.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const PortfolioSection = () => {
  // ====== SIMULATION D'APPEL API POUR RÉCUPÉRER LES PROJETS ======
  // 
  // Voici comment on ferait un appel API réel pour récupérer les projets :
  /*
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Appel API vers votre backend
        const response = await fetch('/api/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Si auth nécessaire
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data.projects || []);
        
        // Ou avec Supabase :
        // const { data, error } = await supabase
        //   .from('projects')
        //   .select('*')
        //   .order('created_at', { ascending: false });
        // 
        // if (error) throw error;
        // setProjects(data);
        
      } catch (err) {
        console.error('Erreur lors du chargement des projets:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Gestion des états de chargement
  if (loading) {
    return (
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Chargement des projets...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-destructive">Erreur : {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Réessayer
          </button>
        </div>
      </section>
    );
  }
  */
  // ================================================================

  // DONNÉES STATIQUES (pour la démo)
  const projects = [
    {
      title: "BOOKI Starter Code",
      description: "Développement d'un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
      image: project1,
      technologies: ["HTML", "CSS", "Github"],
      liveLink: "https://sandrinepichla.github.io/booki-starter-code/",
      githubLink: "https://github.com/SandrinePichla/booki-starter-code"
    },
    {
      title: "E-Commerce Platform",
      description: "Solution e-commerce complète avec gestion des stocks, paiements sécurisés et interface d'administration avancée. Optimisée pour les performances et le SEO.",
      image: project2,
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Application mobile de gestion de tâches avec synchronisation cloud, notifications push et collaboration en équipe. Interface élégante et intuitive.",
      image: project3,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">Portfolio</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets récents, alliant innovation technique et design soigné.
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
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

        {/* Additional Projects Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-display text-center mb-8">Autres projets</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elegant p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{i}</span>
                </div>
                <h4 className="font-semibold mb-2">Projet {i}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Description courte du projet avec les technologies utilisées.
                </p>
                <a href="#" className="text-primary hover:text-primary-glow transition-colors">
                  Voir plus →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;