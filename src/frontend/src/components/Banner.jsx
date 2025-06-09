
import { useLanguage } from '../context/LanguageContext.jsx';
import heroPlantImage from '../assets/img/pictures/RiegoAutomatico.jpg';

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    heroTitle: "Gardering IA: Cultivate Smarter, Grow Healthier",
    heroSubtitle: "Transform your gardening with intelligent monitoring and personalized insights. From soil humidity to light levels, our AI helps you understand and nurture every plant for optimal growth. Discover the future of plant care today.",
    callToAction: "Learn More"
  },
  [LANGUAGES.ES]: {
    heroTitle: "Jardinería IA: Cultiva de Forma Inteligente, Crece Saludable",
    heroSubtitle: "Transforma tu jardinería con monitoreo inteligente y consejos personalizados. Desde la humedad del suelo hasta los niveles de luz, nuestra IA te ayuda a entender y nutrir cada planta para un crecimiento óptimo. Descubre el futuro del cuidado de las plantas hoy.",
    callToAction: "Aprende Más"
  }
};

export const Banner = () => {
  const { currentLang } = useLanguage();

  return (
    <section id="home" className="relative bg-emerald-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 lg:py-40 flex items-center justify-between md:flex-row flex-col-reverse">
        <div className="text-center md:text-left md:w-1/2 lg:w-5/12 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-800 dark:text-emerald-300 mb-6 leading-tight">
            {TRANSLATIONS[currentLang].heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {TRANSLATIONS[currentLang].heroSubtitle}
          </p>
          <a
            href="#features" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-700"
          >
            {TRANSLATIONS[currentLang].callToAction}
          </a>
        </div>

        <div className="md:w-1/2 lg:w-5/12 mb-8 md:mb-0 relative">
          <img
            src={heroPlantImage}
            alt="Planta siendo monitoreada con tecnología de Inteligencia Artificial"
            className="rounded-lg shadow-xl object-cover w-full h-full md:h-auto max-h-96 md:max-h-full"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-emerald-100 dark:bg-gray-700 opacity-60 dark:opacity-40"
        style={{ clipPath: 'ellipse(100% 50% at 50% 100%)' }}
      ></div>
    </section>
  );
};