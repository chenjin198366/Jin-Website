export type Language = 'en' | 'cn';

export interface LocalizedText {
  en: string;
  cn: string;
}

export interface ResumeJob {
  title: LocalizedText;
  company: LocalizedText;
  location: LocalizedText;
  date: LocalizedText;
  bullets: {
    title?: LocalizedText;
    content: LocalizedText;
  }[];
}

export interface ResumeSection {
  title: LocalizedText;
  items?: {
    school?: LocalizedText;
    major?: LocalizedText;
    degree?: LocalizedText;
    date?: LocalizedText;
    name?: LocalizedText; // For certs
  }[];
}

export interface SkillGroup {
  category: LocalizedText;
  // Tags are now explicitly LocalizedText objects
  tags: LocalizedText[];
}

export interface ResumeData {
  header: {
    name: LocalizedText;
    title: LocalizedText;
    experience: LocalizedText;
    location: LocalizedText;
    status: LocalizedText;
  };
  summary: {
    title: LocalizedText;
    text: LocalizedText;
  };
  education: ResumeSection;
  skills: {
    title: LocalizedText;
    groups: SkillGroup[];
  };
  certifications: {
    title: LocalizedText;
    list: LocalizedText[];
  };
  experience: {
    title: LocalizedText;
    jobs: ResumeJob[];
  };
  // Footer removed
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
