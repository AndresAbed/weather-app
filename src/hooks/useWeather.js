import { useState } from 'react';
import { fetchWeatherData } from '../helpers/fetchWeatherData';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const clearError = () => {
    setError(null);
  }

  const fetchWeather = async () => {
    if (city.length === 0){
      if (error) clearError();
      return
    }
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      clearError();
    } catch (error) {
      setWeatherData(null);
      setError('Failed to fetch weather data');
    }
  };

  return {
    city,
    weatherData,
    error,
    handleCityChange,
    handleSubmit
  };
};
