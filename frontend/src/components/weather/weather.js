import React, { useState, useEffect } from 'react';

const FoodWeather = () => {
  const [weather, setWeather] = useState(null);
  const [foodRecommendation, setFoodRecommendation] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '13bd9a0820c1f18c6ab7a28ce144bd69';
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Mangalore&appid=${apiKey}`); // Replace 'YourCity' with the city name
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    if (weather) {
      // Logic to recommend food based on weather conditions
      const temperature = weather.main.temp - 273.15; // Convert temperature from Kelvin to Celsius
      if (temperature < 10) {
        setFoodRecommendation('Hot Soup');
      } else if (temperature >= 10 && temperature < 20) {
        setFoodRecommendation('Pasta');
      } else if (temperature >= 20 && temperature < 30) {
        setFoodRecommendation('Salad');
      } else {
        setFoodRecommendation('Ice Cream');
      }
    }
  }, [weather]);

  return (
    <div>
      <h2>Food Recommendation Based on Weather</h2>
      {weather ? (
        <div>
          <p>Temperature: {weather.main.temp-273.15}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Food Recommendation: {foodRecommendation}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default FoodWeather;
