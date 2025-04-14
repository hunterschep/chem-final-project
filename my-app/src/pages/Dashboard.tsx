import React, { useEffect, useState } from 'react';
import { fetchAirQualityData, fetchWeatherData } from '../services/openMeteoService';
import { AirQualityData, Location, WeatherData } from '../types';
import AQIStatus from '../components/AQIStatus';
import HealthAdvisories from '../components/HealthAdvisories';
import MassachusettsMap from '../components/MassachusettsMap';
import ChemistryExplainer from '../components/ChemistryExplainer';
import HistoricalContext from '../components/HistoricalContext';
import { Link } from 'react-router-dom';

// Define content view types
type ContentView = 'map' | 'chemistry' | 'history';

const Dashboard: React.FC = () => {
  // Massachusetts locations featuring a mix of areas
  const maLocations: Location[] = [
    {
      name: 'East Boston',
      latitude: 42.3702,
      longitude: -71.0309,
      timezone: 'America/New_York',
      description: 'Focus area - Near Logan Airport with environmental justice concerns',
      type: 'focus'
    },
    {
      name: 'Chelsea',
      latitude: 42.3918,
      longitude: -71.0328,
      timezone: 'America/New_York',
      description: 'Industrial area with environmental justice concerns',
      type: 'industrial'
    },
    {
      name: 'Lawrence',
      latitude: 42.7070,
      longitude: -71.1631,
      timezone: 'America/New_York',
      description: 'Former industrial city with diverse population',
      type: 'industrial'
    },
    {
      name: 'New Bedford',
      latitude: 41.6362,
      longitude: -70.9342,
      timezone: 'America/New_York',
      description: 'Port city with industrial history',
      type: 'industrial'
    },
    {
      name: 'Springfield',
      latitude: 42.1015,
      longitude: -72.5898,
      timezone: 'America/New_York',
      description: 'Urban center with industrial areas',
      type: 'industrial'
    },
    {
      name: 'Weston',
      latitude: 42.3668,
      longitude: -71.3042,
      timezone: 'America/New_York',
      description: 'Affluent suburban community',
      type: 'wealthy'
    },
    {
      name: 'Wellesley',
      latitude: 42.2968,
      longitude: -71.2923,
      timezone: 'America/New_York',
      description: 'Wealthy residential area',
      type: 'wealthy'
    },
    {
      name: 'Newton',
      latitude: 42.3370,
      longitude: -71.2092,
      timezone: 'America/New_York',
      description: 'Affluent suburban community',
      type: 'wealthy'
    },
  ];

  // State
  const [selectedLocation, setSelectedLocation] = useState<Location>(maLocations[0]);
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeView, setActiveView] = useState<ContentView>('map');

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
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Massachusetts Air Quality Dashboard</h1>
              <div className="flex items-center text-sm mt-1">
                <span className="mr-3">Last updated: {currentTime}</span>
                <span className="px-2 py-0.5 bg-blue-700 rounded text-xs font-medium">
                  Data: Open-Meteo API
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6 bg-white rounded-lg shadow-sm p-3">
          <div className="flex-1">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold">{selectedLocation.name}</h2>
              {selectedLocation.type === 'focus' && (
                <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                  Focus Area
                </span>
              )}
              {selectedLocation.type === 'industrial' && (
                <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                  Industrial Area
                </span>
              )}
              {selectedLocation.type === 'wealthy' && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  Affluent Area
                </span>
              )}
            </div>
            {selectedLocation.description && (
              <p className="text-sm text-gray-600 mt-1">{selectedLocation.description}</p>
            )}
          </div>
        </div>

        {/* Content View Selector */}
        <div className="mb-6">
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              className={`flex-1 py-3 px-4 font-medium text-sm ${activeView === 'map' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveView('map')}
            >
              Air Quality Map
            </button>
            <button
              className={`flex-1 py-3 px-4 font-medium text-sm ${activeView === 'chemistry' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveView('chemistry')}
            >
              Chemistry Explainer
            </button>
            <button
              className={`flex-1 py-3 px-4 font-medium text-sm ${activeView === 'history' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveView('history')}
            >
              Historical Context
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - Dynamic Content */}
          <div className="lg:col-span-3">
            {activeView === 'map' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <MassachusettsMap 
                  locations={maLocations}
                  selectedLocation={selectedLocation}
                  onLocationChange={setSelectedLocation}
                />
                <div className="p-3 bg-gray-50 border-t text-xs text-gray-500">
                  Compare air quality across different socioeconomic areas in Massachusetts
                </div>
              </div>
            )}
            
            {activeView === 'chemistry' && (
              <ChemistryExplainer />
            )}
            
            {activeView === 'history' && (
              <HistoricalContext />
            )}
          </div>
          
          {/* Right Column - Air Quality and Weather Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h2 className="text-lg font-bold mb-3 pb-2 border-b">Current Air Quality</h2>
              <AQIStatus 
                aqi={currentAQI} 
                pm25={currentPM25}
                pm10={currentPM10}
              />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-5">
              <h2 className="text-lg font-bold mb-3 pb-2 border-b">Health Advisories</h2>
              <HealthAdvisories aqi={currentAQI} />
            </div>
            
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold">Boston Air Quality Project</h2>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.airnow.gov/" className="text-gray-300 hover:text-white text-sm">
                AirNow
              </a>
              <a href="https://www.epa.gov/air-quality-index" className="text-gray-300 hover:text-white text-sm">
                EPA Air Quality
              </a>
              <a href="https://www.mass.gov/orgs/massachusetts-department-of-environmental-protection" className="text-gray-300 hover:text-white text-sm">
                MassDEP
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-400">
            <p>© 2025 Boston Air Quality Project. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard; 