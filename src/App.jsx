import './App.css'
import BannerSection from "./components/Banner.jsx"
import LettersSection from "./components/Letter.jsx"
import FooterSection from "./components/footer.jsx"
import Story from "./components/Story.jsx"

function App() {
  return (
    <div>
      <BannerSection />
      <LettersSection />
      <Story/>
      <FooterSection />
    </div>
  )
}

export default App
