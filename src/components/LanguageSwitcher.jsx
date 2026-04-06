import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div 
      className="language-switcher" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '5px', 
        marginLeft: '15px',
        justifyContent: 'center'
      }}
    >
      <button 
        onClick={() => changeLanguage('ka')} 
        style={{ background: 'none', border: 'none', cursor: i18n.language === 'ka' ? 'default' : 'pointer', padding: 0, opacity: i18n.language === 'ka' ? 1 : 0.5 }}
        title="Georgian"
      >
        <span className="fi fi-ge" style={{ fontSize: '1.2rem', borderRadius: '2px' }}></span>
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        style={{ background: 'none', border: 'none', cursor: i18n.language === 'en' ? 'default' : 'pointer', padding: 0, opacity: i18n.language === 'en' ? 1 : 0.5 }}
        title="English"
      >
        <span className="fi fi-gb" style={{ fontSize: '1.2rem', borderRadius: '2px' }}></span>
      </button>
      <button 
        onClick={() => changeLanguage('ru')} 
        style={{ background: 'none', border: 'none', cursor: i18n.language === 'ru' ? 'default' : 'pointer', padding: 0, opacity: i18n.language === 'ru' ? 1 : 0.5 }}
        title="Russian"
      >
        <span className="fi fi-ru" style={{ fontSize: '1.2rem', borderRadius: '2px' }}></span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
