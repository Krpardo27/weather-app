import axios from 'axios';

// Usamos import.meta.env para acceder a las variables en Vite
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
  if (!API_KEY) {
    throw new Error('API key no configurada');
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
        lang: 'es'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Ciudad no encontrada. Intenta con otro nombre.');
  }
};