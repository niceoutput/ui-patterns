import { useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

const API_URL = 'https://api.react-formula.com/learning-api/demos/error-handling/weather';

const ErrorHandling = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(API_URL);
    console.log(response.status);

    if (response.status === 200) {
      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
      setError(null);
    } else {
      const errorData = await response.json();
      setError(errorData)
      setWeather(null);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [])

  const WeatherCard = ({ day, description, highTemp, lowTemp }) => {
    return (
      <div>
        <h2>{day}</h2>
        <p>Description: {description}</p>
        <p>High: {highTemp}°F</p>
        <p>Low: {lowTemp}°F</p>
      </div>
    );
  };

  return (
    <div>
      <button onClick={fetchWeather}>Refresh</button>
      {weather && (
        <WeatherCard
          day={weather.day}
          description={weather.description}
          highTemp={weather.high_temp}
          lowTemp={weather.low_temp}
        />
      )}
      {error && <ErrorMessage message={error.error_message} />}
    </div>
  )
}

export default ErrorHandling
