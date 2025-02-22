
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Menu from './Pages/Menu'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
       
    </div>
      
    
  )
}

export default App
