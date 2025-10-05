/**
 * Weather condition interface
 */
export interface WeatherCondition {
  description: string
  imageUrl: string
}

/**
 * WMO Weather interpretation codes mapping
 * Based on: https://open-meteo.com/en/docs#weather_variable_documentation
 */
const WMO_WEATHER_CODES: Record<number, WeatherCondition> = {
  0: {
    description: 'Clear sky',
    imageUrl: '/images/weather/icon-sunny.webp',
  },
  1: {
    description: 'Mainly clear',
    imageUrl: '/images/weather/icon-partly-cloudy.webp',
  },
  2: {
    description: 'Partly cloudy',
    imageUrl: '/images/weather/icon-partly-cloudy.webp',
  },
  3: {
    description: 'Overcast',
    imageUrl: '/images/weather/icon-overcast.webp',
  },
  45: {
    description: 'Fog',
    imageUrl: '/images/weather/icon-fog.webp',
  },
  48: {
    description: 'Depositing rime fog',
    imageUrl: '/images/weather/icon-fog.webp',
  },
  51: {
    description: 'Light drizzle',
    imageUrl: '/images/weather/icon-drizzle.webp',
  },
  53: {
    description: 'Moderate drizzle',
    imageUrl: '/images/weather/icon-drizzle.webp',
  },
  55: {
    description: 'Dense drizzle',
    imageUrl: '/images/weather/icon-drizzle.webp',
  },
  56: {
    description: 'Light freezing drizzle',
    imageUrl: '/images/weather/icon-drizzle.webp',
  },
  57: {
    description: 'Dense freezing drizzle',
    imageUrl: '/images/weather/icon-drizzle.webp',
  },
  61: {
    description: 'Slight rain',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  63: {
    description: 'Moderate rain',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  65: {
    description: 'Heavy rain',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  66: {
    description: 'Light freezing rain',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  67: {
    description: 'Heavy freezing rain',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  71: {
    description: 'Slight snow fall',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  73: {
    description: 'Moderate snow fall',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  75: {
    description: 'Heavy snow fall',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  77: {
    description: 'Snow grains',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  80: {
    description: 'Slight rain showers',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  81: {
    description: 'Moderate rain showers',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  82: {
    description: 'Violent rain showers',
    imageUrl: '/images/weather/icon-rain.webp',
  },
  85: {
    description: 'Slight snow showers',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  86: {
    description: 'Heavy snow showers',
    imageUrl: '/images/weather/icon-snow.webp',
  },
  95: {
    description: 'Thunderstorm',
    imageUrl: '/images/weather/icon-storm.webp',
  },
  96: {
    description: 'Thunderstorm with slight hail',
    imageUrl: '/images/weather/icon-storm.webp',
  },
  99: {
    description: 'Thunderstorm with heavy hail',
    imageUrl: '/images/weather/icon-storm.webp',
  },
}

/**
 * Get weather condition information from WMO weather code
 * @param weatherCode - WMO weather code (0-99)
 * @returns Weather condition with description and image URL
 * @throws Error if weather code is not recognized
 */
export function getWeatherCondition(weatherCode: number): WeatherCondition {
  const condition = WMO_WEATHER_CODES[weatherCode]

  if (!condition) {
    throw new Error(`Unknown weather code: ${weatherCode}`)
  }

  return condition
}

/**
 * Get weather description from WMO weather code
 * @param weatherCode - WMO weather code (0-99)
 * @returns Weather description string
 */
export function getWeatherDescription(weatherCode: number): string {
  return getWeatherCondition(weatherCode).description
}

/**
 * Get weather image URL from WMO weather code
 * @param weatherCode - WMO weather code (0-99)
 * @returns Weather image URL string
 */
export function getWeatherImageUrl(weatherCode: number): string {
  return getWeatherCondition(weatherCode).imageUrl
}

/**
 * Check if a weather code is valid
 * @param weatherCode - Weather code to validate
 * @returns True if the weather code exists in the mapping
 */
export function isValidWeatherCode(weatherCode: number): boolean {
  return weatherCode in WMO_WEATHER_CODES
}

/**
 * Get all available weather codes
 * @returns Array of all valid weather codes
 */
export function getAllWeatherCodes(): number[] {
  return Object.keys(WMO_WEATHER_CODES).map(Number)
}
