import { useState } from 'react';
import { getWeatherByCity } from './api/api';
import WeatherCard from './components/WeatherCard';


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      setError(null);
      try {
        const weatherData = await getWeatherByCity(location);
        setData(weatherData);
      } catch (err) {
        setError(err.message);
        setData({});
      } finally {
        setLoading(false);
        setLocation('');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-weather-primary to-weather-secondary text-white p-4">
      <div className="max-w-md mx-auto container">
        <h1 className="text-3xl font-bold text-center mb-8 animate-pulse">
          ⛅ Buscador del Tiempo
        </h1>

        <div className="mb-8">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="Buscar ciudad y país (ej: Santiago, CL)"
            className="w-full p-3 rounded-lg text-gray-800 focus:outline-none"
          />
        </div>

        {loading && <p className="text-center">Cargando...</p>}
        {error && <p className="text-center text-red-300">{error}</p>}
        {data.name && !loading && <WeatherCard data={data} />}
      </div>
    </div>
  );
}

export default App;