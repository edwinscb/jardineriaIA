import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("es");
  const toggleLanguage = () => setCurrentLang((lang) => (lang === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);