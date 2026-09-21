import type { CVData } from '../types/cv';

export const cvEn: CVData = {
  lang: 'en',
  pageTitle: 'Stefano Mercadante - Software Engineer CV',
  printButtonText: 'Print / Save as PDF',

  personalInfo: {
    firstName: 'Stefano',
    lastName: 'Mercadante',
    title: 'Software Engineer | React, TypeScript, Node.js, Azure',
    birthDate: '10/05/1992',
    location: 'Based in Munich, Germany',
    email: 'stefmercadante@gmail.com',
    phone: '+49 162 3576901',
    linkedin: {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/stefano-mercadante/',
    },
    github: {
      label: 'Github',
      url: 'https://github.com/stesproject',
    },
    photoUrl: 'assets/stef.jpg',
  },

  sidebar: {
    aboutMeTitle: 'About me',
    aboutMeParagraphs: [
      '<strong>Software Engineer</strong> with strong <strong>front-end</strong> and full-stack experience, building maintainable products across web, mobile and cloud environments.',
      'Trusted by <strong>leading companies</strong> such as Unicredit, Generali, Luxottica and Lamborghini to deliver <strong>scalable, maintainable software</strong>.',
      '<strong>Focused</strong> on clean architecture, testing, performance and pragmatic delivery from <strong>requirements to production</strong>.',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Italian', level: 'Native' },
      { name: 'English', level: 'C1' },
      { name: 'German', level: 'A2' },
    ],
    interestsTitle: 'Interests',
    interests: 'Coding, IT, Gaming, Yoga, Reading, Drawing, Open Source Projects',
  },

  highlights: {
    title: 'Highlights',
    items: [
      {
        label: 'Profile',
        text: '8 years delivering enterprise software for banking, insurance, retail, energy and fleet management.',
      },
      {
        label: 'Core',
        text: 'React and TypeScript specialist with Node.js, .NET, REST APIs, Azure, Docker, CI/CD and testing.',
      },
    ],
  },

  technicalSkills: {
    title: 'Technical skills',
    items: [
      { category: 'Languages', list: 'TypeScript, JavaScript, C#, HTML5, CSS3, SQL' },
      { category: 'Frontend', list: 'React, Angular, Next.js, Vite, Tailwind, TanStack Query, AG Grid' },
      { category: 'Backend', list: 'Node.js, Express, .NET, REST APIs, MongoDB' },
      { category: 'Architecture', list: 'Component architecture, state management, authentication, i18n' },
      { category: 'Cloud & DevOps', list: 'Azure, Docker, GitHub Actions, CI/CD' },
      { category: 'Testing', list: 'Jest, Jasmine, Karma, ESLint, Prettier' },
      { category: 'Mobile & Desktop', list: 'React Native, Expo, Electron' },
      { category: 'Game Dev', list: 'Godot, Unity' },
      { category: 'Tools', list: 'Git, Jira, Trello, Expo, Electron, Agile delivery' },
    ],
  },

  workExperience: {
    title: 'Work Experience',
    items: [
      {
        period: 'May 2021–current',
        role: 'Senior Software Engineer',
        company: 'Reply/NTT Data',
        location: 'Remote (Italy)',
        subtitle: 'Assigned from Lenis as external consultant.',
        bullets: [
          'Engineered enterprise applications for <strong>banking, insurance, retail and fleet management</strong> clients including Unicredit, Generali and Luxottica.',
          'Designed back-office workflows, risk dashboards, order-management tools and customer portals with <strong>React, Angular and TypeScript</strong>.',
          'Delivered cloud-ready front ends on <strong>Azure Web Apps</strong> and Storage Accounts, including Docker delivery and <strong>Azure B2C authentication</strong>.',
          'Improved maintainability through component architecture, i18n, shared UI patterns, <strong>TanStack Query, AG Grid, Tailwind</strong> and <strong>Jest</strong>.',
        ],
      },
      {
        period: 'Jan 2020–May 2021',
        role: 'Software Engineer',
        company: 'Hibo (Dinova)',
        location: 'Bologna, Italy',
        bullets: [
          'Developed production web and mobile applications for brands including <strong>Lamborghini</strong> and Auting.',
          'Built maintainable interfaces with <strong>React, Next.js and Angular</strong>, balancing performance, accessibility and visual quality.',
          'Delivered <strong>Android & iOS</strong> features with React Native and CMS-driven experiences with WordPress, PHP and React/Frontity.',
        ],
      },
      {
        period: 'Nov 2018–Dec 2019',
        role: 'Full-Stack Developer',
        company: 'SCAI Consulting',
        location: 'Bologna, Italy',
        bullets: [
          'Built full-stack solutions for telecom, retail, postal services and banking clients.',
          'Developed GDPR-compliant consent-management back-end services for Aruba with <strong>C#/.NET</strong>.',
          'Implemented <strong>C#, Razor, React and Redux</strong> applications, including property-management dashboards for Poste Italiane and banks.',
        ],
      },
      {
        period: 'Sep 2017–Aug 2018',
        role: 'Software Engineer / Game Developer',
        company: "Ste's Project",
        location: 'Glasgow, UK',
        bullets: [
          'Designed and developed 2D and mobile game applications with <strong>Unity and C#</strong>, including gameplay systems, UI, ads and in-app purchases.',
          'Integrated online features such as leaderboards and achievements, strengthening C# application architecture and release discipline.',
        ],
      },
      {
        period: 'Nov 2016–Jul 2017',
        role: 'Software Developer',
        company: 'Thesis/Medicalbox',
        location: 'Parma, Italy',
        bullets: [
          'Developed and maintained WordPress and Magento e-commerce websites, combining front-end implementation with platform configuration.',
          'Supported SEO/SEM, content operations and analytics-oriented improvements for client websites.',
        ],
      },
    ],
  },

  education: {
    title: 'Education',
    items: [
      {
        period: '2016–2017',
        role: 'Digital Business Transformation (1-year intensive)',
        company: 'Google & Italian Chamber of Commerce',
        location: 'Italy',
        bullets: [
          'Comprehensive 1-year vocational training program combining theoretical study and practical work application, funded by Google and Italian Chamber of Commerce.',
          'Specialized in digital transformation strategies: website management, social media integration, e-commerce solutions, email marketing automation, mobile-first design, and responsive web development.',
          'Intensive program featuring dual education approach with theoretical learning and hands-on professional experience, culminating in industry certification.',
        ],
      },
      {
        period: '2011–2012',
        role: 'Business Marketing Specialist (1-year intensive)',
        company: 'CISITA',
        location: 'Parma, Italy',
        bullets: [
          'Comprehensive 1-year intensive program in strategic marketing, business organization, logistics management, commercial problem-solving, and customer relationship management.',
          'Program included 2-month professional internship with hands-on industry experience.',
        ],
      },
      {
        period: '2006–2011',
        role: 'High School Diploma in Economics & Business',
        company: 'ITIS G. Galilei',
        location: 'Parma, Italy',
        description: 'Technical education focusing on business economics, commercial operations, financial management, and analytical problem-solving methodologies.',
      },
    ],
  },

  professionalDevelopment: {
    title: 'Professional development',
    items: [
      {
        period: '2025',
        role: 'Information Security Awareness Certification',
        company: 'Reply',
        location: 'Online',
        description: 'Professional certification on cybersecurity best practices, data protection, and information security compliance for enterprise environments.',
      },
      {
        period: '2020',
        role: 'Digital Marketing Specialist Certification',
        company: 'Ecipar',
        location: 'Online',
        description: 'Professional training in social media marketing, web advertising, and digital campaign management across Facebook, Instagram, LinkedIn, and Google Ads.',
      },
      {
        period: '2017–2024',
        role: 'Continuous Professional Development',
        company: 'Udemy',
        location: 'Online',
        description: 'Comprehensive professional development in cutting-edge technologies:',
        bullets: [
          'Full-Stack Web Development: HTML5, CSS3, JavaScript ES6+, React, Node.js, Machine Learning',
          'DevOps & Cloud Technologies: Docker, Docker Compose, Kubernetes, Multi-Container Deployments',
          'Modern Web Architecture: Web Components, StencilJS, Custom HTML Elements',
          'Game Development: Godot 4, Unity, C#, 2D Game Design, Shader Programming',
        ],
      },
    ],
  },

  personalProjects: {
    title: 'Selected Personal Projects',
    items: [
      {
        name: 'To-Do Blocks',
        description: '<strong>React Native</strong> Android app published on Google Play Store for task planning and block-based productivity workflows.',
      },
      {
        name: 'Choralith Audio Explorer',
        description: '<strong>React + Electron</strong> cross-platform desktop application for managing and exploring audio libraries.',
      },
      {
        name: 'Text Game',
        description: '<strong>React + Firebase + OpenAI APIs</strong> interactive storytelling platform with AI-powered conversations and cloud hosting.',
      },
      {
        name: 'Altro?',
        description: '<strong>React Native</strong> Android & iOS app for restaurants to promote their business, showcase menus and manage reservations.',
      },
      {
        name: 'Alchemy Pot',
        description: '<strong>React + Astro</strong> web platform for publishing games, resources and independent software projects.',
      },
    ],
  },
};
