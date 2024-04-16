import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Content from './components/content'
import Home from './components/HomePage'
import './Style/App.css'
import Cart from './components/cart'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>      
      <Route path='/content' element={<Content />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path="/cart/:data" component={<Cart />} />


      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
