import { useLanguage } from '../context/LanguageContext.jsx';

const IconRealTime = '📊';
const IconAlerts = '🔔';
const IconDiagnosis = '🔍';
const IconTips = '💡';
const IconAutomation = '⚙️'; 
const IconCommunity = '🤝';  

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    featuresTitle: "Unlock Your Garden's Full Potential",
    featuresSubtitle: "Discover the powerful features that make Jardinería IA the ultimate companion for every plant enthusiast.",
    
    feature1Title: "Real-time Environmental Monitoring",
    feature1Desc: "Gain unparalleled insight into your plant's environment with continuous, real-time tracking of crucial metrics. Our system meticulously monitors **soil humidity, ambient temperature, and light levels**, providing you with accurate data points visualized through intuitive graphs. This ensures you're always aware of your plant's immediate needs.",
    
    feature2Title: "Intelligent & Personalized Alerts",
    feature2Desc: "Never miss a critical moment. Jardinería IA sends you **instant, personalized notifications** directly to your device. Whether it's a sudden drop in humidity, an unexpected temperature spike, or insufficient light, our smart alerts prompt you to take timely action, preventing common plant issues before they escalate.",
    
    feature3Title: "AI-Powered Plant Health Diagnostics",
    feature3Desc: "Empower yourself with advanced diagnostic capabilities. Simply **upload photos of your plant**, and our cutting-edge AI will analyze them to identify potential diseases, pest infestations, or nutrient deficiencies. Get immediate, actionable insights and recommended solutions tailored to restore your plant's vitality.",
    
    feature4Title: "Expert Cultivation Recommendations",
    feature4Desc: "Move beyond guesswork with data-driven advice. Based on your plant's specific species, growth stage, and real-time environmental data, Jardinería IA provides **tailored recommendations for watering schedules, optimal fertilization, pruning techniques, and overall care strategies**. Cultivate with confidence, knowing you're providing the best possible environment.",
    
    feature5Title: "Growth Tracking & History (Future)",
    feature5Desc: "Monitor your plant's progress over time. View historical data, track growth patterns, and analyze trends to understand long-term health and make informed decisions for future cultivation cycles.", // Ejemplo de futura característica
    
    feature6Title: "Community & Sharing (Future)",
    feature6Desc: "Connect with a vibrant community of plant lovers. Share your gardening successes, seek advice, and discover new tips and tricks from experienced enthusiasts worldwide." // Ejemplo de futura característica
  },
  [LANGUAGES.ES]: {
    featuresTitle: "Desbloquea Todo el Potencial de Tu Jardín",
    featuresSubtitle: "Descubre las poderosas características que hacen de Jardinería IA el compañero definitivo para todo entusiasta de las plantas.",
    
    feature1Title: "Monitoreo Ambiental en Tiempo Real",
    feature1Desc: "Obtén una visión sin igual del entorno de tu planta con el seguimiento continuo y en tiempo real de métricas cruciales. Nuestro sistema monitorea meticulosamente la **humedad del suelo, la temperatura ambiental y los niveles de luz**, proporcionándote datos precisos visualizados a través de gráficos intuitivos. Esto asegura que siempre estés al tanto de las necesidades inmediatas de tu planta.",
    
    feature2Title: "Alertas Inteligentes y Personalizadas",
    feature2Desc: "Nunca te pierdas un momento crítico. Jardinería IA te envía **notificaciones instantáneas y personalizadas** directamente a tu dispositivo. Ya sea una caída repentina de humedad, un pico inesperado de temperatura o luz insuficiente, nuestras alertas inteligentes te impulsan a tomar medidas oportunas, previniendo problemas comunes de las plantas antes de que escalen.",
    
    feature3Title: "Diagnóstico de Salud de Plantas con IA",
    feature3Desc: "Equípate con capacidades de diagnóstico avanzadas. Simplemente **sube fotos de tu planta**, y nuestra inteligencia artificial de vanguardia las analizará para identificar posibles enfermedades, infestaciones de plagas o deficiencias de nutrientes. Obtén información inmediata y soluciones recomendadas adaptadas para restaurar la vitalidad de tu planta.",
    
    feature4Title: "Recomendaciones Expertas de Cultivo",
    feature4Desc: "Deja de adivinar con consejos basados en datos. Según la especie específica de tu planta, la etapa de crecimiento y los datos ambientales en tiempo real, Jardinería IA proporciona **recomendaciones personalizadas para programas de riego, fertilización óptima, técnicas de poda y estrategias generales de cuidado**. Cultiva con confianza, sabiendo que estás proporcionando el mejor ambiente posible.",
    
    feature5Title: "Seguimiento y Historial de Crecimiento (Futuro)",
    feature5Desc: "Monitorea el progreso de tu planta a lo largo del tiempo. Visualiza datos históricos, rastrea patrones de crecimiento y analiza tendencias para comprender la salud a largo plazo y tomar decisiones informadas para futuros ciclos de cultivo.", // Ejemplo de futura característica
    
    feature6Title: "Comunidad y Compartir (Futuro)",
    feature6Desc: "Conéctate con una vibrante comunidad de amantes de las plantas. Comparte tus éxitos de jardinería, busca consejos y descubre nuevos trucos y tips de entusiastas experimentados de todo el mundo." // Ejemplo de futura característica
  }
};

export const FeaturesSection = () => {
  const { currentLang } = useLanguage();

  const features = [
    {
      id: 'real-time',
      icon: IconRealTime,
      title: TRANSLATIONS[currentLang].feature1Title,
      description: TRANSLATIONS[currentLang].feature1Desc
    },
    {
      id: 'alerts',
      icon: IconAlerts,
      title: TRANSLATIONS[currentLang].feature2Title,
      description: TRANSLATIONS[currentLang].feature2Desc
    },
    {
      id: 'diagnosis',
      icon: IconDiagnosis,
      title: TRANSLATIONS[currentLang].feature3Title,
      description: TRANSLATIONS[currentLang].feature3Desc
    },
    {
      id: 'tips',
      icon: IconTips,
      title: TRANSLATIONS[currentLang].feature4Title,
      description: TRANSLATIONS[currentLang].feature4Desc
    },

  ];

  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 dark:text-emerald-400 mb-4">
          {TRANSLATIONS[currentLang].featuresTitle}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          {TRANSLATIONS[currentLang].featuresSubtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-start text-left transition-transform hover:scale-105 duration-300 border border-transparent hover:border-emerald-500"
            >
              <div className="text-5xl text-emerald-600 dark:text-emerald-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};