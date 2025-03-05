import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translations
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationNL from './locales/nl/translation.json';
import translationZH from './locales/zh/translation.json';
import translationJA from './locales/ja/translation.json';
import translationFR from './locales/fr/translation.json';
import translationLA from './locales/la/translation.json';
import translationEL from './locales/el/translation.json';
import translationDE from './locales/de/translation.json';
import translationIT from './locales/it/translation.json';
import translationRU from './locales/ru/translation.json';
import translationAR from './locales/ar/translation.json';

// Resources object with all translations
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
  nl: { translation: translationNL },
  zh: { translation: translationZH },
  ja: { translation: translationJA },
  fr: { translation: translationFR },
  la: { translation: translationLA },
  el: { translation: translationEL },
  de: { translation: translationDE },
  it: { translation: translationIT },
  ru: { translation: translationRU },
  ar: { translation: translationAR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;