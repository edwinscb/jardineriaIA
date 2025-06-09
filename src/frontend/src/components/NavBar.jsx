import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import githubLogo from "../assets/img/logos/gitHub-icon.svg";
import principalLogo from "../assets/img/logos/principallogo.svg";
import langIconES from "../assets/img/logos/lang-icon-es.svg";
import langIconEN from "../assets/img/logos/lang-icon-en.svg";

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    home: "Home",
    demo: "Demo",
    portafolio: "my Portfolio",
    metrics: "Metrics",
    repo: "Repository",
    language: "Language",
    openMenu: "Open main menu",
    closeMenu: "Close main menu"
  },
  [LANGUAGES.ES]: {
    home: "Inicio",
    demo: "Demostración",
    portafolio: "mi portafolio",
    metrics: "Métricas",
    repo: "Repositorio",
    language: "Idioma",
    openMenu: "Abrir menú principal", 
    closeMenu: "Cerrar menú principal" 
  }
};

const NAV_ITEMS = ["home", "demo", "metrics", "portafolio"];

const LanguageSelector = ({ currentLang, toggleLanguage }) => (
  <div
    className="flex items-center cursor-pointer mr-3 font-medium text-emerald-800 hover:text-emerald-900 transition-colors dark:text-white dark:hover:text-gray-200"
    onClick={toggleLanguage}
    aria-label={TRANSLATIONS[currentLang].language}
    role="button"
    tabIndex="0"
    onKeyDown={(e) => e.key === 'Enter' && toggleLanguage()}
  >
    <span className="mr-1">{TRANSLATIONS[currentLang].language}</span>
    <img
      src={currentLang === LANGUAGES.ES ? langIconES : langIconEN}
      alt={currentLang === LANGUAGES.ES ? "Español" : "English"}
      className="w-8 h-auto rounded-full shadow"
      loading="lazy"
    />
  </div>
);

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);

  const { currentLang, toggleLanguage } = useLanguage();

  const handleNavLinkClick = useCallback((item) => {
    setActiveLink(item);
    setExpanded(false);
  }, []);

  const handleToggle = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <nav className="bg-[#616c60] fixed w-full z-50 top-0 start-0 border-b border-gray-700 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={principalLogo} alt="GitHub" className="w-9" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-800 dark:text-white">Jardinería IA</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          
          <LanguageSelector currentLang={currentLang} toggleLanguage={toggleLanguage} />

          
          <a
            href="https://github.com/edwinscb/jardineriaIA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 flex items-center space-x-1 whitespace-nowrap"
            aria-label={TRANSLATIONS[currentLang].repo}
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>{TRANSLATIONS[currentLang].repo}</span>
          </a>

          <button
            onClick={handleToggle} 
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-3"
            aria-controls="navbar-sticky"
            aria-expanded={expanded} 
            aria-label={expanded ? TRANSLATIONS[currentLang].closeMenu : TRANSLATIONS[currentLang].openMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${expanded ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-emerald-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                {item === "portafolio" ? (
                  <a
                    href="https://portafolioedwincastro.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {TRANSLATIONS[currentLang][item]}
                  </a>
                ) : (
                  
                  <a
                    href={`#${item}`}
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${activeLink === item ? 'text-white bg-emerald-700 md:text-emerald-700 dark:md:text-emerald-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-emerald-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent dark:border-gray-700'}`}
                    aria-current={activeLink === item ? "page" : undefined}
                    onClick={() => handleNavLinkClick(item)}
                  >
                    {TRANSLATIONS[currentLang][item]}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};