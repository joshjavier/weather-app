function WeatherCard({
  label,
  icon,
  min,
  max,
}: {
  label: string
  icon: { src: string; alt: string }
  min: number
  max: number
}) {
  return (
    <div className="rounded-12 flex flex-col items-center gap-200 border border-neutral-600 bg-neutral-800 px-125 py-200">
      <p className="text-preset-6">{label}</p>
      <img src={icon.src} alt={icon.alt} width={60} height={60} />
      <div className="text-preset-7 flex w-full items-center justify-between">
        <p>{min}&deg;</p>
        <p>{max}&deg;</p>
      </div>
    </div>
  )
}

export function DailyForecast() {
  return (
    <div className="space-y-250">
      <h2 className="text-preset-5">Daily Forecast</h2>
      <div className="grid grid-cols-7 gap-200">
        <WeatherCard
          label="Tue"
          icon={{ src: '/images/icon-rain.webp', alt: 'Rain' }}
          min={20}
          max={14}
        />
        <WeatherCard
          label="Wed"
          icon={{ src: '/images/icon-drizzle.webp', alt: 'Drizzle' }}
          min={21}
          max={15}
        />
        <WeatherCard
          label="Thu"
          icon={{ src: '/images/icon-sunny.webp', alt: 'Sunny' }}
          min={24}
          max={14}
        />
        <WeatherCard
          label="Fri"
          icon={{
            src: '/images/icon-partly-cloudy.webp',
            alt: 'Partly cloudy',
          }}
          min={25}
          max={13}
        />
        <WeatherCard
          label="Sat"
          icon={{ src: '/images/icon-storm.webp', alt: 'Storm' }}
          min={21}
          max={15}
        />
        <WeatherCard
          label="Sun"
          icon={{ src: '/images/icon-snow.webp', alt: 'Snow' }}
          min={25}
          max={16}
        />
        <WeatherCard
          label="Mon"
          icon={{ src: '/images/icon-fog.webp', alt: 'Fog' }}
          min={24}
          max={15}
        />
      </div>
    </div>
  )
}
