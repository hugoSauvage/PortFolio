# Hugo Sauvage · Portfolio

Portfolio personnel de **Hugo Sauvage**, étudiant en deuxième année de BUT Informatique à l’IUT du Littoral Côte d’Opale. Ce site présente son parcours, ses compétences, ses projets et sa recherche d’une alternance pour sa troisième année.

<p align="center">
	<strong>Un portfolio sobre, coloré et responsive pour donner vie à un parcours de développeur.</strong>
</p>

## Aperçu

Le portfolio est une expérience monopage en français, pensée pour être parcourue rapidement sur ordinateur comme sur mobile.

- navigation fluide entre les différentes sections ;
- menu mobile avec ouverture et fermeture accessibles ;
- présentation personnelle et disponibilité pour une alternance en 2026 ;
- compétences techniques regroupées par catégories ;
- sélection de projets universitaires et personnels ;
- parcours professionnel, formation et engagements ;
- accès direct à l’email, au téléphone, à GitHub et à LinkedIn.

## Technologies

![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)

- **React** pour construire l’interface ;
- **TypeScript** pour un code plus fiable et maintenable ;
- **Vite** pour le développement local et la génération du build ;
- **CSS** pour la direction artistique, les animations et le responsive design ;
- **Google Fonts** avec Manrope et DM Mono pour la typographie.

## Sections du site

| Section | Contenu |
| --- | --- |
| À propos | Profil, objectifs, mobilité et langues |
| Compétences | Langages, frameworks, outils et méthodes |
| Projets | Nuit de l’Info, SAÉ, astrophotographie, web et réseaux |
| Parcours | Expériences professionnelles et bénévolat |
| Formation | BUT Informatique et baccalauréat général |
| En dehors du code | Sports et engagements associatifs/citoyens |
| Contact | Email, téléphone, GitHub et LinkedIn |

## Démarrer le projet

### Prérequis

- Node.js 20 ou version ultérieure ;
- npm.

### Installation

Depuis le dossier `frontend` :

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site est ensuite disponible à l’adresse indiquée par Vite, généralement `http://localhost:5173`.

### Vérifications et build

```bash
# Vérifier le code avec ESLint
npm run lint

# Compiler TypeScript et générer la version de production
npm run build

# Prévisualiser le build de production
npm run preview
```

## Structure du projet

```text
PortFolio/
├── README.md
└── frontend/
		├── index.html
		├── package.json
		├── vite.config.ts
		└── src/
				├── App.tsx       # contenu et composants du portfolio
				├── App.css       # mise en page et responsive design
				├── index.css     # styles globaux et typographies
				└── main.tsx      # point d’entrée React
```

## Personnalisation

Les contenus principaux sont centralisés dans [frontend/src/App.tsx](frontend/src/App.tsx) :

- `navItems` pour la navigation ;
- `skillGroups` pour les compétences ;
- `projects` pour les projets ;
- `experiences` et `education` pour le parcours ;
- les coordonnées et liens sociaux dans la section Contact.

Les couleurs, espacements, animations et points de rupture responsive sont définis dans [frontend/src/App.css](frontend/src/App.css).

## Contact

- Email : [hugo-sauvage59@outlook.fr](mailto:hugo-sauvage59@outlook.fr)
- GitHub : [github.com/hugoSauvage](https://github.com/hugoSauvage)
- LinkedIn : [linkedin.com/in/hugo-sauvage-45384132b](https://www.linkedin.com/in/hugo-sauvage-45384132b/)