import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MinimalGrid from './components/MinimalGrid'
import Assurance from './components/Assurance'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <MinimalGrid />
        <Assurance />
      </main>
      <Footer />
    </div>
  )
}

export default App
