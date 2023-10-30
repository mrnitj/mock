import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import View from './Pages/View'



function App() {
 

  return (
    <div className='App'>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/cart' element={<Home/>}/>
    <Route path='/login' element={<Home/>}/>
    <Route path='/signup' element={<Home/>}/>
      

      </Routes>
    </div>
  )
}

export default App
