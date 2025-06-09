import { useLanguage } from '../contexts/LanguageContext.jsx';

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    currentMetricsTitle: "Current Plant Metrics",
    soilHumidity: "Soil Humidity",
    ambientTemp: "Ambient Temp.",
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
    ambientTemp: "Temp. Ambiental",
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

  const statusColors = {
    optimal: "text-green-600",
    low: "text-red-500",
    high: "text-orange-600"
  };

  const metricsData = [
    {
      id: 'humidity',
      name: TRANSLATIONS[currentLang].soilHumidity,
      value: 65,
      unit: TRANSLATIONS[currentLang].humidityUnit,
      icon: '💧',
      statusKey: 'optimal',
    },
    {
      id: 'temperature',
      name: TRANSLATIONS[currentLang].ambientTemp,
      value: 23,
      unit: TRANSLATIONS[currentLang].tempUnit,
      icon: '🌡️',
      statusKey: 'optimal',
    },
    {
      id: 'light',
      name: TRANSLATIONS[currentLang].lightLevel,
      value: 8000,
      unit: TRANSLATIONS[currentLang].lightUnit,
      icon: '☀️',
      statusKey: 'high',
    }
  ];

  return (
    <section id="current-values" className="py-12 bg-[#92B690]">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          {TRANSLATIONS[currentLang].currentMetricsTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 border border-[#A7D9C3]"
            >
              <div className={`text-5xl mb-3 ${statusColors[metric.statusKey]}`}>
                {metric.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {metric.name}
              </h3>
              {/* CAMBIO CLAVE AQUÍ: text-[#135611] para un verde oscuro y vivo */}
              <p className="text-4xl font-bold text-[#135611] mb-2">
                {metric.value} <span className="text-2xl font-normal">{metric.unit}</span>
              </p>
              <p className={`text-md font-medium ${statusColors[metric.statusKey]}`}>
                {TRANSLATIONS[currentLang][metric.statusKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};