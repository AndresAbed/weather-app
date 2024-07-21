export const fetchWeatherData = async (city) => {
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
