import './scss/global.scss'
import Landing from './Pages/Landing/Landing'
import Cart from './Pages/Cart/Cart'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import {useScroll} from 'framer-motion'



function App() {



  return (

    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>


  )
}

export default App
