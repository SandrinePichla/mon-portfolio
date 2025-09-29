import profilePhoto from "@/assets/sandrine_pichla_mini.webp";

import { useEffect } from "react";

const CV = () => {
  useEffect(() => {
    document.title = "CV - Sandrine Pichla";
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-6 py-12 md:px-24">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-[#f5e9d2]">Sandrine PICHLA</h1>
          <h2 className="text-xl text-[#f5e9d2] mt-1">Développeuse Full Stack</h2>
          <div className="text-sm mt-4 space-y-1">
            <p>📍 48 rue des Ecumines 69210 SAINT-PIERRE-LA-PALUD</p>
            <p>📞 06.72.75.81.48</p>
            <p>✉️ sandrinepichla@hotmail.com</p>
            <p>🔗 <a className="text-blue-400 underline" href="https://taupe-lollipop-8d4dc7.netlify.app" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
          </div>
          <a
            href="/CV_Sandrine_Pichla_Dark.pdf"
            download
            className="inline-block mt-6 px-6 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition"
          >
            Télécharger le PDF
          </a>
        </header>

        {/* Section */}
        <Section title="Diplômes" items={[
          "2025/10 : Développeur Web - OpenClassrooms (HTML, CSS, JS, React, NodeJS, MongoDB, SEO)",
          "2021–2024 : Développement web - OpenClassrooms",
          "1988 : BTS Biologie Biochimie – ESTBB - LYON",
          "1986 : Baccalauréat D – LYON"
        ]} />

        <Section title="Outils techniques" items={[
          "HTML / CSS ★★★★☆", "JavaScript ★★★★☆", "React / Vite ★★★★☆",
          "Node.js / Express ★★★★☆", "MongoDB ★★★★☆", "PHP ★★☆☆☆"
        ]} />

        <Section title="Logiciels" items={[
          "Bureautique, Photoshop, Figma, VSCode, Postman ★★★★☆",
          "Git / GitHub ★★★☆☆"
        ]} />

        <Section title="Méthodes & pratiques" items={[
          "Responsive Design, SEO / Accessibilité, BEM / SCSS ★★★★☆",
          "Agile / Scrum ★★★☆☆, CI/CD (bases) ★★☆☆☆"
        ]} />

        <Section title="Langues" items={[
          "Anglais courant ★★☆☆☆", "Anglais technique ★★★☆☆", "Allemand scolaire ★★☆☆☆"
        ]} />

        <Section title="Expériences" items={[
          "2003–2022 : Gérante Lucky Game – TNS (assemblage, formation, maintenance, conseil)",
          "2009–2023 : Back-office patrimonial – Novalfi / Delimata Conseil",
          "2001–2005 : Assistante maternelle agréée",
          "1992–2001 : Commerciale – ADAPEI de l’Ain",
          "1990–1992 : Laborantine R&D – Domilens & Schering Plough"
        ]} />

        <Section title="Centres d’intérêt" items={[
          "Jeux d’énigmes / escape game • Marche • Raquettes"
        ]} />
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <section>
    <h3 className="text-xl font-semibold text-[#f5e9d2] border-b border-blue-400 pb-1 mb-2">{title}</h3>
    <ul className="space-y-1 text-sm">
      {items.map((item, index) => (
        <li key={index} className="text-white">{item}</li>
      ))}
    </ul>
  </section>
);

export default CV;
