import { useWeather } from './hooks/useWeather';

export const WeatherApp = () => {
  const { city, weatherData, error, handleCityChange, handleSubmit } = useWeather();
  const difKelvin = 273.15;

  return (
    <div className="container">
      <h1>WeatherApp</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleCityChange} />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {
        weatherData &&
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {parseInt(weatherData.main.temp - difKelvin)}°C</p>
          <p>Weather conditions: {weatherData.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather icon" />
        </div>
      }
    </div>
  );
};
