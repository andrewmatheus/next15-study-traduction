import en from './en.json';
import pt from './pt.json';
import es from './es.json';

export type Language = 'en' | 'pt' | 'es';

export const translations = {
  en,
  pt,
  es,
} as const;

export const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
];

export default translations;
