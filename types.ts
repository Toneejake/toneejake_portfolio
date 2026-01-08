export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Domain {
  title: string;
  description: string;
  icon: any; // Lucide icon component
}

export interface TechSkill {
  name: string;
  iconUrl: string; // URL to devicon
}

export interface SoftSkill {
  name: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ProjectAlbum {
  id: string;
  title: string;
  category: string;
  cover: string;
  description: string;
  projects: Project[];
}