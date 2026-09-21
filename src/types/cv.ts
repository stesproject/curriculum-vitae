export interface ContactLink {
  label: string;
  url: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface HighlightItem {
  label: string;
  text: string;
}

export interface SkillCategory {
  category: string;
  list: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  location: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
}

export interface CVData {
  lang: 'en' | 'de' | 'it';
  pageTitle: string;
  printButtonText: string;
  
  personalInfo: {
    firstName: string;
    lastName: string;
    title: string;
    birthDate: string;
    location: string;
    email: string;
    phone: string;
    linkedin: ContactLink;
    github: ContactLink;
    photoUrl: string;
  };

  sidebar: {
    aboutMeTitle: string;
    aboutMeParagraphs: string[];
    languagesTitle: string;
    languages: LanguageSkill[];
    interestsTitle: string;
    interests: string;
  };

  highlights: {
    title: string;
    items: HighlightItem[];
  };

  technicalSkills: {
    title: string;
    items: SkillCategory[];
  };

  workExperience: {
    title: string;
    items: TimelineEntry[];
  };

  education: {
    title: string;
    items: TimelineEntry[];
  };

  professionalDevelopment: {
    title: string;
    items: TimelineEntry[];
  };

  personalProjects: {
    title: string;
    items: ProjectEntry[];
  };
}
