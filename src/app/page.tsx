'use client';

import { useI18n } from '@/lib/i18n-context';
import { LanguageSelector } from '@/components/language-selector';

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8 flex flex-col items-center justify-center gap-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">{t('hello_world')}</h1>
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="language" className="text-lg">
            Select Language:
          </label>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}
