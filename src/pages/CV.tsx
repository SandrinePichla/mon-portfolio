import profilePhoto from "@/assets/sandrine_pichla_mini.webp";

const CV = () => {
  return (
    <div className="space-y-12 px-4 sm:px-8 lg:px-32 py-16">
      {/* En-tête */}
      <div className="card-elegant text-center py-10 px-6">
        <img
          src={profilePhoto}
          alt="Sandrine PICHLA"
          className="mx-auto mb-6 rounded-full w-32 h-32 object-cover ring-4 ring-primary shadow-glow"
        />
        <h1 className="text-3xl font-display font-bold mb-2 gradient-text">
          Sandrine PICHLA
        </h1>
        <h2 className="text-primary text-xl font-medium mb-4">
          Développeuse Full Stack
        </h2>        
        <div className="mt-6 flex justify-center flex-wrap gap-6 text-sm text-muted-foreground">
          <span>📍48 rue des Ecumines 69210 SAINT-PIERRE-LA-PALUD</span>
          <span> 📞 06.72.75.81.48</span>
          <span> ✉️ sandrinepichla@hotmail.com</span>
          <span> 🔗 https://taupe-lollipop-8d4dc7.netlify.app</span>
          <a
            href="/cv-print.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
          >
            🖨️ Voir la version imprimable
          </a>
        </div>
      </div>

      {/* Diplômes */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center gradient-text">
          Diplômes
        </h3>
        <ul className="space-y-4 text-muted-foreground">
          <li>
            <strong className="text-foreground">2025/10 :</strong> Développeuse Web (Niveau 5, Bac +2) - OpenClassrooms - Front-end (HTML, CSS, JS, React), back-end (NodeJS, Express, MongoDB), gestion de projet, accessibilité & SEO.            
          </li>
          <li>
            <strong className="text-foreground">2021-2024 :</strong> Développement web - apprentissage en libre accès - OpenClassrooms - Front-end (HTML, CSS, JS)
          </li>
          <li>
            <strong className="text-foreground">1988 :</strong> BTS Biologie Biochimie – ESTBB - LYON
          </li>
          <li>
            <strong className="text-foreground">1986 :</strong> Baccalauréat D – LYON
          </li>
        </ul>
      </div>

      {/* Outils / Logiciels / Méthodes / Langues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bloc 1 */}
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center text-primary">
            Outils techniques
          </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>HTML / CSS : <span className="text-primary">★★★★☆</span></li>
              <li>JavaScript : <span className="text-primary">★★★★☆</span></li>
              <li>React / Vite : <span className="text-primary">★★★★☆</span></li>
              <li>Node.js / Express : <span className="text-primary">★★★★☆</span></li>
              <li>MongoDB : <span className="text-primary">★★★★☆</span></li>
              <li>PHP : <span className="text-primary">★★☆☆☆</span></li>
            </ul>
        </div>

        {/* Bloc 2 */}
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center text-primary">
            Logiciels
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Logiciels bureautiques : <span className="text-primary">★★★★☆</span></li>
            <li>Photoshop : <span className="text-primary">★★★★☆</span></li>
            <li>Figma : <span className="text-primary">★★★★☆</span></li>
            <li>VSCode : <span className="text-primary">★★★★☆</span></li>
            <li>Postman : <span className="text-primary">★★★★☆</span></li>
            <li>Git / GitHub : <span className="text-primary">★★★☆☆</span></li>
          </ul>
        </div>

        {/* Bloc 3 */}
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center text-primary">
            Méthodes & pratiques
          </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Responsive Design : <span className="text-primary">★★★★☆</span></li>
              <li>SEO / Accessibilité : <span className="text-primary">★★★★☆</span></li>
              <li>BEM / SCSS : <span className="text-primary">★★★★☆</span></li>
              <li>Agile / Scrum : <span className="text-primary">★★★☆☆</span></li>
              <li>CI/CD (bases) : <span className="text-primary">★★☆☆☆</span></li>
            </ul>
        </div>

        {/* Bloc 4 */}
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center text-primary">
            Langues
          </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Anglais courant : <span className="text-primary">★★☆☆☆</span></li>
              <li>Anglais technique : <span className="text-primary">★★★☆☆</span></li>
              <li>Allemand scolaire : <span className="text-primary">★★☆☆☆</span></li>
            </ul>
        </div>
      </div>

      {/* Expériences */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center gradient-text">
          Expériences
        </h3>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h4 className="font-semibold text-primary mb-1">
              Informatique - TNS
            </h4>
            <p className="text-sm">
              <strong className="text-foreground">2003-2022 – Gérante Lucky Game</strong>
              <br />
              Assemblage PC, formation informatique bureautique, maintenance PC.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">
              Conseil en Gestion de Patrimoine
            </h4>
            <p className="text-sm">
              <strong className="text-foreground">2009-2023 – DELIMATA CONSEIL & NOVALFI</strong>
              <br />
              Assistante back/middle office : préparation RDV clients, conformité, contrôle des opérations, suivi de portefeuilles.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Garde d’enfants</h4>
            <p className="text-sm">
              <strong className="text-foreground">2001-2005</strong>
              <br />
              Assistante maternelle agréée & garde d’enfants à domicile
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Commerce</h4>
            <p className="text-sm">
              <strong className="text-foreground">1992-2001 – ADAPEI de l’Ain</strong>
              <br />
              Commerciale terrain : vente B2B de produits fabriqués par personnes handicapées.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Biochimie</h4>
            <p className="text-sm">
              <strong className="text-foreground">1990-1992 – Domilens & Schering Plough</strong>
              <br />
              Laborantine R&D : recherche médicaments, mise en place d’AMM sous supervision ingénieur.
            </p>
          </div>
        </div>
      </div>

      {/* Centres d’intérêt */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center gradient-text">
          Centres d’intérêt
        </h3>
        <ul className="flex flex-wrap gap-4 justify-center text-muted-foreground">
          <li>🧩 Jeux d’énigmes / escape game</li>
          <li>🚶‍♀️ Marche à pied</li>
          <li>🎿 Raquettes</li>
        </ul>
      </div>
    </div>
  );
};

export default CV;