// Open-Meteo's Geocoding API accepts a search term and returns a list
// of matching locations. See https://open-meteo.com/en/docs/geocoding-api

type Location = Record<string, string | number> & {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  timezone: string
  feature_code: string
  country_code: string
  country: string
  country_id: string
  population: number
  postcodes: string[]
}

type LocationData = {
  results?: Location[]
  generationtime_ms: number
}

type LocationError = {
  error: true
  reason: string
}

function isLocationError(value: unknown): value is LocationError {
  return (
    typeof value === 'object' &&
    value !== null &&
    'error' in value &&
    'reason' in value
  )
}

export async function fetchLocations(
  searchTerm: string,
): Promise<LocationData['results']> {
  const apiUrl = 'https://geocoding-api.open-meteo.com/v1/search'
  const params = new URLSearchParams()
  params.append('name', searchTerm)

  const response = await fetch(`${apiUrl}?${params}`)
  const result = await response.json()

  // Manually throw on errors not handled by fetch
  if (!response.ok) {
    if (isLocationError(result)) {
      throw new Error(result.reason)
    }
    throw new Error(`Response status: ${response.status}`)
  }

  return result.results ?? []
}
