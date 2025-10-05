interface WeatherDetailProps {
  label: string
  value: string
}

function WeatherDetail({ label, value }: WeatherDetailProps) {
  return (
    <div className="gap-300 p-250 bg-card rounded-12 flex flex-col border">
      <p className="text-preset-6 text-muted-foreground max-[375px]:text-[clamp(1rem,0.2727rem+3.6364vw,1.125rem)]">
        {label}
      </p>
      <p className="text-preset-3 max-[375px]:text-[clamp(1.625rem,-0.5568rem+10.9091vw,2rem)]">
        {value}
      </p>
    </div>
  )
}

interface WeatherDetailsProps {
  temperature: string
  humidity: string
  wind: string
  precipitation: string
}

export function WeatherDetails({
  temperature,
  humidity,
  wind,
  precipitation,
}: WeatherDetailsProps) {
  return (
    <div className="gap-200 sm:gap-250 lg:gap-300 grid grid-cols-4 max-[734px]:grid-cols-2">
      <WeatherDetail label="Feels Like" value={temperature} />
      <WeatherDetail label="Humidity" value={humidity} />
      <WeatherDetail label="Wind" value={wind} />
      <WeatherDetail label="Precipitation" value={precipitation} />
    </div>
  )
}
