import React, { useEffect, useState } from 'react';
import { fetchAirQualityData, fetchWeatherData } from '../services/openMeteoService';
import { AirQualityData, Location, WeatherData } from '../types';
import AQIStatus from '../components/AQIStatus';
import WeatherInfo from '../components/WeatherInfo';
import HealthAdvisories from '../components/HealthAdvisories';
import BostonMap from '../components/BostonMap';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Boston locations - expanded with more neighborhoods
  const bostonLocations: Location[] = [
    {
      name: 'East Boston',
      latitude: 42.3702,
      longitude: -71.0309,
      timezone: 'America/New_York',
    },
    {
      name: 'Downtown Boston',
      latitude: 42.3601,
      longitude: -71.0589,
      timezone: 'America/New_York',
    },
    {
      name: 'Cambridge',
      latitude: 42.3736,
      longitude: -71.1097,
      timezone: 'America/New_York',
    },
    {
      name: 'Roxbury',
      latitude: 42.3152,
      longitude: -71.0914,
      timezone: 'America/New_York',
    },
    {
      name: 'South Boston',
      latitude: 42.3381,
      longitude: -71.0477,
      timezone: 'America/New_York',
    },
    {
      name: 'Dorchester',
      latitude: 42.3016,
      longitude: -71.0676,
      timezone: 'America/New_York',
    },
    {
      name: 'Charlestown',
      latitude: 42.3782,
      longitude: -71.0602,
      timezone: 'America/New_York',
    },
    {
      name: 'Jamaica Plain',
      latitude: 42.3097,
      longitude: -71.1151,
      timezone: 'America/New_York',
    },
  ];

  // State
  const [selectedLocation, setSelectedLocation] = useState<Location>(bostonLocations[0]);
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch data when location changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch air quality and weather data
        const [airQuality, weather] = await Promise.all([
          fetchAirQualityData(selectedLocation),
          fetchWeatherData(selectedLocation)
        ]);
        
        setAirQualityData(airQuality);
        setWeatherData(weather);
        
        // Set current time and find current index
        const now = new Date();
        setCurrentTime(now.toLocaleString());
        
        // Find the closest time index to current time
        if (airQuality.time.length > 0) {
          const nowTimestamp = now.getTime();
          const closestIndex = airQuality.time
            .map(time => Math.abs(new Date(time).getTime() - nowTimestamp))
            .reduce((closestIdx, diff, idx, arr) => 
              diff < arr[closestIdx] ? idx : closestIdx, 0);
          
          setCurrentIndex(closestIndex);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [selectedLocation]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading air quality data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <button 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!airQualityData || !weatherData) {
    return null;
  }

  // Get current values
  const currentAQI = airQualityData.usAqi[currentIndex];
  const currentPM25 = airQualityData.pm25[currentIndex];
  const currentPM10 = airQualityData.pm10[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Boston Air Quality Dashboard</h1>
              <p className="mt-1">Last updated: {currentTime}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/abstract" 
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Project Abstract
              </Link>
              <div className="text-right">
                <div className="text-sm opacity-80">Data provided by</div>
                <div className="font-semibold">Open-Meteo Air Quality API</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Selected Location: {selectedLocation.name}</h2>
            <p className="text-gray-600">
              View air quality data for different neighborhoods in the Boston area.
              Click on the map or use the location buttons to switch locations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Map */}
          <div>
            <BostonMap 
              locations={bostonLocations}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          </div>
          
          {/* Right Column - Air Quality and Weather Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Current Air Quality</h2>
              <AQIStatus 
                aqi={currentAQI} 
                pm25={currentPM25}
                pm10={currentPM10}
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Health Advisories</h2>
              <HealthAdvisories aqi={currentAQI} />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
              <WeatherInfo 
                weather={weatherData}
                currentIndex={currentIndex}
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold">Boston Air Quality Project</h2>
              <p className="mt-2 text-gray-400">
                A project for monitoring and understanding air quality in Boston communities.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="https://www.airnow.gov/" className="text-gray-400 hover:text-white">
                    AirNow
                  </a>
                </li>
                <li>
                  <a href="https://www.epa.gov/air-quality-index" className="text-gray-400 hover:text-white">
                    EPA Air Quality
                  </a>
                </li>
                <li>
                  <a href="https://www.mass.gov/orgs/massachusetts-department-of-environmental-protection" className="text-gray-400 hover:text-white">
                    MassDEP
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2023 Boston Air Quality Project. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard; 