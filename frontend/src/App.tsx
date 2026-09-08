import { useState, type ReactNode } from "react";
import "./App.css";

type IconName =
  | "arrow"
  | "briefcase"
  | "code"
  | "database"
  | "external"
  | "github"
  | "globe"
  | "graduation"
  | "heart"
  | "linkedin"
  | "mail"
  | "map"
  | "menu"
  | "phone"
  | "play"
  | "spark"
  | "terminal"
  | "users"
  | "x";

type IconProps = { name: IconName; size?: number };

const navItems = [
  ["À propos", "about"],
  ["Compétences", "skills"],
  ["Projets", "projects"],
  ["Parcours", "journey"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    label: "Langages",
    icon: "code" as IconName,
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C", "C++"],
  },
  {
    label: "Frameworks & outils",
    icon: "terminal" as IconName,
    skills: ["PyQt6", "Node.js", "Prisma", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Méthodes",
    icon: "spark" as IconName,
    skills: [
      "MVC",
      "POO",
      "API REST",
      "Authentification JWT",
      "Tests unitaires",
      "Agile",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Nuit de l'Info 2025",
    description:
      "Conception d'une expérience web dynamique en équipe, avec une base de données et des fonctionnalités pensées pour répondre à un sujet imposé en temps limité.",
    tags: ["PHP", "JavaScript", "Base de données"],
    color: "coral",
    featured: true,
  },
  {
    number: "02",
    title: "SAÉ Jeux",
    description:
      "Jeu textuel développé en C. Chef d'équipe : répartition du travail, coordination GitHub et assemblage de la version finale.",
    tags: ["C", "GitHub", "Leadership"],
    color: "blue",
  },
  {
    number: "03",
    title: "Projet astrophotographie",
    description:
      "Application Python dédiée au traitement d'images astronomiques et à l'exploration de données visuelles.",
    tags: ["Python", "Traitement image"],
    color: "purple",
  },
  {
    number: "04",
    title: "SAÉ Web",
    description:
      "Site web statique responsive mis en ligne, réalisé pour répondre au besoin concret d'un client.",
    tags: ["HTML/CSS", "Responsive", "Déploiement"],
    color: "green",
  },
  {
    number: "05",
    title: "Nuit de l’Info 2024",
    description:
      "Création d'un site web statique en une nuit, dans un contexte de challenge et de collaboration intensive.",
    tags: ["HTML", "CSS", "Équipe"],
    color: "orange",
  },
  {
    number: "06",
    title: "Communication en C",
    description:
      "Mise en place d'une communication entre deux terminaux et création d'une fonctionnalité de jeu en ligne.",
    tags: ["C", "Réseaux", "Sockets"],
    color: "pink",
  },
];

const experiences = [
  [
    "2025",
    "Grand Port Maritime de Dunkerque",
    "Emploi saisonnier",
    "Réception et livraison de marchandises, utilisation d’une GMAO, gestion des entrées et sorties, alimentation d’une base de données photos.",
  ],
  [
    "2024",
    "Flandres Oignon",
    "Emploi saisonnier · Juillet — Août",
    "Travail sur machine au sein d’un environnement de production.",
  ],
  [
    "2022–23",
    "Archery Aventures",
    "Animateur bénévole",
    "Encadrement d’enfants et d’adolescents, animation d’activités et création d’un cadre de confiance.",
  ],
  [
    "2021",
    "Grand Port Maritime de Dunkerque",
    "Stage de troisième",
    "Découverte de l’informatique industrielle et de l’automatisme.",
  ],
];

const education = [
  [
    "2025–26",
    "2ème année de BUT Informatique",
    "IUT du Littoral Côte d’Opale · Calais",
  ],
  [
    "2024–25",
    "1ère année de BUT Informatique",
    "IUT du Littoral Côte d’Opale · Calais",
  ],
  ["2022–24", "Bac général · Mathématiques & NSI", "EPID-Vauban · Dunkerque"],
];

function Icon({ name, size = 20 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.1.1 15 2.2a13.4 13.4 0 0 0-6 0C5.9.1 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    graduation: (
      <>
        <path d="m3 10 9-5 9 5-9 5-9-5Z" />
        <path d="M7 12.5V17c3 2.2 7 2.2 10 0v-4.5M21 10v6" />
      </>
    ),
    heart: (
      <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
    ),
    linkedin: (
      <>
        <path d="M4 4h.01M4 8v12M8 12v8m0-5a4 4 0 0 1 8 0v5m0-8a4 4 0 0 1 4 4v4" />
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    phone: (
      <path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3a2 2 0 0 1-2 2C10.3 20.5 3.5 13.7 3 6a2 2 0 0 1 2-2Z" />
    ),
    play: <path d="m9 6 9 6-9 6V6Z" />,
    spark: (
      <>
        <path d="m12 3-1.2 5.8L5 10l5.8 1.2L12 17l1.2-5.8L19 10l-5.8-1.2L12 3ZM19 17l-.5 2.5L16 20l2.5.5L19 23l.5-2.5L22 20l-2.5-.5L19 17Z" />
      </>
    ),
    terminal: (
      <>
        <path d="m4 5 6 6-6 6M12 17h8" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.8M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    x: (
      <>
        <path d="M5 5l14 14M19 5 5 19" />
      </>
    ),
  };
  return (
    <svg {...common} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span>HS</span>
          <strong>Hugo Sauvage</strong>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        <nav
          className={menuOpen ? "nav-links nav-links--open" : "nav-links"}
          aria-label="Navigation principale"
        >
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Me contacter <Icon name="arrow" size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-container">
          <div className="hero-copy">
            <div className="availability">
              <span /> Disponible pour une alternance · 2026
            </div>
            <p className="hero-kicker">Bonjour, je suis</p>
            <h1>
              Hugo <em>Sauvage</em>
            </h1>
            <p className="hero-lead">
              Étudiant en <strong>BUT Informatique</strong>, je transforme des
              idées en expériences numériques utiles, élégantes et bien pensées.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#projects">
                Découvrir mes projets <Icon name="arrow" size={17} />
              </a>
              <a className="button button--ghost" href="#contact">
                Parlons de votre projet
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <Icon name="map" size={16} /> Calais · Hauts-de-France
              </span>
              <span>
                <Icon name="code" size={16} /> Développement &amp; créativité
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration décorative">
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-grid" />
            <div className="hero-terminal">
              <div className="terminal-top">
                <span />
                <span />
                <span />
                <small>hugo@portfolio:~</small>
              </div>
              <div className="terminal-line">
                <b>const</b> developer = &#123;
              </div>
              <div className="terminal-line indent">
                <span>name:</span> <i>'Hugo Sauvage'</i>,
              </div>
              <div className="terminal-line indent">
                <span>focus:</span> <i>'web &amp; software'</i>,
              </div>
              <div className="terminal-line indent">
                <span>curious:</span> <strong>true</strong>,
              </div>
              <div className="terminal-line">&#125;</div>
              <div className="terminal-cursor">_</div>
            </div>
            <div className="floating-badge floating-badge--top">
              <span className="badge-icon">
                <Icon name="spark" size={17} />
              </span>
              <div>
                <strong>Curieux</strong>
                <small>et toujours en veille</small>
              </div>
            </div>
            <div className="floating-badge floating-badge--bottom">
              <span className="badge-icon badge-icon--green">
                <Icon name="play" size={15} />
              </span>
              <div>
                <strong>Let's build</strong>
                <small>des projets qui comptent</small>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Défiler pour explorer</span>
            <Icon name="arrow" size={16} />
          </a>
        </section>

        <section className="about section-container section-pad" id="about">
          <div className="about-visual">
            <div className="about-card">
              <span className="about-mark">HS</span>
              <span className="about-caption">
                Étudiant
                <br />
                &amp; développeur
              </span>
              <span className="about-number">
                02<span>/04</span>
              </span>
            </div>
            <div className="about-stamp">
              <Icon name="heart" size={16} /> made with curiosity
            </div>
          </div>
          <div className="about-copy">
            <SectionHeading
              eyebrow="01 · À propos"
              title={
                <>
                  Construire, apprendre,
                  <br />
                  <em>progresser.</em>
                </>
              }
            />
            <p>
              Actuellement en deuxième année de{" "}
              <strong>BUT Informatique à Calais</strong>, je suis à la recherche
              d’une alternance pour ma troisième année.
            </p>
            <p>
              Passionné par l’informatique et les nouvelles technologies, j’aime
              comprendre comment les choses fonctionnent et donner vie à des
              projets concrets. Le travail en équipe et les défis techniques
              sont pour moi les meilleurs moteurs pour progresser.
            </p>
            <div className="info-pills">
              <span>
                <b>Permis B</b>
                <small>Véhicule personnel</small>
              </span>
              <span>
                <b>Hauts-de-France</b>
                <small>Mobilité régionale</small>
              </span>
              <span>
                <b>Anglais B1</b>
                <small>Communication technique</small>
              </span>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="section-container">
            <SectionHeading
              eyebrow="02 · Expertise"
              title={
                <>
                  Ce que je sais
                  <br />
                  <em>faire.</em>
                </>
              }
              copy="Un socle technique solide, enrichi par la curiosité et la pratique de projets variés."
            />
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.label}>
                  <div className="skill-card-top">
                    <span className="icon-box">
                      <Icon name={group.icon} size={20} />
                    </span>
                    <span className="skill-index">
                      0{skillGroups.indexOf(group) + 1}
                    </span>
                  </div>
                  <h3>{group.label}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="projects section-container section-pad"
          id="projects"
        >
          <div className="projects-heading">
            <SectionHeading
              eyebrow="03 · Sélection"
              title={
                <>
                  Des projets qui
                  <br />
                  <em>font la différence.</em>
                </>
              }
              copy="Chaque projet est une occasion d’apprendre, de collaborer et de trouver la bonne solution."
            />
            <a className="text-link" href="#contact">
              Parlons d’un projet <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-card--${project.color} ${project.featured ? "project-card--featured" : ""}`}
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <a
                    href="#contact"
                    aria-label={`En savoir plus sur ${project.title}`}
                  >
                    <Icon name="external" size={18} />
                  </a>
                </div>
                <div className="project-visual">
                  <span className="project-orb" />
                  <span className="project-symbol">
                    <Icon
                      name={
                        project.featured
                          ? "database"
                          : project.color === "green"
                            ? "globe"
                            : project.color === "blue"
                              ? "users"
                              : "terminal"
                      }
                      size={project.featured ? 45 : 36}
                    />
                  </span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section-pad" id="journey">
          <div className="section-container">
            <div className="journey-grid">
              <div>
                <SectionHeading
                  eyebrow="04 · Parcours"
                  title={
                    <>
                      Un parcours
                      <br />
                      <em>en mouvement.</em>
                    </>
                  }
                  copy="Des expériences qui m’ont appris la rigueur, l’adaptabilité et le sens du collectif."
                />
                <div className="timeline">
                  {experiences.map(([year, title, subtitle, copy]) => (
                    <div className="timeline-item" key={`${year}-${title}`}>
                      <span className="timeline-year">{year}</span>
                      <div className="timeline-dot" />
                      <div>
                        <h3>{title}</h3>
                        <span className="timeline-subtitle">{subtitle}</span>
                        <p>{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="education">
                <div className="education-header">
                  <span className="icon-box">
                    <Icon name="graduation" size={20} />
                  </span>
                  <div>
                    <span className="eyebrow">Formation</span>
                    <h3>
                      Apprendre pour
                      <br />
                      <em>aller plus loin.</em>
                    </h3>
                  </div>
                </div>
                {education.map(([year, title, school]) => (
                  <div className="education-item" key={year}>
                    <span>{year}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{school}</small>
                    </div>
                  </div>
                ))}
                <div className="education-quote">
                  <Icon name="spark" size={18} />
                  <p>
                    « La meilleure façon de prévoir le futur, c’est de le créer.
                    »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="interests section-container section-pad">
          <div className="interests-heading">
            <SectionHeading
              eyebrow="05 · En dehors du code"
              title={
                <>
                  Ce qui me
                  <br />
                  <em>fait avancer.</em>
                </>
              }
            />
            <p>
              Les projets ne s’arrêtent pas à l’écran. Le sport et l’engagement
              m’apprennent chaque jour à rester persévérant, collectif et
              curieux.
            </p>
          </div>
          <div className="interest-columns">
            <div>
              <h3>
                <Icon name="heart" size={18} /> Sports
              </h3>
              <div className="interest-tags">
                {[
                  "Volley-ball",
                  "Natation",
                  "Escalade",
                  "Course à pied",
                  "Trail",
                  "Badminton",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>
                <Icon name="users" size={18} /> Engagement
              </h3>
              <ul>
                <li>Délégué de classe au collège et au lycée</li>
                <li>Membre du conseil municipal des adolescents à Steene</li>
                <li>Création d’une section volley-ball en terminale</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="section-container contact-inner">
            <div>
              <SectionHeading
                light
                eyebrow="06 · Contact"
                title={
                  <>
                    Une idée, une
                    <br />
                    <em>opportunité ?</em>
                  </>
                }
                copy="Je suis toujours ouvert à une nouvelle discussion, un projet ou une alternance. Écrivez-moi, je vous répondrai avec plaisir."
              />
              <a
                className="button button--light"
                href="mailto:hugo-sauvage59@outlook.fr"
              >
                Envoyer un message <Icon name="arrow" size={17} />
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:hugo-sauvage59@outlook.fr">
                <span className="contact-icon">
                  <Icon name="mail" />
                </span>
                <span>
                  <small>Email</small>
                  <strong>hugo-sauvage59@outlook.fr</strong>
                </span>
                <Icon name="arrow" size={17} />
              </a>
              <a href="tel:+33768915609">
                <span className="contact-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <small>Téléphone</small>
                  <strong>07 68 91 56 09</strong>
                </span>
                <Icon name="arrow" size={17} />
              </a>
              <a href="https://www.linkedin.com/in/hugo-sauvage-45384132b/">
                <span className="contact-icon">
                  <Icon name="github" />
                </span>
                <span>
                  <small>GitHub</small>
                  <strong>Ajouter mon profil</strong>
                </span>
                <Icon name="external" size={17} />
              </a>
              <a href="https://github.com/hugoSauvage">
                <span className="contact-icon">
                  <Icon name="linkedin" />
                </span>
                <span>
                  <small>LinkedIn</small>
                  <strong>Ajouter mon profil</strong>
                </span>
                <Icon name="external" size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-container">
        <a className="brand" href="#top">
          <span>HS</span>
          <strong>Hugo Sauvage</strong>
        </a>
        <p>Conçu et développé avec curiosité · 2026</p>
        <a href="#top" className="back-top">
          Retour en haut <Icon name="arrow" size={15} />
        </a>
      </footer>
    </div>
  );
}

export default App;
