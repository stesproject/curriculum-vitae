import type { CVData } from '../types/cv';

export const cvIt: CVData = {
  lang: 'it',
  pageTitle: 'Stefano Mercadante - Curriculum Vitae (Software Engineer)',
  printButtonText: 'Stampa / Salva in PDF',

  personalInfo: {
    firstName: 'Stefano',
    lastName: 'Mercadante',
    title: 'Software Engineer | React, TypeScript, Node.js, Azure',
    birthDate: '10/05/1992',
    location: 'Domiciliato a Monaco di Baviera, Germania',
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
    aboutMeTitle: 'Chi sono',
    aboutMeParagraphs: [
      '<strong>Software Engineer</strong> con solida esperienza <strong>front-end</strong> e full-stack, specializzato nello sviluppo di prodotti scalabili per ambienti web, mobile e cloud.',
      'Consulente per <strong>aziende leader</strong> quali Unicredit, Generali, Luxottica e Lamborghini nella realizzazione di <strong>software scalabile e manutenibile</strong>.',
      '<strong>Focalizzato</strong> su architettura pulita, testing, performance e rilascio pragmatico dai <strong>requisiti alla produzione</strong>.',
    ],
    languagesTitle: 'Lingue',
    languages: [
      { name: 'Italiano', level: 'Madrelingua' },
      { name: 'Inglese', level: 'C1' },
      { name: 'Tedesco', level: 'A2' },
    ],
    interestsTitle: 'Interessi',
    interests: 'Programmazione, IT, Gaming, Yoga, Lettura, Disegno, Progetti Open Source',
  },

  highlights: {
    title: 'Profilo',
    items: [
      {
        label: 'Profilo',
        text: '8 anni di esperienza nello sviluppo di software enterprise per settori bancario, assicurativo, retail, energia e gestione flotte.',
      },
      {
        label: 'Focus',
        text: 'Specialista React e TypeScript con solide competenze in Node.js, .NET, API REST, Azure, Docker, CI/CD e testing.',
      },
    ],
  },

  technicalSkills: {
    title: 'Competenze tecniche',
    items: [
      { category: 'Linguaggi', list: 'TypeScript, JavaScript, C#, HTML5, CSS3, SQL' },
      { category: 'Frontend', list: 'React, Angular, Next.js, Vite, Tailwind, TanStack Query, AG Grid' },
      { category: 'Backend', list: 'Node.js, Express, .NET, REST APIs, MongoDB' },
      { category: 'Architettura', list: 'Architettura a componenti, gestione dello stato, autenticazione, i18n' },
      { category: 'Cloud & DevOps', list: 'Azure, Docker, GitHub Actions, CI/CD' },
      { category: 'Testing', list: 'Jest, Jasmine, Karma, ESLint, Prettier' },
      { category: 'Mobile & Desktop', list: 'React Native, Expo, Electron' },
      { category: 'Game Dev', list: 'Godot, Unity' },
      { category: 'Strumenti', list: 'Git, Jira, Trello, Expo, Electron, metodologie Agile' },
    ],
  },

  workExperience: {
    title: 'Esperienza lavorativa',
    items: [
      {
        period: 'Maggio 2021–presente',
        role: 'Senior Software Engineer',
        company: 'Reply/NTT Data',
        location: 'Remoto (Italia)',
        subtitle: 'Assegnato da Lenis come consulente esterno.',
        bullets: [
          'Progettazione e sviluppo di applicazioni enterprise per clienti nei settori <strong>bancario, assicurativo, retail e gestione flotte</strong>, tra cui Unicredit, Generali e Luxottica.',
          'Sviluppo di workflow di back-office, dashboard di rischio, strumenti di gestione ordini e portali clienti con <strong>React, Angular e TypeScript</strong>.',
          'Rilascio di front-end pronti per il cloud su <strong>Azure Web Apps</strong> e Storage Accounts, con deployment Docker e <strong>autenticazione Azure B2C</strong>.',
          'Miglioramento della manutenibilità mediante architettura a componenti, i18n, pattern UI condivisi, <strong>TanStack Query, AG Grid, Tailwind</strong> e <strong>Jest</strong>.',
        ],
      },
      {
        period: 'Gen 2020–Mag 2021',
        role: 'Software Engineer',
        company: 'Hibo (Dinova)',
        location: 'Bologna, Italia',
        bullets: [
          'Sviluppo di applicazioni web e mobile in produzione per brand di prestigio tra cui <strong>Lamborghini</strong> e Auting.',
          'Realizzazione di interfacce manutenibili con <strong>React, Next.js e Angular</strong>, bilanciando performance, accessibilità e qualità visiva.',
          'Sviluppo di funzionalità <strong>Android & iOS</strong> con React Native ed esperienze guidate da CMS con WordPress, PHP e React/Frontity.',
        ],
      },
      {
        period: 'Nov 2018–Dic 2019',
        role: 'Full-Stack Developer',
        company: 'SCAI Consulting',
        location: 'Bologna, Italia',
        bullets: [
          'Sviluppo di soluzioni full-stack per clienti nei settori telecomunicazioni, retail, servizi postali e bancari.',
          'Realizzazione di servizi back-end GDPR-compliant per la gestione del consenso per Aruba con <strong>C#/.NET</strong>.',
          'Implementazione di applicazioni in <strong>C#, Razor, React e Redux</strong>, incluse dashboard di gestione immobiliare per Poste Italiane e istituti bancari.',
        ],
      },
      {
        period: 'Set 2017–Ago 2018',
        role: 'Software Engineer / Game Developer',
        company: "Ste's Project",
        location: 'Glasgow, Regno Unito',
        bullets: [
          'Progettazione e sviluppo di giochi 2D e mobile con <strong>Unity e C#</strong>, inclusi sistemi di gameplay, UI, pubblicità e acquisti in-app.',
          'Integrazione di funzionalità online quali classifiche e obiettivi, rafforzando l\'architettura applicativa C# e la disciplina nei rilasci.',
        ],
      },
      {
        period: 'Nov 2016–Lug 2017',
        role: 'Software Developer',
        company: 'Thesis/Medicalbox',
        location: 'Parma, Italia',
        bullets: [
          'Sviluppo e manutenzione di siti e-commerce WordPress e Magento, combinando implementazione front-end e configurazione della piattaforma.',
          'Supporto a strategie SEO/SEM, gestione dei contenuti e ottimizzazioni orientate alla web analytics per i clienti.',
        ],
      },
    ],
  },

  education: {
    title: 'Istruzione e Formazione',
    items: [
      {
        period: '2016–2017',
        role: 'Digital Business Transformation (Intensivo di 1 anno)',
        company: 'Google & Camera di Commercio Italiana',
        location: 'Italia',
        bullets: [
          'Corso di formazione professionale intensivo della durata di 1 anno con teoria e applicazione pratica, finanziato da Google e Camera di Commercio Italiana.',
          'Specializzazione in strategie di trasformazione digitale: gestione siti web, integrazione social media, soluzioni e-commerce, automazione email marketing, design mobile-first e sviluppo web responsive.',
          'Programma intensivo basato su approccio duale con apprendimento teorico ed esperienza professionale sul campo, culminante nella certificazione.',
        ],
      },
      {
        period: '2011–2012',
        role: 'Specialista Marketing Aziendale (Intensivo di 1 anno)',
        company: 'CISITA',
        location: 'Parma, Italia',
        bullets: [
          'Corso intensivo di 1 anno in marketing strategico, organizzazione aziendale, gestione della logistica, problem solving commerciale e customer relationship management.',
          'Il programma ha incluso uno stage professionale di 2 mesi sul campo.',
        ],
      },
      {
        period: '2006–2011',
        role: 'Diploma di Ragioniere e Perito Commerciale (Economia e Azienda)',
        company: 'ITIS G. Galilei',
        location: 'Parma, Italia',
        description: 'Istruzione tecnica focalizzata su economia aziendale, operazioni commerciali, gestione finanziaria e metodologie analitiche di problem solving.',
      },
    ],
  },

  professionalDevelopment: {
    title: 'Formazione continua',
    items: [
      {
        period: '2025',
        role: 'Certificazione Information Security Awareness',
        company: 'Reply',
        location: 'Online',
        description: 'Certificazione professionale su best practice di cybersecurity, protezione dati e conformità alla sicurezza delle informazioni per ambienti enterprise.',
      },
      {
        period: '2020',
        role: 'Certificazione Digital Marketing Specialist',
        company: 'Ecipar',
        location: 'Online',
        description: 'Formazione professionale in social media marketing, pubblicità online e gestione di campagne digitali su Facebook, Instagram, LinkedIn e Google Ads.',
      },
      {
        period: '2017–2024',
        role: 'Formazione Continua e Sviluppo Professionale',
        company: 'Udemy',
        location: 'Online',
        description: 'Formazione professionale continua in tecnologie all\'avanguardia:',
        bullets: [
          'Sviluppo Web Full-Stack: HTML5, CSS3, JavaScript ES6+, React, Node.js, Machine Learning',
          'Tecnologie DevOps & Cloud: Docker, Docker Compose, Kubernetes, Deployment Multi-Container',
          'Architettura Web Moderna: Web Components, StencilJS, Elementi HTML Personalizzati',
          'Sviluppo Videogiochi: Godot 4, Unity, C#, Progettazione Giochi 2D, Programmazione Shader',
        ],
      },
    ],
  },

  personalProjects: {
    title: 'Progetti personali selezioni',
    items: [
      {
        name: 'To-Do Blocks',
        description: 'App Android in <strong>React Native</strong> pubblicata su Google Play Store per la pianificazione delle attività e workflow di produttività a blocchi.',
      },
      {
        name: 'Choralith Audio Explorer',
        description: 'Applicazione desktop cross-platform in <strong>React + Electron</strong> per la gestione e l\'esplorazione di librerie audio.',
      },
      {
        name: 'Text Game',
        description: 'Piattaforma di narrazione interattiva in <strong>React + Firebase + API OpenAI</strong> con conversazioni basate su IA e cloud hosting.',
      },
      {
        name: 'App Ristoranti',
        description: 'App Android & iOS in <strong>React Native</strong> per i ristoranti per promuovere l\'attività, mostrare i menu e gestire le prenotazioni.',
      },
      {
        name: 'Alchemy Pot',
        description: 'Piattaforma web in <strong>React + Astro</strong> per la pubblicazione di giochi, risorse e progetti software indipendenti.',
      },
    ],
  },
};
