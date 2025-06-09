import { Banner } from "./components/Banner"
import { MetricsChart } from "./components/MetricsChart"
import { CurrentValues } from "./components/CurrentValues"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { FeaturesSection } from "./components/FeaturesSection"
function App() {
  
  return (
    <div id="home-section" className="flex flex-col min-h-screen">
      <NavBar />
      <Banner/>
      <CurrentValues />
      <MetricsChart />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default App
