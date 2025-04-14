const WeatherCard = ({ data }) => {
    return (
      <div className="bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            {data.name}, {data.sys?.country}
          </h2>
          {data.main && (
            <p className="text-5xl font-bold my-4">
              {Math.round(data.main.temp)}°C
            </p>
          )}
          {data.weather && (
            <p className="text-xl capitalize">
              {data.weather[0].description}
            </p>
          )}
        </div>
  
        {data.main && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-opacity-20 p-3 rounded-lg">
              <p>Humedad</p>
              <p className="font-bold">{data.main.humidity}%</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p>Sensación térmica</p>
              <p className="font-bold">{Math.round(data.main.feels_like)}°C</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p>Viento</p>
              <p className="font-bold">{data.wind?.speed} m/s</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <p>Presión</p>
              <p className="font-bold">{data.main.pressure} hPa</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default WeatherCard;