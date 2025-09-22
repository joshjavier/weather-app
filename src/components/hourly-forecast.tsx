function HourlyWeatherCard({
  icon,
  time,
  temp,
}: {
  icon: { src: string; alt: string }
  time: string
  temp: number
}) {
  return (
    <div className="rounded-8 flex items-center gap-100 border border-neutral-600 bg-neutral-700 py-125 pr-200 pl-150">
      <img src={icon.src} alt={icon.alt} width={40} height={40} />
      <p className="text-preset-5 font-medium">{time}</p>
      <p className="text-preset-7 ml-auto">{temp}&deg;</p>
    </div>
  )
}

export function HourlyForecast() {
  return (
    <div className="rounded-20 flex max-w-[384px] flex-1 flex-col gap-200 bg-neutral-800 p-300">
      <div className="flex items-center justify-between">
        <h2 className="text-preset-5">Hourly Forecast</h2>
      </div>
      <HourlyWeatherCard
        icon={{ src: '/images/icon-overcast.webp', alt: 'Overcast' }}
        time="3 PM"
        temp={20}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-partly-cloudy.webp', alt: 'Partly cloudy' }}
        time="4 PM"
        temp={20}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-sunny.webp', alt: 'Sunny' }}
        time="5 PM"
        temp={20}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-overcast.webp', alt: 'Overcast' }}
        time="6 PM"
        temp={19}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-snow.webp', alt: 'Snow' }}
        time="7 PM"
        temp={18}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-fog.webp', alt: 'Fog' }}
        time="8 PM"
        temp={18}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-snow.webp', alt: 'Snow' }}
        time="9 PM"
        temp={17}
      />
      <HourlyWeatherCard
        icon={{ src: '/images/icon-overcast.webp', alt: 'Overcast' }}
        time="10 PM"
        temp={17}
      />
    </div>
  )
}
