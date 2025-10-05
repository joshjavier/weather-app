import { getWeatherDescription, getWeatherImageUrl } from '@/lib/weather-codes'

interface WeatherCardProps {
  day: string
  weatherCode: number
  maxTemp: number
  minTemp: number
}

function WeatherCard({ day, weatherCode, maxTemp, minTemp }: WeatherCardProps) {
  return (
    <div className="bg-card rounded-12 gap-200 px-125 py-200 flex flex-col items-center border">
      <div className="text-preset-6">{day}</div>
      <img
        src={getWeatherImageUrl(weatherCode)}
        alt={getWeatherDescription(weatherCode)}
        width={60}
        height={60}
      />
      <div className="flex items-center justify-between self-stretch">
        <div className="text-preset-7">{maxTemp}&deg;</div>
        <div className="text-preset-7 text-muted-foreground">
          {minTemp}&deg;
        </div>
      </div>
    </div>
  )
}

export function DailyForecast() {
  return (
    <div>
      <h2 className="mb-250 text-preset-5">Daily forecast</h2>
      <div className="gap-200 grid grid-cols-[repeat(auto-fit,minmax(77px,1fr))]">
        <WeatherCard day="Tue" weatherCode={61} maxTemp={20} minTemp={14} />
        <WeatherCard day="Wed" weatherCode={51} maxTemp={21} minTemp={15} />
        <WeatherCard day="Thu" weatherCode={0} maxTemp={24} minTemp={14} />
        <WeatherCard day="Fri" weatherCode={2} maxTemp={25} minTemp={13} />
        <WeatherCard day="Sat" weatherCode={95} maxTemp={21} minTemp={15} />
        <WeatherCard day="Sun" weatherCode={71} maxTemp={25} minTemp={16} />
        <WeatherCard day="Mon" weatherCode={45} maxTemp={24} minTemp={15} />
      </div>
    </div>
  )
}
