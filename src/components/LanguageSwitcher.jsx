import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('ka')} 
        className={`language-btn ${i18n.language === 'ka' ? 'active' : ''}`}
        title="Georgian"
      >
        <span className="fi fi-ge"></span>
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`language-btn ${i18n.language === 'en' ? 'active' : ''}`}
        title="English"
      >
        <span className="fi fi-gb"></span>
      </button>
      <button 
        onClick={() => changeLanguage('ru')} 
        className={`language-btn ${i18n.language === 'ru' ? 'active' : ''}`}
        title="Russian"
      >
        <span className="fi fi-ru"></span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
