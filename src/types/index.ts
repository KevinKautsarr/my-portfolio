export interface NavLink {
  name: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface TechDetail {
  name: string;
  description: string;
}

export interface Feature {
  title: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  tech: string[];
  techDetails: TechDetail[];
  features: Feature[];
  image: string;
  link: string;
  featured: boolean;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface SocialHandles {
  linkedin: string;
  instagram: string;
}

export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface UserInfo {
  name: string;
  role: string;
  university: string;
  bio: string;
  location: string;
  mapsLink: string;
  email: string;
  about: string;
  socialHandles: SocialHandles;
  socials: Socials;
}
