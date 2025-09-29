// src/CVpdf.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
// Convertis ton .webp en .jpg ou .png puis importe-le :
import profilePhoto from "@/assets/sandrine_pichla_mini.webp";

// (Optionnel) Police plus lisible que Helvetica
// Font.register({
//   family: "Inter",
//   fonts: [
//     { src: "/fonts/Inter-Regular.ttf", fontWeight: 400 },
//     { src: "/fonts/Inter-SemiBold.ttf", fontWeight: 600 },
//     { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
//   ],
// });

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    // fontFamily: "Inter",
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: { alignItems: "center", marginBottom: 16 },
  name: { fontSize: 20, fontWeight: 700, marginTop: 8 },
  role: { fontSize: 12, marginTop: 2 },
  contact: { marginTop: 8, fontSize: 10, textAlign: "center" },

  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  row2: { flexDirection: "row", gap: 18 },
  col: { flex: 1 },

  pillList: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  pill: {
    borderWidth: 1,
    borderColor: "#d0d5dd",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 10,
  },

  item: { marginBottom: 6 },
  itemTitle: { fontWeight: 600 },
  small: { fontSize: 10, color: "#475467" },

  photo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    objectFit: "cover",
    borderWidth: 2,
    borderColor: "#2563eb", // bleu discret
  },

  // Empêche un titre isolé en bas de page
  avoidBreak: { breakInside: "avoid" },

  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 9,
    color: "#98a2b3",
    textAlign: "center",
  },
});

const CVpdf = () => (
  <Document title="CV - Sandrine PICHLA" author="Sandrine Pichla">
    <Page size="A4" style={styles.page}>
      {/* En-tête */}
      <View style={styles.header}>
        <Image src={profilePhoto} style={styles.photo} />
        <Text style={styles.name}>Sandrine PICHLA</Text>
        <Text style={styles.role}>Développeuse Full Stack</Text>
        <Text style={styles.contact}>
          📍 48 rue des Écumines, 69210 Saint-Pierre-la-Palud {"\n"}
          📞 06 72 75 81 48 • ✉️ sandrinepichla@hotmail.com
        </Text>
      </View>

      {/* Diplômes */}
      <View style={[styles.section, styles.avoidBreak]}>
        <Text style={styles.sectionTitle}>Diplômes</Text>
        <View style={styles.item}>
          <Text>
            <Text style={styles.itemTitle}>2025/10 :</Text> Développeur Web (Niveau 5, Bac +2) — OpenClassrooms
          </Text>
          <Text style={styles.small}>
            Front-end (HTML, CSS, JS, React), back-end (Node.js, Express,
            MongoDB), gestion de projet, accessibilité & SEO.
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            <Text style={styles.itemTitle}>2021-2024 :</Text> Développement —
            apprentissage en libre accès (en cours) — OpenClassrooms
          </Text>
          <Text style={styles.small}>Front-end (HTML, CSS, JS)</Text>
        </View>
        <View style={styles.item}>
          <Text>
            <Text style={styles.itemTitle}>1988 :</Text> BTS Biologie Biochimie
            — ESTBB - LYON
          </Text>
        </View>
        <View style={styles.item}>
          <Text>
            <Text style={styles.itemTitle}>1986 :</Text> Baccalauréat D — LYON
          </Text>
        </View>
      </View>

      {/* Compétences (2 colonnes) */}
      <View style={[styles.section, styles.row2]}>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>Outils techniques</Text>
          <View style={styles.pillList}>
            <Text style={styles.pill}>HTML / CSS ★★★★☆</Text>
            <Text style={styles.pill}>JavaScript ★★★★☆</Text>
            <Text style={styles.pill}>React / Vite ★★★★☆</Text>
            <Text style={styles.pill}>Node.js / Express ★★★★☆</Text>
            <Text style={styles.pill}>MongoDB ★★★★☆</Text>
            <Text style={styles.pill}>PHP ★★☆☆☆</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>Logiciels</Text>
          <View style={styles.pillList}>
            <Text style={styles.pill}>Bureautique ★★★★☆</Text>
            <Text style={styles.pill}>Photoshop ★★★★☆</Text>
            <Text style={styles.pill}>Figma ★★★★☆</Text>
            <Text style={styles.pill}>VS Code ★★★★☆</Text>
            <Text style={styles.pill}>Postman ★★★★☆</Text>
            <Text style={styles.pill}>Git / GitHub ★★★☆☆</Text>
          </View>
        </View>
      </View>

      <View style={[styles.section, styles.row2]}>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>Méthodes & pratiques</Text>
          <View style={styles.pillList}>
            <Text style={styles.pill}>Responsive ★★★★☆</Text>
            <Text style={styles.pill}>SEO / A11y ★★★★☆</Text>
            <Text style={styles.pill}>BEM / SCSS ★★★★☆</Text>
            <Text style={styles.pill}>Agile / Scrum ★★★☆☆</Text>
            <Text style={styles.pill}>CI/CD (bases) ★★☆☆☆</Text>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.sectionTitle}>Langues</Text>
          <View style={styles.pillList}>
            <Text style={styles.pill}>Anglais courant ★★☆☆☆</Text>
            <Text style={styles.pill}>Anglais technique ★★★☆☆</Text>
            <Text style={styles.pill}>Allemand scolaire ★★☆☆☆</Text>
          </View>
        </View>
      </View>

      {/* Expériences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expériences</Text>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Informatique — TNS</Text>
          <Text style={styles.small}>
            2003-2022 — Gérante Lucky Game • Assemblage PC, formation
            informatique, maintenance et conseil en gestion patrimoniale.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>
            Conseil en Gestion de Patrimoine
          </Text>
          <Text style={styles.small}>
            2009-2023 — Delimata Conseil & Novalfi • Assistante back/middle
            office : préparation RDV clients, conformité, contrôle des
            opérations, suivi de portefeuilles.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Garde d’enfants</Text>
          <Text style={styles.small}>
            2001-2005 • Assistante maternelle agréée & garde d’enfants à
            domicile.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Commerce</Text>
          <Text style={styles.small}>
            1992-2001 — ADAPEI de l’Ain • Commerciale terrain : vente B2B de
            produits fabriqués par des personnes handicapées.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemTitle}>Biochimie</Text>
          <Text style={styles.small}>
            1990-1992 — Domilens & Schering Plough • Laborantine R&D :
            recherche médicaments, mise en place d’AMM sous supervision
            ingénieur.
          </Text>
        </View>
      </View>

      {/* Centres d’intérêt */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Centres d’intérêt</Text>
        <Text>🧩 Jeux d’énigmes / escape game • 🚶‍♀️ Marche • 🎿 Raquettes</Text>
      </View>

      <Text style={styles.footer}>
        CV • Sandrine Pichla — Généré avec react-pdf — {new Date().getFullYear()}
      </Text>
    </Page>
  </Document>
);

export default CVpdf;
