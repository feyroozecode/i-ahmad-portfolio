import React, { createContext, useContext, useState } from "react";

// Define the translations for each language
const translations = {
  en: {
    greeting:
      "7+ years of crafting beautiful and performant mobile applications. Open for exciting freelancing opportunities.",
  },
  ar: {
    greeting:
      "سبع سنوات من إنشاء تطبيقات موبايل جميلة وعالية الأداء. مفتوح لفرص العمل الحر المثيرة.",
  },
  fr: {
    greeting:
      "Plus de 7 ans à créer des applications mobiles belles et performantes. Ouvert aux opportunités de freelance passionnantes.",
  },
};

// Create a context for localization
const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (key) => translations[language][key];

  return (
    <LocalizationContext.Provider value={{ translate, setLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook to use the localization context
export const useLocalization = () => useContext(LocalizationContext);
