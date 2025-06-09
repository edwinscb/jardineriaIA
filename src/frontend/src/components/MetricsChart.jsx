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
import { useLanguage } from '../contexts/LanguageContext.jsx';

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

  const chartLineColors = {
    humidity: {
      borderColor: '#A7D9C3',
      backgroundColor: 'rgba(167, 217, 195, 0.2)',
    },
    temperature: {
      borderColor: '#f87171',
      backgroundColor: 'rgba(248, 113, 113, 0.2)',
    },
    light: {
      borderColor: '#fbbf24',
      backgroundColor: 'rgba(251, 191, 36, 0.2)',
    }
  };

  const humidityData = {
    labels,
    datasets: [
      {
        label: TRANSLATIONS[currentLang].humidityYAxis,
        data: [65, 59, 80, 81, 56, 55, 60],
        borderColor: chartLineColors.humidity.borderColor,
        backgroundColor: chartLineColors.humidity.backgroundColor,
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
        borderColor: chartLineColors.temperature.borderColor,
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
        borderColor: chartLineColors.light.borderColor,
        backgroundColor: 'rgba(251, 191, 36, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Ajuste de colores para elementos de la gráfica para un fondo más claro
  const chartTextColors = {
    title: '#135611', // Verde Oscuro para títulos de gráficas (se ve bien sobre blanco)
    labels: '#616c60', // Verde Grisáceo Oscuro para etiquetas de ejes y ticks
    grid: '#e5e7eb',   // Gris muy claro para las líneas de la cuadrícula
    legend: '#616c60'  // Verde Grisáceo Oscuro para las leyendas
  };

  const baseChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: chartTextColors.legend,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#616c60', // Se mantiene para consistencia del tooltip
        titleColor: '#A7D9C3',
        bodyColor: '#F5F5DC',
        padding: 10,
        cornerRadius: 4,
        displayColors: true,
        borderWidth: 1,
        borderColor: '#A7D9C3',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: TRANSLATIONS[currentLang].chartXAxis,
          color: chartTextColors.labels,
          font: { size: 14 }
        },
        ticks: {
          color: chartTextColors.labels,
        },
        grid: {
          color: chartTextColors.grid,
        }
      },
      y: {
        ticks: {
          color: chartTextColors.labels,
        },
        grid: {
          color: chartTextColors.grid,
        },
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
        color: chartTextColors.title,
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
          color: chartTextColors.labels,
          font: { size: 14 }
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
        color: chartTextColors.title,
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
          color: chartTextColors.labels,
          font: { size: 14 }
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
        color: chartTextColors.title,
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
          color: chartTextColors.labels,
          font: { size: 14 }
        },
      },
    },
  };

  return (
    // CAMBIO CLAVE AQUÍ: Fondo de la sección a Crema Neutro (#F5F5DC)
    <section id="metrics" className="py-12 bg-[#F5F5DC]">
      <div className="container mx-auto px-4">
        {/* Título principal de la sección: Verde Oscuro (#135611) para un buen contraste con el fondo claro */}
        <h2 className="text-[#135611] text-3xl font-bold text-center mb-8">
          {TRANSLATIONS[currentLang].metricsSectionTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#A7D9C3]" style={{ height: '400px' }}>
            {humidityData.datasets[0].data.length > 0 ? (
              <Line data={humidityData} options={humidityOptions} />
            ) : (
              <p className="text-center text-gray-700">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-[#A7D9C3]" style={{ height: '400px' }}>
            {temperatureData.datasets[0].data.length > 0 ? (
              <Line data={temperatureData} options={temperatureOptions} />
            ) : (
              <p className="text-center text-gray-700">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-[#A7D9C3]" style={{ height: '400px' }}>
            {lightData.datasets[0].data.length > 0 ? (
              <Line data={lightData} options={lightOptions} />
            ) : (
              <p className="text-center text-gray-700">{TRANSLATIONS[currentLang].noData}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};