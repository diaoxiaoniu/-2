export enum WeatherType {
  WIND = 'WIND',
  RAIN = 'RAIN',
  SUNNY = 'SUNNY',
  SNOW = 'SNOW'
}

export interface WeatherData {
  temp: number;
  high: number;
  low: number;
  humidity: string;
  windSpeed: string;
  uv?: number;
  precipitation?: string;
}

export const MOCK_DATA: Record<WeatherType, WeatherData> = {
  [WeatherType.SUNNY]: { temp: 28, high: 31, low: 22, humidity: '45%', windSpeed: '12 km/h', uv: 8 },
  [WeatherType.RAIN]: { temp: 19, high: 21, low: 16, humidity: '92%', windSpeed: '18 km/h', precipitation: '12mm' },
  [WeatherType.SNOW]: { temp: -2, high: 1, low: -8, humidity: '30%', windSpeed: '22 km/h', precipitation: '15cm' },
  [WeatherType.WIND]: { temp: 15, high: 18, low: 12, humidity: '55%', windSpeed: '45 km/h' },
};