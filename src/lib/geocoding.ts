/**
 * Geocoding API response types based on Open-Meteo Geocoding API
 */
export interface Location {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation?: number
  feature_code: string
  country_code: string
  admin1_id?: number
  admin2_id?: number
  admin3_id?: number
  admin4_id?: number
  timezone: string
  population?: number
  postcodes?: string[]
  country: string
  admin1?: string
  admin2?: string
  admin3?: string
  admin4?: string
}

export interface GeocodingResponse {
  results?: Location[]
  generationtime_ms: number
}

/**
 * Fetches locations matching the search term using Open-Meteo Geocoding API
 * @param searchTerm - The search term to find locations for
 * @param count - Maximum number of results to return (default: 10, max: 100)
 * @param language - Language for the search results (default: 'en')
 * @param format - Response format (default: 'json')
 * @returns Promise that resolves to an array of matching locations
 */
export async function fetchLocations(
  searchTerm: string,
  count: number = 10,
  language: string = 'en',
  format: string = 'json',
): Promise<Location[]> {
  if (!searchTerm.trim()) {
    return []
  }

  try {
    const url = new URL('https://geocoding-api.open-meteo.com/v1/search')
    url.searchParams.set('name', searchTerm.trim())
    url.searchParams.set('count', Math.min(count, 100).toString())
    url.searchParams.set('language', language)
    url.searchParams.set('format', format)

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(
        `Geocoding API error: ${response.status} ${response.statusText}`,
      )
    }

    const data: GeocodingResponse = await response.json()

    return data.results || []
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch locations',
    )
  }
}

/**
 * Formats a location for display purposes
 * @param location - Location object from the API
 * @returns Formatted string representation of the location
 */
export function formatLocationDisplay(location: Location): string {
  const parts = [location.name]

  if (location.admin1) {
    parts.push(location.admin1)
  }

  if (location.country) {
    parts.push(location.country)
  }

  return parts.join(', ')
}

/**
 * Debounced version of fetchLocations for use in search inputs
 * @param searchTerm - The search term to find locations for
 * @param delay - Debounce delay in milliseconds (default: 300)
 * @param count - Maximum number of results to return
 * @returns Promise that resolves to an array of matching locations
 */
export function createDebouncedLocationFetcher(delay: number = 300) {
  let timeoutId: NodeJS.Timeout | null = null

  return function debouncedFetchLocations(
    searchTerm: string,
    count?: number,
  ): Promise<Location[]> {
    return new Promise((resolve, reject) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(async () => {
        try {
          const locations = await fetchLocations(searchTerm, count)
          resolve(locations)
        } catch (error) {
          reject(error)
        }
      }, delay)
    })
  }
}
