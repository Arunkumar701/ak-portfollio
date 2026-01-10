
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Security' | 'Tools';
}

export interface Project {
  title: string;
  image?: string;
  tech: string[];
  features: string[];
  securityAspects: string[];
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}
