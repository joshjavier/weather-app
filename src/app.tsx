import { Header } from './components/header'
import { Search } from './components/search'
import { Title } from './components/title'

function App() {
  return (
    <div className="gap-800 pb-1000 flex min-h-svh flex-col">
      <Header className="pt-200 sm:pt-300 lg:pt-600" />
      <main className="contents">
        <Title />
        <div>
          <div className="max-w-(--wrapper) px-200 md:px-300 mx-auto box-content">
            <div className="gap-400 lg:gap-600 flex flex-col">
              <Search />
              <div>Content</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
