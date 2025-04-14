# Weather App - Consulta el Clima Global

Este proyecto es una **aplicación web para consultar condiciones meteorológicas**, desarrollada con **React, Vite y Tailwind CSS**. Permite a los usuarios buscar y visualizar el clima actual de cualquier ciudad del mundo.

## Características principales

- **Consulta en tiempo real**: Obtén datos meteorológicos actualizados mediante consumo de API con Axios
- **Búsqueda flexible**: Formulario intuitivo para buscar por ciudad y país
- **Estado reactivo**: Gestión del estado con hooks de React (useState)
- **Diseño responsivo**: Interfaz adaptable a cualquier dispositivo
- **Visualización completa**: Muestra temperatura, humedad, velocidad del viento y más
- **Feedback visual**: Mensajes de carga y error para mejor experiencia de usuario

## Tecnologías utilizadas

- ⚛️ React 18 (con Hooks)
- ⚡ Vite (entorno de desarrollo rápido)
- 🔄 Axios (para consumo de API REST)
- 🎨 Tailwind CSS (diseño responsive)
- 🌐 OpenWeatherMap API (datos meteorológicos)

## **📁 Estructura del Proyecto**

```plaintext
├── README.md                  # Documentación del proyecto
├── eslint.config.js            # Configuración de ESLint para buenas prácticas
├── index.html                  # Archivo HTML principal
├── package.json                # Dependencias y scripts de la aplicación
├── public/
│   └── vite.svg                # Logo de Vite
├── src/
│   ├── App.jsx                 # Componente principal de la aplicación
│   ├── assets/                 # Recursos estáticos (imágenes, logos)
│   │   ├── logo.jpeg           # Logo del proyecto
│   │   └── react.svg           # Logo de React
│   ├── components/             # Componentes reutilizables
│   │   ├── WeatherCard.jsx        # Componente para mostrar la consulta del clima
│   ├── api/
│   │   └── api.js            # Datos de consulta para API
│   ├── main.jsx                # Punto de entrada de React
└── vite.config.js              # Configuración de Vite para optimización
```

## **🚀 Instalación y Ejecución**

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clonar el Repositorio

```bash
git clone https://github.com/Krpardo27/weather-app.git
cd weather-app
```

2. Instalar Dependencias

```bash
npm install
```

3. Ejecutar la Aplicación

```bash
npm run dev
```

Luego, abre tu navegador y accede a **`http://localhost:5173`**.

## **🛠️ Funcionalidades de los Componentes**

## Hooks implementados

- `useState` para gestionar:
  - Datos del clima
  - Término de búsqueda
  - Estados de carga/error
  - Localización seleccionada

## Componentes principales

1. **Formulario de Búsqueda**:
   - Campo de entrada para ciudad/país
   - Validación básica
   - Evento onSubmit para disparar la búsqueda

2. **Tarjeta del Clima**:
   - Visualización de datos principales
   - Iconos condicionales según el clima
   - Detalles meteorológicos adicionales

3. **Gestión de Estados**:
   - Pantalla de carga mientras se obtienen datos
   - Mensajes de error para búsquedas fallidas