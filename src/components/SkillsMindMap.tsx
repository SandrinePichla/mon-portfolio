import React, { useEffect, useRef, useState } from 'react';
import { Brain, Code, Database, Palette, Server, Globe, Eye, Wrench, Gauge, Rocket } from 'lucide-react';

const SkillsMindMap = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Centre + échelle
  const [center, setCenter] = useState({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const updateCenter = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        let scale = 1;

        if (window.innerWidth < 1024) {
          // Si on est en dessous du breakpoint desktop
          scale = rect.width / 800;

          // Ne descend jamais trop
          if (scale < 0.75) scale = 0.75;
          if (scale > 1) scale = 1;
        }

        setCenter({
          x: rect.width / 2,
          y: rect.height / 2,
          scale: scale,
        });
      }
    };

    updateCenter();
    window.addEventListener("resize", updateCenter);

    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  const skillsData = {
    center: {
      title: "Compétences",
      icon: Brain,
      color: "primary"
    },
  branches: [
    {
      id: "frontend",
      title: "Frontend",
      icon: Code,
      color: "accent",
      position: { x: 300, y: 0 },
      skills: [
        { name: "React", level: 80, experience: "2 projets" }, // Kasa, Portfolio
        { name: "Vite", level: 80, experience: "2 projets" }, // Kasa, Portfolio        
        { name: "SCSS / BEM", level: 90, experience: "1 projet" }, // Kasa
        { name: "Tailwind CSS", level: 30, experience: "1 projet" }, // Portfolio    
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "secondary",
      position: { x: 212, y: 212 },
      skills: [
        { name: "Node.js", level: 75, experience: "2 projets" }, // Mon Vieux Grimoire, Portfolio backend
        { name: "Express", level: 75, experience: "2 projets" },       
        { name: "Nodemailer / Brevo API", level: 50, experience: "1 projet" } // Portfolio contact
      ]
    },
    {
      id: "database",
      title: "Base de données",
      icon: Database,
      color: "primary",
      position: { x: 0, y: 300 },
      skills: [
         { name: "MongoDB", level: 80, experience: "1 projet" }, // Mon Vieux Grimoire
        { name: "SQL (bases théoriques)", level: 30, experience: "cours" } // connaissances mais pas de projet
      ]
    },
    {
      id: "devops",
      title: "DevOps",
      icon: Rocket,
      color: "accent",
      position: { x: -212, y: 212 },
      skills: [
        { name: "Git / GitHub", level: 90, experience: "6 projets" },
        { name: "Netlify", level: 75, experience: "2 projets" }, // Mon Vieux Grimoire Portfolio
        { name: "Railway", level: 70, experience: "2 projets" }, // Mon Vieux Grimoire, Backend portfolio
        { name: "CI/CD (bases)", level: 60, experience: "6 projets" } // config GitHub Actions
      ]
    },
    {
      id: "mobile",
      title: "Accessibilité, SEO & Performance",
      icon: Eye,
      color: "secondary",
      position: { x: -300, y: 0 },
      skills: [
        { name: "Chrome DevTools", level: 40, experience: "1 projet" },
        { name: "Lighthouse", level: 30, experience: "1 projet" },
        { name: "Meta", level: 80, experience: "1 projet" },
        { name: "Wave", level: 80, experience: "1 projet" }
      ]
    },
    {
      id: "design",
      title: "Design",
      icon: Palette,
      color: "primary",
      position: { x: -212, y: -212 },
      skills: [
        { name: "Figma", level: 85, experience: "4 projets" }, // Booki, Kasa, Qwenta, Portfolio
        { name: "Canva", level: 75, experience: "3 projets" }, // Présentations : Booki, Nina Carducci, Portfolio (charte graphique)
        { name: "Notion (Kanban)", level: 80, experience: "1 projet" }, // Qwenta, Portfolio
        { name: "Miro", level: 70, experience: "1 projet" } // Portfolio (mind map)
      ]
    },
    {
      id: "web",
      title: "Web Technologies",
      icon: Globe,
      color: "accent",
      position: { x: 0, y: -300 },
      skills: [
        { name: "HTML5", level: 90, experience: "6 projets" },
        { name: "CSS3", level: 90, experience: "6 projets" },
        { name: "JavaScript", level: 80, experience: "4 projets" } // Booki, Kasa, Mon Vieux Grimoire, Portfolio
      ]
    },
    {
      id: "tools",
      title: "Outils",
      icon: Wrench,
      color: "secondary",
      position: { x: 212, y: -212 },
      skills: [
        { name: "VSCode", level: 95, experience: "quotidien" },
        { name: "Postman", level: 85, experience: "3 projets" }, // Mon Vieux Grimoire, Sophie BLUEL, Portfolio backend
        { name: "Feedly", level: 80, experience: "1 projet" }, // Qwenta        
      ]
    }
  ]
};

  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">
          Mind Map des Compétences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Colonne gauche : mind map */}
          <div>
            <div
              ref={containerRef}
              className="relative w-full h-[320px] sm:h-[500px] lg:h-[600px] bg-muted/5 rounded-2xl border border-border overflow-hidden"              
            >
              {/* Lignes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {skillsData.branches.map((branch) => (
                  <line
                    key={branch.id}
                    x1={center.x}
                    y1={center.y}
                    x2={center.x + (branch.position.x / 2) * center.scale}
                    y2={center.y + (branch.position.y / 2) * center.scale}
                    stroke={`hsl(var(--${branch.color}))`}
                    strokeWidth="2"
                    strokeDasharray={selectedNode === branch.id ? "0" : "5,5"}
                    className="transition-all duration-300"
                    opacity={selectedNode && selectedNode !== branch.id ? 0.3 : 0.7}
                  />
                ))}
              </svg>

              {/* Nœud central */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: center.x, top: center.y }}
              >
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant cursor-pointer hover:scale-110 transition-all duration-300">
                  <skillsData.center.icon size={32} className="text-primary-foreground" />
                </div>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm font-semibold text-foreground">{skillsData.center.title}</span>
                </div>
              </div>

              {/* Branches */}
              {skillsData.branches.map((branch) => {
                const IconComponent = branch.icon;
                return (
                  <div
                    key={branch.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{
                      left: center.x + (branch.position.x / 2) * center.scale,
                      top: center.y + (branch.position.y / 2) * center.scale,
                    }}
                  >
                    <div
                      className={`rounded-full flex items-center justify-center shadow-card cursor-pointer hover:scale-110 transition-all duration-300 ${
                        selectedNode === branch.id ? "ring-4 ring-primary shadow-elegant" : ""
                      }`}
                      style={{
                        width: `${64 * center.scale}px`,
                        height: `${64 * center.scale}px`,
                        backgroundColor: `hsl(var(--${branch.color}))`,
                        opacity: selectedNode && selectedNode !== branch.id ? 0.5 : 1,
                      }}
                      onClick={() =>
                        setSelectedNode(selectedNode === branch.id ? null : branch.id)
                      }
                    >
                      <IconComponent size={24 * center.scale} className="text-background" />
                    </div>

                    {/* Label sous la bulle */}
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2">
                      <span
                        className="font-medium text-muted-foreground block truncate text-center"
                        style={{
                          fontSize: `${12 * center.scale}px`,   // taille du texte qui suit le scale
                          maxWidth: `${70 * center.scale}px`,   // largeur max proportionnelle
                        }}
                      >
                        {branch.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>            
          </div>

          {/* Colonne droite : panneau de détails */}
          <div className="flex items-center justify-center h-[600px]">
            {selectedNode ? (
              <div className="card-elegant p-6 w-full">
                <div className="flex items-center gap-4 mb-6">
                  {(() => {
                    const branch = skillsData.branches.find(b => b.id === selectedNode);
                    if (!branch) return null;
                    const IconComponent = branch.icon;
                    return (
                      <>
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `hsl(var(--${branch.color}))` }}
                        >
                          <IconComponent size={24} className="text-background" />
                        </div>
                        <h3 className="text-2xl font-display text-primary">{branch.title}</h3>
                      </>
                    );
                  })()}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {skillsData.branches
                    .find(b => b.id === selectedNode)
                    ?.skills.map((skill, index) => (
                      <div key={index} className="bg-muted/20 p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                          <span className="text-xs text-muted-foreground">{skill.experience}</span>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2 mb-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: `hsl(var(--${skillsData.branches.find(b => b.id === selectedNode)?.color}))`
                            }}
                          />
                        </div>
                        
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <p className="text-muted-foreground italic">
                  Cliquez sur les nœuds pour explorer mes compétences en détail
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMindMap;
