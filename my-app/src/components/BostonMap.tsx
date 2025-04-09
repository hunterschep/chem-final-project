import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Location } from '../types';

// Fix for default leaflet marker icons
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to set map view to selected location
const MapCenter: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(position, 13);
  }, [position, map]);
  
  return null;
};

interface BostonMapProps {
  locations: Location[];
  selectedLocation: Location;
  onLocationChange: (location: Location) => void;
}

const BostonMap: React.FC<BostonMapProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationChange
}) => {
  // Custom marker colors
  const getLocationClass = (location: Location): string => {
    return location.name === selectedLocation.name ? 'text-blue-600' : 'text-gray-500';
  };

  const eastBostonPosition: [number, number] = [42.3750, -71.0392]; // East Boston coordinates

  const EastBostonMarker = () => {
    return (
      <Marker 
        position={eastBostonPosition} 
        icon={L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="background-color: #FF6B6B; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })}
      >
        <Popup>
          <div className="p-2">
            <h3 className="font-bold text-lg mb-1">East Boston</h3>
            <p className="text-sm text-gray-600">Key monitoring location for air quality</p>
          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <div className="w-full h-[600px] relative">
      <MapContainer
        center={[42.3601, -71.0589]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <EastBostonMarker />
        
        {/* Place markers for all locations */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => onLocationChange(location),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className={`font-bold ${getLocationClass(location)}`}>{location.name}</h3>
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
        
        <MapCenter position={[selectedLocation.latitude, selectedLocation.longitude]} />
      </MapContainer>
    </div>
  );
};

export default BostonMap; 