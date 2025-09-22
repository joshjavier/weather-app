import { DailyForecast } from './daily-forecast'
import { WeatherInfo } from './weather-info'

export function WeatherData() {
  return (
    <div className="flex w-full gap-400">
      <div className="space-y-600">
        <WeatherInfo />
        <DailyForecast />
      </div>
      <div>Hourly Forecast</div>
    </div>
  )
}
