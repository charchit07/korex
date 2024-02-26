import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import '../Styles/Weather.modules.css'; 

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
 
  useEffect(() => {
    const apiKey = '2c0a149f25ae5daebaa14f9b52f13027'; 

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        console.log(response.data)
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return (
    <div className="weather-container">
      {weatherData ? (
        <>
          <h2>{city} Weather</h2>
          <div className="weather-info">
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather icon" />
          </div>
          <MapContainer center={[weatherData.coord.lat, weatherData.coord.lon]} zoom={10} style={{ height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[weatherData.coord.lat, weatherData.coord.lon]}>
              <Popup>
                {city} Weather
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
