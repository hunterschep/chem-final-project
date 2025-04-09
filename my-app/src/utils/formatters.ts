import { AirQualityCategory } from '../types';

// Format date time
export const formatDateTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Format time
export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

// Get AQI category based on US EPA standards
export const getAQICategory = (aqi: number): AirQualityCategory => {
  if (aqi <= 50) {
    return {
      range: [0, 50],
      label: 'Good',
      color: '#00E400',
      healthImplications: 'Air quality is considered satisfactory, and air pollution poses little or no risk.',
      cautionaryStatement: 'None'
    };
  } else if (aqi <= 100) {
    return {
      range: [51, 100],
      label: 'Moderate',
      color: '#FFFF00',
      healthImplications: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
      cautionaryStatement: 'Unusually sensitive people should consider reducing prolonged or heavy exertion.'
    };
  } else if (aqi <= 150) {
    return {
      range: [101, 150],
      label: 'Unhealthy for Sensitive Groups',
      color: '#FF7E00',
      healthImplications: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
      cautionaryStatement: 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.'
    };
  } else if (aqi <= 200) {
    return {
      range: [151, 200],
      label: 'Unhealthy',
      color: '#FF0000',
      healthImplications: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
      cautionaryStatement: 'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.'
    };
  } else if (aqi <= 300) {
    return {
      range: [201, 300],
      label: 'Very Unhealthy',
      color: '#99004C',
      healthImplications: 'Health warnings of emergency conditions. The entire population is more likely to be affected.',
      cautionaryStatement: 'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.'
    };
  } else {
    return {
      range: [301, 500],
      label: 'Hazardous',
      color: '#7E0023',
      healthImplications: 'Health alert: everyone may experience more serious health effects.',
      cautionaryStatement: 'Everyone should avoid all outdoor exertion.'
    };
  }
};

export const getAQIColor = (aqi: number): string => {
  return getAQICategory(aqi).color;
}; 