import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useLanguage } from '../context/LanguageContext.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LANGUAGES = {
  EN: 'en',
  ES: 'es'
};

const TRANSLATIONS = {
  [LANGUAGES.EN]: {
    metricsSectionTitle: "Historical Plant Data",
    humidityChartTitle: "Soil Humidity Over Time",
    temperatureChartTitle: "Ambient Temperature Over Time",
    lightChartTitle: "Light Level Over Time",
    chartXAxis: "Time",
    humidityYAxis: "Humidity (%)",
    tempYAxis: "Temperature (°C)",
    lightYAxis: "Light (Lux)",
    noData: "No data available for this chart."
  },
  [LANGUAGES.ES]: {
    metricsSectionTitle: "Datos Históricos de la Planta",
    humidityChartTitle: "Humedad del Suelo en el Tiempo",
    temperatureChartTitle: "Temperatura Ambiental en el Tiempo",
    lightChartTitle: "Nivel de Luz en el Tiempo",
    chartXAxis: "Tiempo",
    humidityYAxis: "Humedad (%)",
    tempYAxis: "Temperatura (°C)",
    lightYAxis: "Luz (Lux)",
    noData: "No hay datos disponibles para esta gráfica."
  }
};


export const MetricsChart = () => {
  const { currentLang } = useLanguage();

  const labels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const humidityData = {
    labels,
    datasets: [
      {
        label: TRANSLATIONS[currentLang].humidityYAxis,
        data: [65, 59, 80, 81, 56, 55, 60],
        borderColor: '#34d399',
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const temperatureData = {
    labels,
    datasets: [
      {
        label: TRANSLATIONS[currentLang].tempYAxis,
        data: [22, 24, 23, 25, 24, 26, 25],
        borderColor: '#f87171', 
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const lightData = {
    labels,
    datasets: [
      {
        label: TRANSLATIONS[currentLang].lightYAxis,
        data: [7000, 8500, 7800, 9000, 8200, 9500, 8800],
        borderColor: '#fbbf24',
        backgroundColor: 'rgba(251, 191, 36, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const baseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#d1d5db',
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: TRANSLATIONS[currentLang].chartXAxis,
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#d1d5db',
        },
        ticks: {
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#9ca3af',
        },
        grid: {
          color: currentLang === LANGUAGES.EN ? '#e5e7eb' : '#374151',
        }
      },
      y: {
        ticks: {
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#9ca3af',
        },
        grid: {
          color: currentLang === LANGUAGES.EN ? '#e5e7eb' : '#374151',
        }
      },
    },
  };

  const humidityOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      title: {
        display: true,
        text: TRANSLATIONS[currentLang].humidityChartTitle,
        color: currentLang === LANGUAGES.EN ? '#065f46' : '#34d399',
        font: { size: 20 },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: {
          display: true,
          text: TRANSLATIONS[currentLang].humidityYAxis,
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#d1d5db',
        },
      },
    },
  };

  const temperatureOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      title: {
        display: true,
        text: TRANSLATIONS[currentLang].temperatureChartTitle,
        color: currentLang === LANGUAGES.EN ? '#b91c1c' : '#f87171',
        font: { size: 20 },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: {
          display: true,
          text: TRANSLATIONS[currentLang].tempYAxis,
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#d1d5db',
        },
      },
    },
  };

  const lightOptions = {
    ...baseChartOptions,
    plugins: {
      ...baseChartOptions.plugins,
      title: {
        display: true,
        text: TRANSLATIONS[currentLang].lightChartTitle,
        color: currentLang === LANGUAGES.EN ? '#b45309' : '#fbbf24',
        font: { size: 20 },
      },
    },
    scales: {
      ...baseChartOptions.scales,
      y: {
        ...baseChartOptions.scales.y,
        title: {
          display: true,
          text: TRANSLATIONS[currentLang].lightYAxis,
          color: currentLang === LANGUAGES.EN ? '#4b5563' : '#d1d5db',
        },
      },
    },
  };


  return (
    <section id="metrics" className="py-12 bg-[#02cab2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-8">
          {TRANSLATIONS[currentLang].metricsSectionTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" style={{ height: '400px' }}>
            {humidityData.datasets[0].data.length > 0 ? (
              <Line data={humidityData} options={humidityOptions} />
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" style={{ height: '400px' }}>
            {temperatureData.datasets[0].data.length > 0 ? (
              <Line data={temperatureData} options={temperatureOptions} />
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" style={{ height: '400px' }}>
            {lightData.datasets[0].data.length > 0 ? (
              <Line data={lightData} options={lightOptions} />
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};