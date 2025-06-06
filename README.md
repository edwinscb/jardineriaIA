---
# 🌱 Asistente de Jardinería Inteligente para Menta 🌱

¡Bienvenido al repositorio del Asistente de Jardinería Inteligente! Este proyecto está diseñado para ayudarte a cultivar una planta de menta desde cero en interiores, optimizando el riego y la luz artificial mediante Machine Learning e IoT. Es una excelente oportunidad para sumergirte en el mundo de la IA y la Ciencia de Datos, construyendo algo útil para tu hogar.
---

## 🚀 Problema Principal a Resolver

¿Alguna vez te has preguntado cuánto y cuándo regar tus plantas? ¿O si reciben la luz adecuada? Este proyecto elimina las conjeturas. Nuestro objetivo principal es **asegurar el crecimiento óptimo de una planta de menta en interiores, controlando de forma inteligente la cantidad de agua y la intensidad/ciclo de la luz artificial**. Queremos que tu menta prospere, incluso si eres un jardinero novato.

---

## 🎯 Alcance del Proyecto

Este sistema va más allá del simple monitoreo; también actúa para cuidar tu planta.

### Monitoreo y Predicción

- **Humedad del Suelo:** Predice cuándo y cuánto regar, y te alerta si hay exceso de agua.
- **Intensidad de Luz:** Monitorea la luz que recibe tu planta de menta.
- **Temperatura y Humedad del Aire:** Sigue el microclima ambiental para un contexto completo de la salud de tu planta.

### Control Activo

- **Control de Luz Automático:** Enciende, apaga y ajusta la intensidad de una luz artificial LED para tu menta, basándose en sus necesidades y ciclo ideal.
- **Riego Automático:** Activa una microbomba para regar la planta con la cantidad precisa de agua, entregada por goteo desde un pequeño depósito.

### Interfaz y Notificaciones

- **Notificaciones Inteligentes:** Recibe alertas y recomendaciones personalizadas directamente en tu teléfono a través de **Telegram** o **WhatsApp**.
- **Visualización de Datos:** Accede a una **página web** interactiva para ver gráficos históricos y datos en tiempo real de todos los sensores y el estado de tu planta.

---

## ✨ Requisitos del Proyecto

Para que este asistente funcione, necesitamos lo siguiente:

- **Planta Piloto:** Comenzaremos con una planta de **Menta (Mentha sp.)**. Es ideal para interiores en el clima de Bogotá, requiere riego constante (lo que nos da muchos datos) y es resistente, perfecta para experimentar.
- **Fuentes de Datos:** Utilizaremos una combinación de **datasets públicos** sobre las necesidades de la menta y los **datos recolectados por tus propios sensores** en casa. Esto permite una personalización precisa a tu entorno.
- **Recursos:** Nos ceñiremos estrictamente al **uso de software y almacenamiento de datos en versiones gratuitas**. ¡Aprenderemos a ser eficientes!
- **Hardware Principal:** Una **Raspberry Pi** será el cerebro de nuestro sistema, funcionando 24/7 para recolectar datos y ejecutar la lógica.

---

## 🛠️ Solución Técnica Propuesta

La arquitectura de este proyecto integra varios componentes para crear un sistema completo.

### Hardware (Captura de Datos y Actuadores)

- **Microcontrolador:** **Raspberry Pi**.
- **Sensores:**
  - **Humedad del Suelo:** Sensor capacitivo (requiere un conversor ADC como el **ADS1115** para la Raspberry Pi).
  - **Intensidad de Luz:** Sensor digital **BH1750 (en Lux)**.
  - **Temperatura y Humedad del Aire:** Sensor **DHT11 o DHT22**.
- **Actuadores:**
  - **Luz Artificial:** Tira de **LEDs con capacidad PWM**, controlada por un **módulo MOSFET/driver de LEDs** y un **relé**.
  - **Sistema de Riego:** **Mini bomba sumergible de 3V-6V** y manguera delgada, activada por un **módulo relé**, extrayendo agua de un pequeño depósito.

### Flujo de Datos y Software

1.  **Recolección de Datos:** Un script en **Python** en la Raspberry Pi leerá los datos de los sensores a intervalos regulares, añadiendo una marca de tiempo a cada lectura.
2.  **Almacenamiento de Datos:** Los datos se enviarán y almacenarán en **Firebase Realtime Database (Plan Spark)**. Esta es nuestra opción gratuita y en tiempo real para un almacenamiento robusto. La Raspberry Pi se autenticará de forma segura con Firebase.
3.  **Procesamiento y Machine Learning (El Cerebro):**
    - Con **Pandas** y **NumPy**, manipularemos los datos para el análisis.
    - Realizaremos **Análisis Exploratorio de Datos (EDA)** con **Matplotlib** y **Seaborn** para entender los patrones de la planta.
    - Crearemos **Ingeniería de Características** para preparar los datos para el modelo.
    - Entrenaremos modelos de **Machine Learning** con **Scikit-learn** para:
      - **Clasificación:** Predecir si la planta necesita agua o luz.
      - **Regresión:** Determinar la cantidad de agua o la intensidad de luz óptima.
4.  **Lógica de Control y Notificaciones:**
    - La aplicación principal en la Raspberry Pi usará los modelos de ML para tomar decisiones de riego y luz.
    - Controlará directamente los actuadores (bomba y LEDs) para llevar a cabo las acciones.
    - Enviará **notificaciones automáticas** (Telegram/WhatsApp) informándote sobre las acciones o el estado de la planta.
5.  **Interfaz de Usuario Web:**
    - Una aplicación web ligera (con **Flask** o **Streamlit**) se ejecutará en la Raspberry Pi.
    - Esta web leerá los datos de Firebase Realtime Database para mostrar **gráficos interactivos** y datos en tiempo real, dándote una visión completa del estado de tu menta.

---

## 🎓 Objetivos de Aprendizaje

Este proyecto es una oportunidad fantástica para un ingeniero de sistemas que busca adentrarse en ML, Ciencia de Datos e IA. Los conocimientos que adquirirás incluyen:

- **Programación de Microcontroladores e IoT:** Interacción con hardware, sensores y comunicación en la nube.
- **Gestión de Bases de Datos:** Uso práctico de bases de datos en la nube (Firebase) y locales (SQLite).
- **Análisis y Preprocesamiento de Datos:** Limpieza, manipulación y visualización de datos de series de tiempo con Python (Pandas, NumPy, Matplotlib, Seaborn).
- **Fundamentos de Machine Learning:** Desde la ingeniería de características hasta la selección, entrenamiento y evaluación de modelos de clasificación y regresión con Scikit-learn.
- **Despliegue y Automatización:** Poner modelos de ML en producción y automatizar tareas en un entorno real.
- **Desarrollo Web Básico:** Creación de interfaces web sencillas para visualizar datos.

---

¡Prepárate para ver tu menta prosperar y tus habilidades de IA crecer!

---
