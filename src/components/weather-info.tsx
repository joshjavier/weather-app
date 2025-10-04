import { formatDate } from '@/lib/utils'

type Icon =
  | 'drizzle'
  | 'fog'
  | 'overcast'
  | 'partly-cloudy'
  | 'rain'
  | 'snow'
  | 'storm'
  | 'sunny'

interface WeatherInfoProps {
  location: string
  date: string
  icon: Icon
  temp: number
}

export function WeatherInfo({ location, date, icon, temp }: WeatherInfoProps) {
  return (
    <div className="gap-250 lg:gap-400 flex flex-col">
      <div className="rounded-20 -bg-linear-67 px-300 gap-200 flex min-h-[286px] items-center justify-between from-blue-500 to-blue-700 max-sm:flex-col max-sm:justify-center">
        <div className="max-sm:text-center">
          <p className="text-preset-4 mb-150">{location}</p>
          <p className="text-preset-6 opacity-80">{formatDate(date)}</p>
        </div>
        <div className="gap-250 flex items-center">
          <img
            src={`/images/icon-${icon}.webp`}
            alt={icon}
            width={120}
            height={120}
          />
          <p className="text-preset-1 italic max-[375px]:ml-[clamp(-2rem,-13.6364rem+58.1818vw,0rem)] max-[375px]:text-[clamp(5rem,-0.8182rem+29.0909vw,6rem)]">
            {temp}&deg;
          </p>
        </div>
      </div>

      <div>Weather Details</div>
    </div>
  )
}
