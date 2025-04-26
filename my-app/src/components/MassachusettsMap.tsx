import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Location } from '../types';


// Custom div icons for different location types
const getLocationIcon = (location: Location, isSelected: boolean): L.DivIcon => {
  let backgroundColor = '#3388ff'; // Default blue
  let borderColor = 'white';
  let size = isSelected ? 24 : 20;
  
  if (location.type === 'focus') {
    backgroundColor = '#FF6B6B'; // Red for focus area
    size = isSelected ? 30 : 26;
  } else if (location.type === 'industrial') {
    backgroundColor = '#FFA500'; // Orange for industrial areas
  } else if (location.type === 'wealthy') {
    backgroundColor = '#32CD32'; // Green for wealthy areas
  } else if (location.type === 'custom') {
    backgroundColor = '#9370DB'; // Purple for custom user-selected locations
    size = isSelected ? 28 : 24;
  }
  
  if (isSelected) {
    borderColor = '#ffff00'; // Yellow border for selected location
  }
  
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${backgroundColor}; width: ${size}px; height: ${size}px; border-radius: 50%; border: 3px solid ${borderColor}; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2]
  });
};

// Component to handle map clicks and add custom pins
const MapClickHandler: React.FC<{
  onMapClick: (lat: number, lng: number) => void
}> = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    }
  });
  
  return null;
};

interface MassachusettsMapProps {
  locations: Location[];
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

const MassachusettsMap: React.FC<MassachusettsMapProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationChange
}) => {
  const [customPinLocation, setCustomPinLocation] = useState<Location | null>(null);
  
  // Fix for Leaflet icon issues in webpack
  useEffect(() => {
    // Fix Leaflet icon for webpack
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  // Set customPinLocation when selectedLocation is a custom type
  useEffect(() => {
    if (selectedLocation.type === 'custom') {
      setCustomPinLocation(selectedLocation);
    }
  }, [selectedLocation]);

  // Get initial map center and zoom based on selected location
  const getInitialCenter = (): [number, number] => {
    // If East Boston is selected, center on it
    if (selectedLocation.name === 'East Boston') {
      return [selectedLocation.latitude, selectedLocation.longitude];
    }
    // Otherwise center the map to show more of Massachusetts
    return [42.1085, -71.5645]; // Center of Massachusetts
  };
  
  const getInitialZoom = (): number => {
    // If East Boston is selected, use closer zoom
    if (selectedLocation.name === 'East Boston') {
      return 12;
    }
    // Otherwise use a wider zoom to see more of Massachusetts
    return 8;
  };

  // Handle map click to create a custom location
  const handleMapClick = (lat: number, lng: number) => {
    // Get the address or city name using reverse geocoding (simplified for now)
    const newCustomLocation: Location = {
      name: `Custom Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
      latitude: lat,
      longitude: lng,
      timezone: 'America/New_York',
      description: 'Custom location selected by user',
      type: 'custom'
    };
    
    setCustomPinLocation(newCustomLocation);
    onLocationChange(newCustomLocation);
  };

  return (
    <div className="w-full h-[600px] relative">
      {/* Map Legend positioned absolutely over the map */}
      <div className="absolute top-5 right-5 bg-white p-3 rounded-lg shadow-lg z-[1000] border border-gray-200">
        <h3 className="font-bold text-sm mb-2 text-center">Location Types</h3>
        <div className="space-y-2">
          <div className="flex items-center text-xs">
            <div className="w-4 h-4 rounded-full bg-[#FF6B6B] mr-2 border border-white shadow-sm"></div>
            <span>Focus Area</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-4 h-4 rounded-full bg-[#FFA500] mr-2 border border-white shadow-sm"></div>
            <span>Industrial Areas</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-4 h-4 rounded-full bg-[#32CD32] mr-2 border border-white shadow-sm"></div>
            <span>Affluent Areas</span>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-4 h-4 rounded-full bg-[#9370DB] mr-2 border border-white shadow-sm"></div>
            <span>Custom Location</span>
          </div>
          <div className="flex items-center text-xs italic text-gray-500 mt-1 pt-1 border-t border-gray-200">
            <div className="w-3 h-3 rounded-full border-2 border-yellow-400 mr-2"></div>
            <span>Selected location</span>
          </div>
        </div>
      </div>
      
      {/* Map instructions */}
      <div className="absolute top-20 left-5 bg-white p-3 rounded-lg shadow-lg z-[1000] border border-gray-200">
        <h3 className="font-bold text-sm mb-1 text-center">📍 Click anywhere on the map</h3>
        <p className="text-xs text-gray-600">to get air quality data for that location</p>
      </div>
      
      <MapContainer
        key={`map-${selectedLocation.name}`}
        center={getInitialCenter()}
        zoom={getInitialZoom()}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Map click handler for custom pins */}
        <MapClickHandler onMapClick={handleMapClick} />
        
        {/* Place markers for all predefined locations */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={getLocationIcon(location, location.name === selectedLocation.name)}
            eventHandlers={{
              click: () => onLocationChange(location),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{location.name}</h3>
                {location.description && (
                  <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                )}
                <button
                  onClick={() => onLocationChange(location)}
                  className="mt-2 text-sm text-blue-500 hover:underline"
                >
                  Show air quality data
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {/* Custom pin marker if exists */}
        {customPinLocation && (
          <Marker
            position={[customPinLocation.latitude, customPinLocation.longitude]}
            icon={getLocationIcon(customPinLocation, customPinLocation.name === selectedLocation.name)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{customPinLocation.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Lat: {customPinLocation.latitude.toFixed(4)}, Lng: {customPinLocation.longitude.toFixed(4)}
                </p>
                <button
                  onClick={() => onLocationChange(customPinLocation)}
                  className="mt-2 text-sm text-blue-500 hover:underline"
                >
                  Update air quality data
                </button>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MassachusettsMap; 