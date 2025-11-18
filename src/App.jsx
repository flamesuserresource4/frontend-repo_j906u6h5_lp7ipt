import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Programs />
      <Gallery />
      <CTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Sunflower & Rainbow Kindergarten. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
