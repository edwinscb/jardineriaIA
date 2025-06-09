import githubLogo from '../assets/img/logos/gitHub-icon.svg'; 
import { useLanguage } from '../contexts/LanguageContext.jsx';
import principalLogo from "../assets/img/logos/principallogo.svg";

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    title: "Gardening AI",
    footerCopyright: "Gardening AI. All rights reserved.",
    viewOnGitHub: "View on GitHub"
  },
  [LANGUAGES.ES]: {
    title: "Jardinería IA",   
    footerCopyright: "Jardinería IA. Todos los derechos reservados.",
    viewOnGitHub: "Ver en GitHub"
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { currentLang } = useLanguage();

  return (
    <footer className="bg-[#616c60] shadow-inner mt-12 py-8">
      <div className="container mx-auto px-5 text-center">
        <a href="#home-section" className="inline-flex items-center justify-center space-x-2 mb-4"
        >
          <img src={principalLogo} alt="Logo Jardinería IA" className="w-9" />
          <span className="text-xl font-bold text-white hover:text-[#A7D9C3] transition-colors">
            {TRANSLATIONS[currentLang].title}
          </span>
        </a>
        <p className="text-gray-200 text-sm mb-4">
          © {currentYear} {TRANSLATIONS[currentLang].footerCopyright}
        </p>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/edwinscb/jardineriaIA" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-[#A7D9C3] transition-colors"
            aria-label={TRANSLATIONS[currentLang].viewOnGitHub}
          >
            <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
            <span className="font-medium">{TRANSLATIONS[currentLang].viewOnGitHub}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};