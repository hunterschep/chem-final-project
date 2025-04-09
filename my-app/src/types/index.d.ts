export interface AirQualityData {
  time: string[];
  pm10: number[];
  pm25: number[];
  usAqi: number[];
  usAqiPm25: number[];
  usAqiPm10: number[];
  no2?: number[];
  o3?: number[];
  so2?: number[];
  co?: number[];
}

export interface WeatherData {
  time: string[];
  temperature?: number[];
  windSpeed?: number[];
  windDirection?: number[];
  precipitation?: number[];
}

export interface Location {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface AirQualityCategory {
  range: [number, number];
  label: string;
  color: string;
  healthImplications: string;
  cautionaryStatement: string;
}

export type AirQualityIndex = 'usAqi' | 'usAqiPm25' | 'usAqiPm10' | 'o3' | 'no2' | 'so2' | 'co'; 