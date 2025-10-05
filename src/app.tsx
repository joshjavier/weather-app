import { DailyForecast } from './components/daily-forecast'
import { Header } from './components/header'
import { Search } from './components/search'
import { Title } from './components/title'
import { WeatherInfo } from './components/weather-info'

function App() {
  return (
    <div className="gap-800 pb-1000 flex min-h-svh flex-col">
      <Header className="pt-200 sm:pt-300 lg:pt-600" />
      <main className="contents">
        <Title />
        <div>
          <div className="max-w-(--wrapper) px-200 sm:px-300 mx-auto box-content">
            <div className="gap-400 lg:gap-600 flex flex-col">
              <Search />
              <div className="gap-400 [&_>:first-child]:basis-800/1216 [&_>:last-child]:basis-384/1216 flex max-lg:flex-col">
                <div className="gap-400 lg:gap-600 flex flex-col">
                  <WeatherInfo
                    location="Berlin, Germany"
                    date="2025-08-05"
                    icon="sunny"
                    temp={20}
                  />
                  <DailyForecast />
                </div>
                <div>Hourly Forecast</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
