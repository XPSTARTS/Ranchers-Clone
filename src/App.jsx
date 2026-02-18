import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import RanchersExpansion from './components/RanchersExpansion'
import NotFound from './components/NotFound'
function App() {

  return (
    <div className='bg-[#212121] font-serif text-white min-h-screen overflow-hidden'>

      <Navbar />

      <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/ranchers' element={ <RanchersExpansion/>} />
          <Route path="*" element={ <NotFound />} />
      </Routes>

    <Footer />
    </div>
  )
}

export default App
