import { WeatherInfo } from './weather-info'

export function WeatherData() {
  return (
    <div className="flex w-full gap-400">
      <div>
        <WeatherInfo />
        <div>Daily Forecast</div>
      </div>
      <div>Hourly Forecast</div>
    </div>
  )
}
