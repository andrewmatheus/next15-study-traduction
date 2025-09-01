'use client';

import { useI18n } from '@/lib/i18n-context';
import { languages, Language } from '@/translations';

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-zinc-800 text-white border border-zinc-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}
