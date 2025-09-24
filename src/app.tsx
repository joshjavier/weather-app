import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from './components/header'
import { Search } from './components/search'
import { WeatherData } from './components/weather-data'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-svh space-y-600 pb-1000 lg:space-y-800">
        <div className="mx-auto box-content max-w-[1216px] px-200 sm:px-300">
          <Header />
        </div>

        <div className="mx-auto box-content px-200 max-lg:max-w-[482px] sm:px-300">
          <h1 className="text-preset-2 font-bricolage-grotesque text-center">
            How&rsquo;s the sky looking today?
          </h1>
        </div>

        <div className="mx-auto box-content max-w-[1216px] px-200 sm:px-300">
          <main className="flex flex-col items-center gap-400 lg:gap-600">
            <Search />
            <WeatherData />
          </main>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
