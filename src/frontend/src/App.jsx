import { Banner } from "./components/Banner"
import { MetricsChart } from "./components/MetricsChart"
import { CurrentValues } from "./components/CurrentValues"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
function App() {
  
  return (
    <div id="home-section" className="flex flex-col min-h-screen">
      <NavBar />
      <Banner/>
      <CurrentValues />
      <MetricsChart />
      <Footer />
    </div>
  )
}

export default App
