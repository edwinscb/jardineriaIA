
import { useLanguage } from '../context/LanguageContext.jsx';

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    currentMetricsTitle: "Current Plant Metrics",
    soilHumidity: "Soil Humidity",
    ambientTemp: "Ambient Temperature",
    lightLevel: "Light Level",
    humidityUnit: "%",
    tempUnit: "°C",
    lightUnit: "Lux",
    optimal: "Optimal",
    low: "Low",
    high: "High"
  },
  [LANGUAGES.ES]: {
    currentMetricsTitle: "Métricas Actuales de la Planta",
    soilHumidity: "Humedad del Suelo",
    ambientTemp: "Temperatura Ambiental",
    lightLevel: "Nivel de Luz",
    humidityUnit: "%",
    tempUnit: "°C",
    lightUnit: "Lux",
    optimal: "Óptimo",
    low: "Bajo",
    high: "Alto"
  }
};

export const CurrentValues = () => {
  const { currentLang } = useLanguage();

  const metricsData = [
    {
      id: 'humidity',
      name: TRANSLATIONS[currentLang].soilHumidity,
      value: 65,
      unit: TRANSLATIONS[currentLang].humidityUnit,
      icon: '💧',
      status: TRANSLATIONS[currentLang].optimal,
      color: 'text-blue-500'
    },
    {
      id: 'temperature',
      name: TRANSLATIONS[currentLang].ambientTemp,
      value: 23,
      unit: TRANSLATIONS[currentLang].tempUnit,
      icon: '🌡️',
      status: TRANSLATIONS[currentLang].optimal,
      color: 'text-red-500'
    },
    {
      id: 'light',
      name: TRANSLATIONS[currentLang].lightLevel,
      value: 8000,
      unit: TRANSLATIONS[currentLang].lightUnit,
      icon: '☀️',
      status: TRANSLATIONS[currentLang].high,
      color: 'text-yellow-500'
    }
  ];

  return (
    <section id="current-values" className="py-12 bg-[#118209]">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold text-center text-[#efefef] mb-8">
          {TRANSLATIONS[currentLang].currentMetricsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300"
            >
              <div className={`text-5xl mb-3 ${metric.color}`}>
                {metric.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {metric.name}
              </h3>
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                {metric.value} <span className="text-2xl font-normal">{metric.unit}</span>
              </p>
              <p className={`text-md font-medium ${metric.color}`}>
                {metric.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};