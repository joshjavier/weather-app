function WeatherDetail({ label, value }: { label: string; value: string }) {
  return (
    <p className="rounded-12 flex flex-col gap-300 border border-neutral-600 bg-neutral-800 p-250">
      <span className="text-preset-6 text-neutral-200">{label}</span>
      <span className="text-preset-3">{value}</span>
    </p>
  )
}

export function WeatherInfo() {
  return (
    <div className="space-y-250 lg:space-y-400">
      <div className="rounded-20 flex min-h-[286px] items-center justify-between gap-200 bg-blue-700 bg-linear-67 from-blue-500 to-blue-700 px-300 max-sm:flex-col max-sm:justify-center">
        <div className="space-y-150 max-sm:text-center">
          <p className="text-preset-4">Berlin, Germany</p>
          <p className="text-preset-6">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex items-center gap-250">
          <img
            src="/images/icon-sunny.webp"
            alt="Sunny"
            width={120}
            height={120}
          />
          <div className="text-preset-1 italic max-[375px]:-translate-x-400 max-[375px]:text-[80px]">
            20&deg;
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-200 sm:grid-cols-4 sm:gap-250 lg:gap-300">
        <WeatherDetail label="Feels Like" value="18&deg;" />
        <WeatherDetail label="Humidity" value="46%" />
        <WeatherDetail label="Wind" value="14 km/h" />
        <WeatherDetail label="Precipitation" value="0 mm" />
      </div>
    </div>
  )
}
