import IconDropdown from '@/assets/icon-dropdown.svg?react'
import { getWeatherDescription, getWeatherImageUrl } from '@/lib/weather-codes'
import { Button } from './ui/button'

interface HourlyWeatherCardProps {
  weatherCode: number
  hour: string
  temp: number
}

function HourlyWeatherCard({
  weatherCode,
  hour,
  temp,
}: HourlyWeatherCardProps) {
  return (
    <div className="gap-100 pl-150 pr-200 rounded-8 flex h-[60px] items-center border bg-neutral-700">
      <img
        src={getWeatherImageUrl(weatherCode)}
        alt={getWeatherDescription(weatherCode)}
        width={40}
        height={40}
      />
      <div className="text-preset-5 font-medium">{hour}</div>
      <div className="text-preset-7 ml-auto">{temp}&deg;</div>
    </div>
  )
}

export function HourlyForecast() {
  return (
    <div className="bg-card rounded-20 px-200 py-250 sm:p-300">
      <div className="mb-200 gap-100 flex items-center justify-between">
        <h2 className="text-preset-5">Hourly forecast</h2>
        <Button
          variant="trigger"
          size="sm"
          className="gap-150 py-100 bg-neutral-600"
        >
          <span>Tuesday</span>
          <IconDropdown aria-hidden="true" className="size-[13px]" />
        </Button>
      </div>

      <div className="h-[592px] overflow-y-auto">
        <div className="gap-200 flex flex-col">
          <HourlyWeatherCard weatherCode={0} hour="3 PM" temp={20} />
          <HourlyWeatherCard weatherCode={0} hour="4 PM" temp={20} />
          <HourlyWeatherCard weatherCode={0} hour="5 PM" temp={20} />
          <HourlyWeatherCard weatherCode={0} hour="6 PM" temp={19} />
          <HourlyWeatherCard weatherCode={0} hour="7 PM" temp={18} />
          <HourlyWeatherCard weatherCode={0} hour="8 PM" temp={18} />
          <HourlyWeatherCard weatherCode={0} hour="9 PM" temp={17} />
          <HourlyWeatherCard weatherCode={0} hour="10 PM" temp={17} />
          <HourlyWeatherCard weatherCode={0} hour="11 PM" temp={17} />
        </div>
      </div>
    </div>
  )
}
