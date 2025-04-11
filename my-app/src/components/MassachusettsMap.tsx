import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Location } from '../types';

// Fix for default leaflet marker icons
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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

// Component to set map view to selected location
const MapCenter: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      try {
        map.setView(position, 13);
      } catch (error) {
        console.error("Error setting map view:", error);
      }
    }
  }, [position, map]);
  
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

  // Legend component
  const MapLegend = () => (
    <div className="absolute top-5 right-5 bg-white p-4 rounded-lg shadow-lg z-50 border-2 border-gray-300">
      <h3 className="font-bold text-lg mb-3 text-center border-b pb-2">Location Types</h3>
      <div className="space-y-3">
        <div>
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-[#FF6B6B] mr-2 border-2 border-white shadow-sm"></div>
            <span className="font-semibold">Focus Area</span>
          </div>
          <p className="text-xs text-gray-600 ml-8">Environmental justice focus areas with significant air quality concerns</p>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-[#FFA500] mr-2 border-2 border-white shadow-sm"></div>
            <span className="font-semibold">Industrial Areas</span>
          </div>
          <p className="text-xs text-gray-600 ml-8">Cities with industrial activity and diverse populations facing potential air quality issues</p>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-[#32CD32] mr-2 border-2 border-white shadow-sm"></div>
            <span className="font-semibold">Affluent Areas</span>
          </div>
          <p className="text-xs text-gray-600 ml-8">Wealthy communities with typically better environmental conditions</p>
        </div>
      </div>
      <div className="mt-3 pt-2 border-t text-xs italic text-gray-500">
        Yellow border indicates currently selected location
      </div>
    </div>
  );

  return (
    <div className="w-full h-[600px] relative">
      <div className="bg-blue-100 p-3 mb-2 rounded-md text-sm">
        <p className="mb-1 font-semibold">Environmental Justice and Air Quality Map</p>
        <p>This map compares air quality across Massachusetts locations with different socioeconomic profiles. 
        <span className="font-medium"> Look for the color-coded markers:</span> <span className="text-red-500 font-medium">red</span> for our East Boston focus area, 
        <span className="text-orange-500 font-medium"> orange</span> for industrial areas, and <span className="text-green-600 font-medium">green</span> for affluent communities.
        See the detailed legend in the top-right corner of the map.</p>
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
        
        {/* Place markers for all locations */}
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
        
        <MapLegend />
      </MapContainer>
    </div>
  );
};

export default MassachusettsMap; 