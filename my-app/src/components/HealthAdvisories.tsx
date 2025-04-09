import React from 'react';

interface HealthAdvisoriesProps {
  aqi: number;
}

const HealthAdvisories: React.FC<HealthAdvisoriesProps> = ({ aqi }) => {
  // We'll use the AQI category directly in the Boston-specific health context
  // so we don't need to store it separately

  // Boston-specific health context
  const getBostonHealthContext = () => {
    if (aqi <= 50) {
      return {
        title: 'Great Air Quality Today',
        description: 'Boston air quality is good today. This is an excellent time for outdoor activities.',
        tips: [
          'Enjoy outdoor activities in Boston parks or the Harborwalk',
          'Great day for cycling on the Emerald Necklace',
          'Perfect conditions for outdoor exercise'
        ]
      };
    } else if (aqi <= 100) {
      return {
        title: 'Moderate Air Quality',
        description: 'Boston\'s air quality is acceptable for most people, but sensitive groups may want to take precautions.',
        tips: [
          'Sensitive individuals should consider limiting prolonged outdoor exertion',
          'Good idea to check air quality if planning extended outdoor activities',
          'Stay hydrated when spending time outside'
        ]
      };
    } else if (aqi <= 150) {
      return {
        title: 'Unhealthy for Sensitive Groups',
        description: 'Members of sensitive groups may experience health effects. East Boston residents near Logan Airport should take extra precautions.',
        tips: [
          'Children, elderly, and those with respiratory conditions should limit outdoor activities',
          'Consider indoor air filtration, especially near high-traffic areas or Logan Airport',
          'Keep windows closed, especially during rush hour periods'
        ]
      };
    } else {
      return {
        title: 'Unhealthy Air Quality',
        description: 'Health risks increased for everyone, with greater impact in areas near Logan Airport, Chelsea Creek, and major highways.',
        tips: [
          'Limit outdoor physical activities, especially near major roadways',
          'Use HEPA air purifiers indoors if available',
          'East Boston residents should stay updated on air quality forecasts',
          'Consider wearing N95 masks if you must be outside for extended periods'
        ]
      };
    }
  };

  const healthContext = getBostonHealthContext();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{healthContext.title}</h2>
      <p className="text-gray-700 mb-4">{healthContext.description}</p>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Health Recommendations:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {healthContext.tips.map((tip, index) => (
            <li key={index} className="text-gray-700">{tip}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 bg-blue-50 p-3 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Boston Air Quality Impact</h3>
        <p className="text-gray-700">
          East Boston faces unique air quality challenges due to Logan Airport operations, 
          interstate highways (I-90, Rt. 1A), and industrial activities along Chelsea Creek. 
          These factors can contribute to higher levels of particulate matter and nitrogen oxides compared to other areas of the city.
        </p>
        <p className="text-gray-700 mt-2">
          East Boston has higher rates of asthma and respiratory conditions compared to the Boston average. 
          Children and elderly residents are particularly vulnerable to air pollution exposure.
        </p>
      </div>
    </div>
  );
};

export default HealthAdvisories; 