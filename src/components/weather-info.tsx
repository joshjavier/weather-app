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
    <div>
      <div className="rounded-20 mb-400 flex min-h-[286px] items-center justify-between bg-blue-700 bg-linear-67 from-blue-500 to-blue-700 px-300 py-1000">
        <div className="space-y-150">
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
          <div className="text-preset-1 italic">20&deg;</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-300">
        <WeatherDetail label="Feels Like" value="18&deg;" />
        <WeatherDetail label="Humidity" value="46%" />
        <WeatherDetail label="Wind" value="14 km/h" />
        <WeatherDetail label="Precipitation" value="0 mm" />
      </div>
    </div>
  )
}
