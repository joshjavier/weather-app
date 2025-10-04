import { Header } from './components/header'
import { Title } from './components/title'

function App() {
  return (
    <div className="gap-800 pb-1000 flex min-h-svh flex-col">
      <Header className="pt-200 sm:pt-300 lg:pt-600" />
      <main className="contents">
        <Title />
      </main>
    </div>
  )
}

export default App
