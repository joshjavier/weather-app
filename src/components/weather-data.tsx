import { DailyForecast } from './daily-forecast'
import { HourlyForecast } from './hourly-forecast'
import { WeatherInfo } from './weather-info'

export function WeatherData() {
  return (
    <div className="flex w-full gap-400 max-lg:flex-col">
      <div className="space-y-400 lg:basis-800/1216 lg:space-y-600">
        <WeatherInfo />
        <DailyForecast />
      </div>
      <HourlyForecast className="lg:max-w-[384px] lg:basis-384/1216" />
    </div>
  )
}
