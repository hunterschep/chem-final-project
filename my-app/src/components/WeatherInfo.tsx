import React from 'react';
import { WeatherData } from '../types';

interface WeatherInfoProps {
  weather: WeatherData;
  currentIndex: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather, currentIndex }) => {
  // Get current values
  const temperature = weather.temperature ? weather.temperature[currentIndex] : null;
  const windSpeed = weather.windSpeed ? weather.windSpeed[currentIndex] : null;
  const windDirection = weather.windDirection ? weather.windDirection[currentIndex] : null;
  const precipitation = weather.precipitation ? weather.precipitation[currentIndex] : null;

  // Helper function to get wind direction as a string
  const getWindDirectionText = (degrees: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {temperature !== null && (
          <div className="flex items-center">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            <div className="ml-2">
              <p className="text-gray-600">Temperature</p>
              <p className="font-semibold">{temperature}°C</p>
            </div>
          </div>
        )}
        
        {windSpeed !== null && windDirection !== null && (
          <div className="flex items-center">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </span>
            <div className="ml-2">
              <p className="text-gray-600">Wind</p>
              <p className="font-semibold">{windSpeed} km/h {getWindDirectionText(windDirection)}</p>
            </div>
          </div>
        )}
        
        {precipitation !== null && (
          <div className="flex items-center">
            <span className="text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <div className="ml-2">
              <p className="text-gray-600">Precipitation</p>
              <p className="font-semibold">{precipitation} mm</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Weather conditions can affect air quality. High winds might disperse pollutants, while stagnant air can trap them.</p>
      </div>
    </div>
  );
};

export default WeatherInfo; 