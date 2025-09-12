const AboutSection = () => {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">À propos de moi</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="card-elegant p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Développeuse web full stack future diplômée (🤞) en 2025, je conçois, développe et maintiens des sites web dynamiques, en alliant performance front-end (HTML, CSS, JavaScript, React) et robustesse back-end (Node.js, Express, MongoDB).
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mon approche est centrée sur l’expérience utilisateur, la qualité du code et la gestion de projet agile.
            </p>            
          </div>

          <div className="card-elegant p-8 text-center">
            <h3 className="text-2xl font-display mb-6">20 ans d'expertise informatique</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Entrepreneuriat & Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Création et gestion d’un cybercafé dès 2003, bien avant l'ère du coworking.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Technicienne et formatrice</h4>
                <p className="text-sm text-muted-foreground">
                  Assemblage de PC, dépannage, maintenance, conseils... Une passion devenue un métier.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Transmission du savoir</h4>
                <p className="text-sm text-muted-foreground">
                  Formation et accompagnement de particuliers à l’informatique, avec pédagogie et patience.
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