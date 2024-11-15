import React from 'react';
import { useLocalization } from '@/context/LocalizationContext';
import { FlagIcon } from 'react-flag-kit'; // You can use a library for flag icons

const LanguageSelector = () => {
  const { setLanguage } = useLocalization();

  return (
    <div className="flex space-x-4">
      <button onClick={() => setLanguage('en')} className="flex items-center">
        <FlagIcon code="US" size={24} />
        <span className="ml-2">English</span>
      </button>
      <button onClick={() => setLanguage('ar')} className="flex items-center">
        <FlagIcon code="SA" size={24} />
        <span className="ml-2">العربية</span>
      </button>
      <button onClick={() => setLanguage('fr')} className="flex items-center">
        <FlagIcon code="FR" size={24} />
        <span className="ml-2">Français</span>
      </button>
    </div>
  );
};

export default LanguageSelector; 