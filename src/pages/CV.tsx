import profilePhoto from "@/assets/sandrine_pichla_mini.png";

const CV = () => {
  return (
    <div className="space-y-12 px-4 sm:px-8 lg:px-32 py-16">
      {/* En-tête */}
      <div className="card-elegant text-center py-10 px-6">
        <img
          src={profilePhoto}
          alt="Sandrine PICHLA"
          className="mx-auto mb-6 rounded-full w-32 h-32 object-cover shadow-md"
        />
        <h1 className="text-3xl font-display font-bold mb-2">Sandrine PICHLA</h1>
        <h2 className="text-primary text-xl font-medium mb-4">Informaticienne</h2>
        <p className="text-muted-foreground">
          Developpeuse web
        </p>
        <div className="mt-6 flex justify-center flex-wrap gap-6 text-sm text-muted-foreground">
          <span>
            📍 48 rue des Ecumines 69210 SAINT-PIERRE-LA-PALUD
          </span>
          <span>
            📞 06.72.75.81.48
          </span>
          <span>
            ✉️ sandrinepichl@hotmail.com
          </span>
        </div>
      </div>

      {/* Diplômes */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center">Diplômes</h3>
        <ul className="space-y-4">
          <li>
            <strong>2025 :</strong> En cours de validation du diplôme de Développeur Web (Niveau 5, Bac +2) - OpenClassrooms<br />
            <span className="text-muted-foreground text-sm">
              Front-end (HTML, CSS, JS, React), back-end (NodeJS, Express, MongoDB), gestion de projet, SEO.
            </span>
          </li>
          <li>
            <strong>2021-2024 :</strong> Développement - apprentissage en libre accès (en cours) - OpenClassrooms<br />
            <span className="text-muted-foreground text-sm">
              Front-end (HTML, CSS, JS)
            </span>
          </li>          
          <li>
            <strong>1988 :</strong> BTS Biologie Biochimie – Faculté Catholique de Lyon
          </li>
          <li>
            <strong>1986 :</strong> Baccalauréat D – Notre Dame des Minimes
          </li>
        </ul>
      </div>

      {/* Outils & Langues */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center">Outils</h3>
          <ul className="space-y-2">
            <li>Logiciels bureautiques : +++</li>
            <li>HTML / CSS : +++</li>
            <li>JavaScript : +</li>
            <li>PHP : +</li>
            <li>Photoshop : +++</li>
          </ul>
        </div>
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-display mb-6 text-center">Langues</h3>
          <ul className="space-y-2">
            <li>Anglais courant : +</li>
            <li>Anglais technique : ++</li>
            <li>Allemand scolaire : +</li>
          </ul>
        </div>
      </div>

      {/* Expériences */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center">Expériences</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-primary mb-1">Informatique - TNS</h4>
            <p className="text-sm">
              <strong>2003-2022 – Gérante Lucky Game</strong><br />
              Assemblage PC, formation informatique, maintenance et conseil en gestion patrimoniale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Conseil en Gestion de Patrimoine</h4>
            <p className="text-sm">
              <strong>2009-2023 – DELIMATA CONSEIL & NOVALFI</strong><br />
              Assistante back/middle office : préparation RDV clients, conformité, contrôle des opérations, suivi de portefeuilles.
            </p>
          </div>          
          <div>
            <h4 className="font-semibold text-primary mb-1">Garde d’enfants</h4>
            <p className="text-sm">
              <strong>2001-2005</strong><br />
              Assistante maternelle agréée & garde d’enfants à domicile
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Commerce</h4>
            <p className="text-sm">
              <strong>1992-2001 – ADAPEI de l’Ain</strong><br />
              Commerciale terrain : vente B2B de produits fabriqués par personnes handicapées.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Biochimie</h4>
            <p className="text-sm">
              <strong>1990-1992 – Domilens & Schering Plough</strong><br />
              Laborantine R&D : recherche médicaments, mise en place d’AMM sous supervision ingénieur.
            </p>
          </div>
        </div>
      </div>

      {/* Centres d’intérêt */}
      <div className="card-elegant p-8">
        <h3 className="text-2xl font-display mb-6 text-center">Centres d’intérêt</h3>
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
