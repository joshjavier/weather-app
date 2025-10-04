import { Button } from './components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Button variant="trigger" size="sm">
        Click me
      </Button>
    </div>
  )
}

export default App
