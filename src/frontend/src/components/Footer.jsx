import githubLogo from '../assets/img/logos/gitHub-icon.svg'; 
import { useLanguage } from '../context/LanguageContext.jsx'; 
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
      <div className="container mx-auto px-4 text-center">

        <a href="/" className="inline-flex items-center justify-center space-x-2 mb-4">
          <img src={principalLogo} alt="GitHub" className="w-9" />
          <span className="text-xl font-bold text-emerald-800 dark:text-white">{TRANSLATIONS[currentLang].title}</span>
        </a>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          © {currentYear} {TRANSLATIONS[currentLang].footerCopyright}
        </p>

        <div className="flex justify-center items-center">
          <a
            href="https://github.com/edwinscb/VolleyballTracking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-500 transition-colors"
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