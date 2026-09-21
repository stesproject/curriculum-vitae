import type { CVData } from '../types/cv';

export const cvDe: CVData = {
  lang: 'de',
  pageTitle: 'Stefano Mercadante - Lebenslauf (Softwareentwickler)',
  printButtonText: 'Drucken / Als PDF speichern',

  personalInfo: {
    firstName: 'Stefano',
    lastName: 'Mercadante',
    title: 'Softwareentwickler | React, TypeScript, Node.js, Azure',
    birthDate: '10/05/1992',
    location: 'Wohnhaft in München, Deutschland',
    email: 'stefmercadante@gmail.com',
    phone: '+49 162 3576901',
    linkedin: {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stefano-mercadante/',
    },
    github: {
      label: 'GitHub',
      url: 'https://github.com/stesproject',
    },
    photoUrl: 'assets/stef.jpg',
  },

  sidebar: {
    aboutMeTitle: 'Über mich',
    aboutMeParagraphs: [
      '<strong>Softwareentwickler</strong> mit starker <strong>Front-End</strong>- und Full-Stack-Erfahrung in der Entwicklung wartbarer Produkte für Web-, Mobile- und Cloud-Umgebungen.',
      'Vertrauensvoller Partner für <strong>führende Unternehmen</strong> wie Unicredit, Generali, Luxottica und Lamborghini bei der Umsetzung <strong>skalierbarer, wartbarer Software</strong>.',
      '<strong>Fokussiert</strong> auf saubere Architektur, Testing, Performance und pragmatische Umsetzung von den <strong>Anforderungen bis zur Produktion</strong>.',
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { name: 'Italienisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'C1' },
      { name: 'Deutsch', level: 'A2' },
    ],
    interestsTitle: 'Interessen',
    interests: 'Coding, IT, Gaming, Yoga, Lesen, Zeichnen, Open-Source-Projekte',
  },

  highlights: {
    title: 'Profil',
    items: [
      {
        label: 'Profil',
        text: '8 Jahre Erfahrung in der Entwicklung von Enterprise-Software für Bankwesen, Versicherungen, Retail, Energie und Flottenmanagement.',
      },
      {
        label: 'Fokus',
        text: 'React- und TypeScript-Spezialist mit Node.js, .NET, REST APIs, Azure, Docker, CI/CD und Testing.',
      },
    ],
  },

  technicalSkills: {
    title: 'Technische Fähigkeiten',
    items: [
      { category: 'Programmiersprachen', list: 'TypeScript, JavaScript, C#, HTML5, CSS3, SQL' },
      { category: 'Frontend', list: 'React, Angular, Next.js, Vite, Tailwind, TanStack Query, AG Grid' },
      { category: 'Backend', list: 'Node.js, Express, .NET, REST APIs, MongoDB' },
      { category: 'Architektur', list: 'Komponentenarchitektur, State Management, Authentifizierung, i18n' },
      { category: 'Cloud & DevOps', list: 'Azure, Docker, GitHub Actions, CI/CD' },
      { category: 'Testing', list: 'Jest, Jasmine, Karma, ESLint, Prettier' },
      { category: 'Mobile & Desktop', list: 'React Native, Expo, Electron' },
      { category: 'Spieleentwicklung', list: 'Godot, Unity' },
      { category: 'Tools', list: 'Git, Jira, Trello, Expo, Electron, agile Umsetzung' },
    ],
  },

  workExperience: {
    title: 'Berufserfahrung',
    items: [
      {
        period: 'Mai 2021–heute',
        role: 'Senior Softwareentwickler',
        company: 'Reply/NTT Data',
        location: 'Remote (Italien)',
        subtitle: 'Als externer Berater von Lenis eingesetzt.',
        bullets: [
          'Entwicklung von Enterprise-Anwendungen für Kunden aus <strong>Bankwesen, Versicherungen, Retail und Flottenmanagement</strong>, darunter Unicredit, Generali und Luxottica.',
          'Konzeption und Umsetzung von Backoffice-Workflows, Risiko-Dashboards, Order-Management-Tools und Kundenportalen mit <strong>React, Angular und TypeScript</strong>.',
          'Bereitstellung cloudfähiger Frontends auf <strong>Azure Web Apps</strong> und Storage Accounts, inklusive Docker-Auslieferung und <strong>Azure B2C-Authentifizierung</strong>.',
          'Verbesserung der Wartbarkeit durch Komponentenarchitektur, i18n, gemeinsame UI-Patterns, <strong>TanStack Query, AG Grid, Tailwind</strong> und <strong>Jest</strong>.',
        ],
      },
      {
        period: 'Jan. 2020–Mai 2021',
        role: 'Softwareentwickler',
        company: 'Hibo (Dinova)',
        location: 'Bologna, Italien',
        bullets: [
          'Entwicklung produktiver Web- und Mobile-Anwendungen für Marken wie <strong>Lamborghini</strong> und Auting.',
          'Aufbau wartbarer Oberflächen mit <strong>React, Next.js und Angular</strong> unter Berücksichtigung von Performance, Barrierefreiheit und visueller Qualität.',
          'Umsetzung von <strong>Android- und iOS</strong>-Features mit React Native sowie CMS-basierten Experiences mit WordPress, PHP und React/Frontity.',
        ],
      },
      {
        period: 'Nov. 2018–Dez. 2019',
        role: 'Full-Stack-Entwickler',
        company: 'SCAI Consulting',
        location: 'Bologna, Italien',
        bullets: [
          'Entwicklung von Full-Stack-Lösungen für Kunden aus Telekommunikation, Retail, Postdienstleistungen und Bankwesen.',
          'Entwicklung DSGVO-konformer Backend-Services für Consent Management bei Aruba mit <strong>C#/.NET</strong>.',
          'Umsetzung von Anwendungen mit <strong>C#, Razor, React und Redux</strong>, darunter Property-Management-Dashboards für Poste Italiane und Banken.',
        ],
      },
      {
        period: 'Sep. 2017–Aug. 2018',
        role: 'Softwareentwickler / Spieleentwickler',
        company: "Ste's Project",
        location: 'Glasgow, UK',
        bullets: [
          'Design und Entwicklung von 2D- und Mobile-Game-Anwendungen mit <strong>Unity und C#</strong>, inklusive Gameplay-Systemen, UI, Ads und In-App-Käufen.',
          'Integration von Online-Funktionen wie Leaderboards und Achievements und Stärkung der C#-Anwendungsarchitektur sowie Release-Disziplin.',
        ],
      },
      {
        period: 'Nov. 2016–Juli 2017',
        role: 'Softwareentwickler',
        company: 'Thesis/Medicalbox',
        location: 'Parma, Italien',
        bullets: [
          'Entwicklung und Wartung von WordPress- und Magento-E-Commerce-Websites mit Frontend-Implementierung und Plattformkonfiguration.',
          'Unterstützung bei SEO/SEM, Content Operations und analytics-orientierten Verbesserungen für Kundenwebsites.',
        ],
      },
    ],
  },

  education: {
    title: 'Ausbildung',
    items: [
      {
        period: '2016–2017',
        role: 'Digitale Unternehmenstransformation (1-jähriges Intensivprogramm)',
        company: 'Google & Italienische Handelskammer',
        location: 'Italien',
        bullets: [
          'Umfassendes 1-jähriges berufliches Trainingsprogramm mit theoretischem Lernen und praktischer Arbeitserfahrung, finanziert von Google und der Italienischen Handelskammer.',
          'Schwerpunkt auf Strategien der digitalen Transformation: Website-Management, Social-Media-Integration, E-Commerce-Lösungen, E-Mail-Marketing-Automatisierung, Mobile-First-Design und responsive Webentwicklung.',
          'Intensivprogramm mit dualem Bildungsansatz aus Theorie und Praxis, abgeschlossen mit Branchenzertifizierung.',
        ],
      },
      {
        period: '2011–2012',
        role: 'Business Marketing Specialist (1-jähriges Intensivprogramm)',
        company: 'CISITA',
        location: 'Parma, Italien',
        bullets: [
          'Umfassendes 1-jähriges Intensivprogramm in strategischem Marketing, Unternehmensorganisation, Logistikmanagement, kaufmännischer Problemlösung und Kundenbeziehungsmanagement.',
          'Das Programm beinhaltete ein 2-monatiges Berufspraktikum mit praktischer Branchenerfahrung.',
        ],
      },
      {
        period: '2006–2011',
        role: 'Schulabschluss in Wirtschaft & Business',
        company: 'ITIS G. Galilei',
        location: 'Parma, Italien',
        description: 'Technische Ausbildung mit Fokus auf Betriebswirtschaft, kaufmännische Abläufe, Finanzmanagement und analytische Problemlösungsmethoden.',
      },
    ],
  },

  professionalDevelopment: {
    title: 'Berufliche Weiterbildung',
    items: [
      {
        period: '2025',
        role: 'Information Security Awareness Certification',
        company: 'Reply',
        location: 'Online',
        description: 'Professionelle Zertifizierung zu Best Practices in Cybersicherheit, Datenschutz und Informationssicherheits-Compliance in Enterprise-Umgebungen.',
      },
      {
        period: '2020',
        role: 'Digital Marketing Specialist Certification',
        company: 'Ecipar',
        location: 'Online',
        description: 'Professionelle Weiterbildung in Social-Media-Marketing, Online-Werbung und digitalem Kampagnenmanagement über Facebook, Instagram, LinkedIn und Google Ads.',
      },
      {
        period: '2017–2024',
        role: 'Kontinuierliche berufliche Weiterbildung',
        company: 'Udemy',
        location: 'Online',
        description: 'Umfassende berufliche Weiterbildung in modernen Technologien:',
        bullets: [
          'Full-Stack-Webentwicklung: HTML5, CSS3, JavaScript ES6+, React, Node.js, Machine Learning',
          'DevOps & Cloud-Technologien: Docker, Docker Compose, Kubernetes, Multi-Container-Deployments',
          'Moderne Webarchitektur: Web Components, StencilJS, Custom HTML Elements',
          'Game Development: Godot 4, Unity, C#, 2D Game Design, Shader Programming',
        ],
      },
    ],
  },

  personalProjects: {
    title: 'Ausgewählte persönliche Projekte',
    items: [
      {
        name: 'To-Do Blocks',
        description: '<strong>React-Native</strong>-Android-App, veröffentlicht im Google Play Store, für Aufgabenplanung und blockbasierte Produktivitäts-Workflows.',
      },
      {
        name: 'Choralith Audio Explorer',
        description: '<strong>React + Electron</strong>-Desktopanwendung für mehrere Plattformen zur Verwaltung und Exploration von Audio-Bibliotheken.',
      },
      {
        name: 'Text Game',
        description: '<strong>React + Firebase + OpenAI APIs</strong>-Plattform für interaktives Storytelling mit KI-gestützten Gesprächen und Cloud Hosting.',
      },
      {
        name: 'Altro?',
        description: '<strong>React-Native</strong>-Android- und iOS-App für Restaurants, um ihr Geschäft zu präsentieren, Menüs zu zeigen und Reservierungen zu verwalten.',
      },
      {
        name: 'Alchemy Pot',
        description: '<strong>React + Astro</strong>-Webplattform zur Veröffentlichung von Games, Ressourcen und unabhängigen Softwareprojekten.',
      },
    ],
  },
};
