import { CurrentValues } from "./components/CurrentValues"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <CurrentValues />
      <Footer />
    </div>
  )
}

export default App
