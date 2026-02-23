import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Downloads from './components/Downloads'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Features />
        <Downloads />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
