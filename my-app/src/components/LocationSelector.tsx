import React from 'react';
import { Location } from '../types';

interface LocationSelectorProps {
  locations: Location[];
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  locations,
  selectedLocation,
  onLocationChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Location</h2>
        <select
          className="block w-64 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={selectedLocation.name}
          onChange={(e) => {
            const selected = locations.find((loc) => loc.name === e.target.value);
            if (selected) {
              onLocationChange(selected);
            }
          }}
        >
          {locations.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-between border-t border-gray-200 pt-3">
        <div>
          <span className="text-gray-600 text-sm">Latitude:</span>
          <span className="ml-1 font-medium">{selectedLocation.latitude.toFixed(4)}°</span>
        </div>
        <div>
          <span className="text-gray-600 text-sm">Longitude:</span>
          <span className="ml-1 font-medium">{selectedLocation.longitude.toFixed(4)}°</span>
        </div>
        <div>
          <span className="text-gray-600 text-sm">Timezone:</span>
          <span className="ml-1 font-medium">{selectedLocation.timezone}</span>
        </div>
      </div>
      
      {selectedLocation.name === "East Boston" && (
        <div className="mt-3 bg-blue-50 p-2 rounded text-sm text-gray-700">
          East Boston is particularly affected by air pollution from Logan Airport, major highways, and industrial areas near Chelsea Creek.
        </div>
      )}
    </div>
  );
};

export default LocationSelector; 