import React from 'react';

interface HealthAdvisoriesProps {
  aqi: number;
}

const HealthAdvisories: React.FC<HealthAdvisoriesProps> = ({ aqi }) => {
  // Boston-specific health context tailored to East Boston conditions
  const getHealthContext = () => {
    if (aqi <= 50) {
      return {
        title: 'Good Air Quality Today',
        description: 'Air quality is good today, with lower pollution levels across East Boston and surrounding areas.',
        tips: [
          'Good opportunity for outdoor activities in local parks',
          'Great day for walking or cycling in the neighborhood',
          'Consider opening windows for fresh air circulation (unless you live immediately next to a major road)'
        ],
        vulnerable: 'Even on good air quality days, sensitive individuals in areas very close to Logan Airport or major roadways may still want to monitor their symptoms.'
      };
    } else if (aqi <= 100) {
      return {
        title: 'Moderate Air Quality',
        description: 'While acceptable for most people, East Boston residents near Logan Airport, Route 1A, or Sumner/Callahan Tunnels may experience higher localized pollution not captured in the overall AQI.',
        tips: [
          'Sensitive individuals should consider limiting prolonged outdoor activity near high-traffic areas',
          'If outdoors near the airport, consider timing activities when flight activity is lower',
          'Using HEPA air purifiers indoors can help reduce particulate levels',
          'Keep windows closed if you notice aircraft or traffic odors'
        ],
        vulnerable: 'Children with asthma and older adults with respiratory conditions should be particularly cautious in areas near Logan Airport or the Chelsea Creek industrial zone.'
      };
    } else if (aqi <= 150) {
      return {
        title: 'Unhealthy for Sensitive Groups',
        description: 'Parts of East Boston may experience even higher pollution levels than indicated by the regional AQI, especially in areas downwind of Logan Airport or near the Sumner/Callahan Tunnels.',
        tips: [
          'Children, elderly, and those with respiratory conditions should limit outdoor activities',
          'When possible, time any necessary outdoor activities for early morning when traffic and flight operations may be lower',
          'Keep windows closed, especially if you\'re within 300 meters of a major road or flight path',
          'Use HEPA air filtration in homes, particularly in bedrooms overnight'
        ],
        vulnerable: 'East Boston has 4× higher childhood asthma rates compared to less polluted areas, according to the Logan Airport Health Study. Take extra precautions with children who have respiratory conditions.'
      };
    } else {
      return {
        title: 'Unhealthy Air Quality',
        description: 'Health risks are increased for everyone in East Boston, with potentially higher impacts in areas near Logan Airport, Chelsea Creek industrial zone, and major highway corridors.',
        tips: [
          'Limit all outdoor physical activities, especially within 300 meters of major roadways',
          'Keep all windows closed and use HEPA air purifiers if available',
          'Consider rescheduling non-essential outdoor plans',
          'If you must be outside, N95 masks can help filter particulate pollution',
          'Check on elderly neighbors and those with known respiratory conditions'
        ],
        vulnerable: 'Those with asthma, COPD, or heart conditions should be especially cautious. East Boston residents have 2× higher COPD rates according to health studies.'
      };
    }
  };

  const healthContext = getHealthContext();

  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <h2 className="text-lg font-bold mb-3 pb-2 border-b">{healthContext.title}</h2>
      <p className="text-gray-700 mb-4 text-sm">{healthContext.description}</p>
      
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-blue-700">Recommendations:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {healthContext.tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-lg">
        <div className="flex items-start mb-3">
          <div className="bg-red-100 p-1 rounded-full mr-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Vulnerable populations: </span>
            {healthContext.vulnerable}
          </p>
        </div>
        
        <h3 className="text-sm font-semibold text-blue-800 mb-2">East Boston's Environmental Justice Context</h3>
        <p className="text-xs text-gray-700">
          East Boston faces disproportionate air pollution burdens from Logan Airport operations, 
          highway traffic (Route 1A, Sumner/Callahan Tunnels), and Chelsea Creek industrial activities.
          With only ~7% tree canopy (lowest in Boston) and predominantly working-class immigrant communities,
          residents often experience higher exposures with fewer resources for mitigation.
        </p>
        <div className="mt-3 text-xs text-gray-500 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Monitoring studies show that AQI readings may not fully capture local pollution hotspots near transportation sources.
        </div>
      </div>
    </div>
  );
};

export default HealthAdvisories; 