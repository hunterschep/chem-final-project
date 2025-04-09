import React from 'react';
import { getAQICategory, getAQIColor } from '../utils/formatters';

interface AQIStatusProps {
  aqi: number;
  pm25?: number;
  pm10?: number;
}

const AQIStatus: React.FC<AQIStatusProps> = ({ aqi, pm25, pm10 }) => {
  const category = getAQICategory(aqi);
  
  return (
    <div className="space-y-6">
      {/* AQI Card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Air Quality Index</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-6xl font-bold" style={{ color: getAQIColor(aqi) }}>
              {aqi}
            </span>
            <span className="ml-4 text-2xl font-semibold text-gray-600">{category.label}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">{category.healthImplications}</p>
          {category.cautionaryStatement !== 'None' && (
            <p className="mt-2 text-gray-700 font-medium">{category.cautionaryStatement}</p>
          )}
        </div>
      </div>

      {/* PM2.5 and PM10 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PM2.5 Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">PM2.5</h3>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-gray-800">
              {pm25}
            </span>
            <span className="ml-2 text-lg text-gray-600">μg/m³</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Fine particulate matter (2.5 micrometers or smaller)</p>
        </div>

        {/* PM10 Card */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">PM10</h3>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-gray-800">
              {pm10}
            </span>
            <span className="ml-2 text-lg text-gray-600">μg/m³</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Coarse particulate matter (10 micrometers or smaller)</p>
        </div>
      </div>
    </div>
  );
};

export default AQIStatus; 