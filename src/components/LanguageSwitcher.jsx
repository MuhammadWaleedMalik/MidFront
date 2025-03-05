import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ onClose }) => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
    { code: 'zh', name: 'Chinese', nativeName: '中文' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    { code: 'la', name: 'Latin', nativeName: 'Latina' },
    { code: 'el', name: 'Greek', nativeName: 'Ελληνικά' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (onClose) onClose();
  };
  
  return (
    <div className="py-1">
      {languages.map((language) => (
        <button
          key={language.code}
          className={`block w-full text-left px-4 py-2 text-sm ${
            i18n.language === language.code ? 'text-white bg-primary' : 'text-text-secondary hover:text-white hover:bg-primary'
          }`}
          onClick={() => changeLanguage(language.code)}
        >
          <span className="mr-2">{language.nativeName}</span>
          <span className="text-xs text-text-secondary">({language.name})</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;