export type Language = 'en' | 'cn';

export interface LocalizedText {
  en: string;
  cn: string;
}

export interface ExperienceItem {
  company: LocalizedText;
  role: LocalizedText;
  period: string; // Keeping period universal or add localized if needed, usually dates are ok
}

export interface SkillCategory {
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
