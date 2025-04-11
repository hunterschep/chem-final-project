import { fetchWeatherApi } from 'openmeteo';
import { AirQualityData, Location, WeatherData } from '../types';

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Helper function to convert Float32Array to regular number array with rounding
const toNumberArray = (array: Float32Array): number[] => {
  return Array.from(array).map(value => Number(value.toFixed(2)));
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

    console.log(`Making air quality API call for ${location.name} with params:`, JSON.stringify(params));

    const url = "https://air-quality-api.open-meteo.com/v1/air-quality";
    const responses = await fetchWeatherApi(url, params);
    
    // Process first location
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    
    const hourly = response.hourly()!;
    
    // Get all values from the API and convert Float32Array to number[] with rounding
    const weatherData = {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000).toISOString()
      ),
      pm10: toNumberArray(hourly.variables(0)!.valuesArray()!),
      pm25: toNumberArray(hourly.variables(1)!.valuesArray()!),
      usAqi: toNumberArray(hourly.variables(2)!.valuesArray()!),
      usAqiPm25: toNumberArray(hourly.variables(3)!.valuesArray()!),
      usAqiPm10: toNumberArray(hourly.variables(4)!.valuesArray()!),
      no2: toNumberArray(hourly.variables(5)!.valuesArray()!),
      o3: toNumberArray(hourly.variables(6)!.valuesArray()!),
      so2: toNumberArray(hourly.variables(7)!.valuesArray()!),
      co: toNumberArray(hourly.variables(8)!.valuesArray()!)
    };
    
    // Log a sample of the data to verify it's different
    console.log(`Air quality data for ${location.name} - Sample AQI values:`, 
      weatherData.usAqi.slice(0, 3), 
      `PM2.5 sample:`, 
      weatherData.pm25.slice(0, 3)
    );
    
    // Return formatted data
    return {
      time: weatherData.time,
      pm10: weatherData.pm10,
      pm25: weatherData.pm25,
      usAqi: weatherData.usAqi,
      usAqiPm25: weatherData.usAqiPm25,
      usAqiPm10: weatherData.usAqiPm10,
      no2: weatherData.no2,
      o3: weatherData.o3,
      so2: weatherData.so2,
      co: weatherData.co
    };
  } catch (error) {
    console.error('Error fetching air quality data:', error);
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

    console.log(`Making weather API call for ${location.name} with params:`, JSON.stringify(params));

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Process first location
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    
    const hourly = response.hourly()!;
    
    // Get all values from the API and convert Float32Array to number[] with rounding
    const weatherData = {
      time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000).toISOString()
      ),
      temperature: toNumberArray(hourly.variables(0)!.valuesArray()!),
      windSpeed: toNumberArray(hourly.variables(1)!.valuesArray()!),
      windDirection: toNumberArray(hourly.variables(2)!.valuesArray()!),
      precipitation: toNumberArray(hourly.variables(3)!.valuesArray()!)
    };
    
    // Log a sample of the data to verify it's different
    console.log(`Weather data for ${location.name} - Sample temperature values:`, 
      weatherData.temperature.slice(0, 3), 
      `Wind speed sample:`, 
      weatherData.windSpeed.slice(0, 3)
    );
    
    // Return formatted data
    return {
      time: weatherData.time,
      temperature: weatherData.temperature,
      windSpeed: weatherData.windSpeed,
      windDirection: weatherData.windDirection,
      precipitation: weatherData.precipitation
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}; 