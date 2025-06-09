import { useState, useCallback } from "react";
import { useLanguage } from "../contexts/LanguageContext.jsx";
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
    title: "Gardening AI",
    home: "Home",
    demo: "Demo",
    currentValues: "Current Values",
    charts: "Charts",
    portafolio: "my Portfolio",
    repo: "Repository",
    language: "Language",
    openMenu: "Open main menu",
    closeMenu: "Close main menu"
  },
  [LANGUAGES.ES]: {
    title: "Jardinería IA",
    home: "Inicio",
    demo: "Demostración",
    currentValues: "Valores Actuales",
    charts: "Gráficas",
    portafolio: "mi portafolio",
    repo: "Repositorio",
    language: "Idioma",
    openMenu: "Abrir menú principal",
    closeMenu: "Cerrar menú principal"
  }
};

const NAV_ITEMS = [
  { id: "home", href: "#home-section" },
  { id: "demo", href: "#demo" },
  { id: "currentValues", href: "#current-values" },
  { id: "charts", href: "#metrics" },
  { id: "portafolio", href: "https://portafolioedwincastro.vercel.app/", external: true },
];

const LanguageSelector = ({ currentLang, toggleLanguage, translations }) => (
  <div
    className="flex items-center cursor-pointer mr-3 font-medium text-white hover:text-[#A7D9C3] transition-colors"
    onClick={toggleLanguage}
    aria-label={translations[currentLang].language}
    role="button"
    tabIndex="0"
    onKeyDown={(e) => e.key === 'Enter' && toggleLanguage()}
  >
    <span className="mr-1">{translations[currentLang].language}</span>
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

  const scrollToHome = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveLink("home");
    setExpanded(false);
  }, []);

  return (
    <nav className="bg-[#616c60] fixed w-full z-50 top-0 start-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="#home-section" onClick={scrollToHome} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <img src={principalLogo} alt="Logo Jardinería IA" className="w-9" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">{TRANSLATIONS[currentLang].title}</span>
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse items-center"> 

          <LanguageSelector
            currentLang={currentLang}
            toggleLanguage={toggleLanguage}
            translations={TRANSLATIONS}
          />
          <a
            href="https://github.com/edwinscb/jardineriaIA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white focus:ring-[#A7D9C3] bg-[#A7D9C3] hover:bg-[#87C2A3] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center flex items-center space-x-1 whitespace-nowrap"
            aria-label={TRANSLATIONS[currentLang].repo}
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
            <span>{TRANSLATIONS[currentLang].repo}</span>
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-3"
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

        <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${expanded ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-emerald-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (item.id === "home") {
                      e.preventDefault();
                      scrollToHome();
                    } else if (!item.external) {
                      handleNavLinkClick(item.id);
                    }
                  }}
                  className={`block py-2 px-3 rounded lg:bg-transparent lg:p-0
                    ${activeLink === item.id
                      ? 'text-white bg-[#A7D9C3] lg:text-[#A7D9C3]'
                      : 'text-gray-900 hover:bg-gray-100 lg:text-white lg:hover:bg-transparent lg:hover:text-[#A7D9C3]'
                    }`}
                  aria-current={activeLink === item.id ? "page" : undefined}
                >
                  {TRANSLATIONS[currentLang][item.id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};