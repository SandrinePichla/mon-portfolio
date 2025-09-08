const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">À propos de moi</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Avec plus de 5 ans d'expérience dans le développement web, je me spécialise 
              dans la création d'applications modernes et performantes. Ma passion pour 
              l'innovation me pousse à explorer constamment de nouvelles technologies.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mon approche combine excellence technique et sensibilité artistique pour 
              créer des solutions qui ne sont pas seulement fonctionnelles, mais aussi 
              esthétiquement remarquables.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">React / TypeScript</span>
                <span className="text-sm text-muted-foreground">95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[95%]"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Node.js / Express</span>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[90%]"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">UI/UX Design</span>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>

          <div className="card-elegant p-8 text-center">
            <h3 className="text-2xl font-display mb-6">Mes valeurs</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Toujours à la recherche des dernières tendances et technologies
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Qualité</h4>
                <p className="text-sm text-muted-foreground">
                  Code propre, performances optimales et attention aux détails
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Travail d'équipe et communication transparente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;