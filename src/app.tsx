import { Header } from './components/header'

function App() {
  return (
    <div className="min-h-svh">
      <div className="mx-auto box-content max-w-[1216px] px-200 sm:px-300">
        <Header />
      </div>

      <h1 className="text-preset-2 font-bricolage-grotesque">
        How&rsquo;s the sky looking today?
      </h1>
    </div>
  )
}

export default App
