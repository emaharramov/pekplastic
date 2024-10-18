import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../../node_modules/flag-icons/css/flag-icons.min.css";

const SelectLang = (props) => {
  const { handlerLang, selectLang, i18n, t } = props;
  const [flag, setFlag] = useState('us');
  const [selectedLanguage, setSelectedLanguage] = useState(t('englishLang'));

  useEffect(() => {
    const currentLang = i18n.language;
    if (currentLang === 'en') {
      setSelectedLanguage(t('englishLang'));
      setFlag('us');
    } else if (currentLang === 'tr') {
      setSelectedLanguage(t('turkish'));
      setFlag('tr');
    } else if (currentLang === 'ru') {
      setSelectedLanguage(t('russian'));
      setFlag('ru');
    }
  }, [i18n.language, t]);

  const handleLanguageChange = (lang, displayLang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(displayLang);
    handlerLang();
  };

  return (
    <div className="relative pl-4 w-[70%] md:w-[initial] md:pl-[initial] mt-4 md:mt-0" data-aos="fade-down"
      data-aos-delay={250}
      data-aos-duration="700"
      style={{ zIndex: 30 }}  // Set z-index here to ensure dropdown visibility
    >
      <div
        className={`flex items-center md:w-[150px] gap-x-3 md:initial border py-1 cursor-pointer 
            transition duration-300 hover:bg-gray-200 hover:text-[#333] hover:border-gray-400`} 
        onClick={handlerLang}
        style={{ zIndex: 30 }}  // Ensure the parent container has the correct z-index
      >
        <span className={`fi fi-${flag} ms-2`}></span> 
        <p>{selectedLanguage}</p>
        <MdKeyboardArrowDown
          size={16}
          className={`transform transition-all duration-300 ${selectLang ? 'rotate-180' : 'initial'}`}
        />
      </div>

      <div
        className={`absolute w-[93.4%] lg:w-full z-50 lg:bg-gray-200 transform transition-all duration-300 ${selectLang
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-10px] pointer-events-none"
          }`}
        style={{ zIndex: 30 }}  // Ensure dropdown has a higher z-index
      >
        <div 
          className="cursor-pointer flex items-center hover:bg-white hover:text-[#333] border-l-[1px]" 
          onClick={() => handleLanguageChange('en', t('englishLang'))}
          style={{ zIndex: 30 }}  // Apply z-index if needed
        >
          <span className="fi fi-us ms-2"></span>
          <p className="px-3 py-1">{t('englishLang')}</p>
        </div>
        <div 
          className="cursor-pointer flex items-center hover:bg-white hover:text-[#333] border-l-[1px]" 
          onClick={() => handleLanguageChange('tr', t('turkish'))}
          style={{ zIndex: 30 }}
        >
          <span className="fi fi-tr ms-2"></span>
          <p className="px-3 py-1">{t('turkish')}</p>
        </div>
        <div 
          className="cursor-pointer flex items-center hover:bg-white hover:text-[#333] border-l-[1px]" 
          onClick={() => handleLanguageChange('ru', t('russian'))}
          style={{ zIndex: 30 }}
        >
          <span className="fi fi-ru ms-2"></span>
          <p className="px-3 py-1">{t('russian')}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectLang;
