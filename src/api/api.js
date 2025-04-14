import axios from 'axios';

const API_KEY = '4c49d38983c946923441ed450832afa1'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
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