import { DailyForecast } from './daily-forecast'
import { HourlyForecast } from './hourly-forecast'
import { WeatherInfo } from './weather-info'

export function WeatherData() {
  return (
    <div className="flex w-full gap-400">
      <div className="flex-1 space-y-600">
        <WeatherInfo />
        <DailyForecast />
      </div>
      <HourlyForecast />
    </div>
  )
}
