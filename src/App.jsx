import Landing from "./components/Landing"
import AboutAndInterests from "./components/AboutAndInterests"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">  
      <main className="flex flex-col items-center gap-8 w-full max-w-[clamp(25rem,80vw,38rem)] bg-[#1a1b21] rounded-xl overflow-hidden">
        
        <Landing />
        <AboutAndInterests />
        <Footer />

      </main>
    </div>
  )
}

export default App;
