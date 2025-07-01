// projects.js
export const projects = [
  {
    id: '1',
    title: 'Breakout',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '2',
    title: 'Thème Wordpress',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '3',
    title: 'Cashflow',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``,
  },

  {
    id: '4',
    title: 'Foliopro',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: 'dune',
    title: 'Dune',
    description: "Intégration d’un site web autour du film Dune, réalisée dans le cadre du cours d’intégration multimédia en 2ᵉ année de MMI.",
    tools: ['HTML', 'CSS', 'JavaScript'],
    category: 'Site Web',
    context: "Projet d’école réalisé en solo lors du cours d’intégration multimédia, en 2ᵉ année de BUT MMI. Le sujet portait sur l’intégration fidèle d’une maquette complète d’un site promotionnel.",
    goal: "Réaliser un site vitrine immersif autour du film Dune en intégrant plusieurs fonctionnalités interactives : vidéo embarquée, effet parallaxe, carte interactive et carrousels, le tout en HTML/CSS/JS.",
    process: `1. Intégration de la structure HTML et des styles CSS à partir de la maquette.
      2. Ajout de fonctionnalités JavaScript :
      - Vidéo YouTube intégrée.
      - Effet parallaxe lors du défilement.
      - Carte interactive avec géolocalisation du cinéma le plus proche.
      - Carrousels pour présenter les contenus liés au film.`,
    learnings: `- Mise en pratique complète des fondamentaux HTML, CSS et JavaScript.
      - Intégration d’éléments multimédias complexes (vidéo, carte, sliders).
      - Application d’un design fourni dans le respect du pixel perfect.`,
    links: {
      website: 'https://dune-project.example.com',
      github: ''
    },
    images:['']
  },

  {
    id: '6',
    title: 'Flappy Bird',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '7',
    title: 'F&A Delivery',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '8',
    title: 'Herman Miller',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '9',
    title: 'La Chapelle Sous Chaux',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  },

  {
    id: '10',
    title: 'OVHM',
    description: "",
    tools: [''],
    category: '',
    context: "",
    goal: "",
    process: ``,
    creative: ``,
    learnings: ``
  }

  // {
  //   id: '11',
  //   title: 'La Nuit du Péché',
  //   description: "Conception de toute la signalétique d’un événement culturel, inspirée d’une œuvre du Musée des Beaux-Arts de Dijon, dans le cadre d’un projet de deuxième année de MMI.",
  //   tools: ['Photoshop', 'Illustrator'],
  //   category: 'Design',
  //   context: "Projet réalisé dans le cadre du cours d’esthétique et d’expression artistique (2ème année MMI).",
  //   goal: "Créer une affiche et l’ensemble des supports de communication pour un événement fictif lié à une œuvre picturale. L’enjeu : développer une identité visuelle forte, cohérente et symbolique, en s’inspirant du tableau choisi.",
  //   process: `1. Choix de l'œuvre
  //     Portrait de Madame Boucher, née Marie Françoise Perdrigeon de Jean Raoux (Musée des Beaux-Arts de Dijon).
  //     2. Analyse du tableau
  //     Étude des symboles présents : la figure féminine, la posture, l’attitude ambiguë, la présence d’un ange... Une interprétation axée sur le thème du péché.
  //     3. Concept de l’événement
  //     Naissance de "La Nuit du Péché" : une soirée thématique mettant en avant le rapport entre art, féminité et tentation.
  //     4. Création graphique
  //     - Affiche principale : mise en scène de la femme et de l’ange dans un visuel dramatique et symbolique.
  //     - Carte d’invitation & flyer : déclinaisons graphiques intégrant des éléments de l’affiche.
  //     - Signalétique & badges : accompagnement des visiteurs avec un système visuel cohérent.`,
  //   creative: `- Utilisation de couleurs vives et d’une typographie déstructurée pour accentuer l’ambiance dramatique et mystérieuse.
  //     - Figures extraites du tableau intégrées comme éléments graphiques forts (la femme et l’ange).
  //     - Formes géométriques contemporaines pour moderniser l’ensemble tout en conservant une touche baroque.`,
  //   learnings: `- Création d’une identité visuelle complète à partir d’une œuvre existante.
  //     - Déclinaison graphique sur plusieurs supports (affiche, flyer, badge, signalétique).
  //     - Interprétation visuelle d’un concept artistique et symbolique.
  //     - Choix typographiques et colorimétriques pertinents au service du message.`
  // },
];

export const categories = ['Tous', ...new Set(projects.map(p => p.category))];
