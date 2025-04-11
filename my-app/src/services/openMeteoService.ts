import { fetchWeatherApi } from 'openmeteo';
import { AirQualityData, Location, WeatherData } from '../types';

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Helper function to convert Float32Array to regular number array with rounding
const toNumberArray = (array: Float32Array): number[] => {
  return Array.from(array).map(value => Number(value.toFixed(2)));
};

// Common function to handle API calls
const fetchOpenMeteoData = async <T>(
  url: string, 
  params: Record<string, any>, 
  variableMapper: (hourly: any, time: string[]) => T
): Promise<T> => {
  const responses = await fetchWeatherApi(url, params);
  
  // Process first location
  const response = responses[0];
  
  // Get timezone offset
  const utcOffsetSeconds = response.utcOffsetSeconds();
  
  const hourly = response.hourly()!;
  
  // Create time array
  const time = range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
    (t) => new Date((t + utcOffsetSeconds) * 1000).toISOString()
  );
  
  // Use the provided mapper function to extract data
  return variableMapper(hourly, time);
};

export const fetchAirQualityData = async (location: Location): Promise<AirQualityData> => {
  try {
    const params = {
      latitude: location.latitude,
      longitude: location.longitude,
      hourly: ["pm10", "pm2_5", "us_aqi", "us_aqi_pm2_5", "us_aqi_pm10", "nitrogen_dioxide", "ozone", "sulphur_dioxide", "carbon_monoxide"],
      timezone: location.timezone,
      forecast_days: 3,
      domains: "cams_global", // Using global domain for global coverage
      cache_bust: new Date().getTime() // Add cache-busting parameter
    };

    const url = "https://air-quality-api.open-meteo.com/v1/air-quality";
    
    return await fetchOpenMeteoData<AirQualityData>(
      url, 
      params, 
      (hourly, time) => {
        // Extract all variables and convert to number arrays
        const pm10 = toNumberArray(hourly.variables(0)!.valuesArray()!);
        const pm25 = toNumberArray(hourly.variables(1)!.valuesArray()!);
        const usAqi = toNumberArray(hourly.variables(2)!.valuesArray()!);
        const usAqiPm25 = toNumberArray(hourly.variables(3)!.valuesArray()!);
        const usAqiPm10 = toNumberArray(hourly.variables(4)!.valuesArray()!);
        const no2 = toNumberArray(hourly.variables(5)!.valuesArray()!);
        const o3 = toNumberArray(hourly.variables(6)!.valuesArray()!);
        const so2 = toNumberArray(hourly.variables(7)!.valuesArray()!);
        const co = toNumberArray(hourly.variables(8)!.valuesArray()!);
        
        // Return formatted data
        return {
          time,
          pm10,
          pm25,
          usAqi,
          usAqiPm25,
          usAqiPm10,
          no2,
          o3,
          so2,
          co
        };
      }
    );
  } catch (error) {
    throw error;
  }
};

export const fetchWeatherData = async (location: Location): Promise<WeatherData> => {
  try {
    const params = {
      latitude: location.latitude,
      longitude: location.longitude,
      hourly: ["temperature_2m", "windspeed_10m", "winddirection_10m", "precipitation"],
      timezone: location.timezone,
      forecast_days: 3,
      cache_bust: new Date().getTime() // Add cache-busting parameter
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    
    return await fetchOpenMeteoData<WeatherData>(
      url, 
      params, 
      (hourly, time) => {
        // Extract all variables and convert to number arrays
        const temperature = toNumberArray(hourly.variables(0)!.valuesArray()!);
        const windSpeed = toNumberArray(hourly.variables(1)!.valuesArray()!);
        const windDirection = toNumberArray(hourly.variables(2)!.valuesArray()!);
        const precipitation = toNumberArray(hourly.variables(3)!.valuesArray()!);
        
        // Return formatted data
        return {
          time,
          temperature,
          windSpeed,
          windDirection,
          precipitation
        };
      }
    );
  } catch (error) {
    throw error;
  }
}; 