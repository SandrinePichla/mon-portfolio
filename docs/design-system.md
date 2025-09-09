# 🎨 Design System - Portfolio

Ce document décrit la charte graphique, les composants et les variables CSS utilisées dans ce portfolio React.

---

## 🎨 Palette de couleurs

| Nom                   | Variable CSS                 | Exemple               |
|------------------------|------------------------------|------------------------|
| Fond principal         | `--background`               | `bg-background`        |
| Texte principal        | `--foreground`               | `text-foreground`      |
| Primaire (bleu clair) | `--primary`                  | `text-primary`         |
| Accent (jaune)         | `--accent`                   | `bg-accent`            |
| Secondaire (violet)    | `--secondary`                | `text-secondary`       |
| Fond de carte          | `--card`                     | `bg-card`              |
| Texte atténué          | `--muted-foreground`         | `text-muted-foreground`|

---

## 🔤 Typographie

- **Titres (`h1` à `h6`)** : `Playfair Display`, serif
- **Texte courant** : `Inter`, `system-ui`, sans-serif

---

## 🧩 Composants UI personnalisés

### `nav-link`
Lien de navigation stylisé avec effet hover.

```html
<a class="nav-link">Accueil</a>
```

### `card-elegant`
Carte avec ombrage et hover doux.

```html
<div class="card-elegant">Contenu</div>
```

### `skill-badge`
Badge de compétence en gradient.

```html
<span class="skill-badge">React</span>
```

### `project-card`
Carte de projet avec effet zoom.

```html
<div class="project-card">
  <img class="project-image" src="..." />
</div>
```

---

## 🌈 Dégradés personnalisés

| Nom              | Variable CSS             |
|------------------|--------------------------|
| Gradient primaire| `--gradient-primary`     |
| Gradient accent  | `--gradient-accent`      |
| Gradient hero    | `--gradient-hero`        |

---

## 💡 Ombres & effets

| Nom              | Variable CSS             | Description                   |
|------------------|--------------------------|-------------------------------|
| Élégante         | `--shadow-elegant`       | Ombre douce au hover          |
| Glow             | `--shadow-glow`          | Effet lumineux pour focus     |
| Carte            | `--shadow-card`          | Ombre des cartes              |

---

## 🌀 Animations

- `pulse-glow` : effet de pulsation sur éléments actifs (`.mindmap-active`)

---

## 🧠 Tokens supplémentaires

| Nom             | Variable CSS       | Utilisation     |
|------------------|--------------------|------------------|
| Rayon global     | `--radius`         | `rounded-lg`, etc. |
| Transition fluide| `--transition-smooth` | Transitions par défaut |
| Transition rebond| `--transition-bounce` | Animation sur survol / focus |

---

## ✅ Base CSS appliquée

```css
body {
  @apply bg-background text-foreground font-body;
  font-family: 'Inter', system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  @apply font-semibold;
}
```