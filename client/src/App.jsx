import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Content from './components/content'
import Home from './components/HomePage'
import './Style/App.css'
import Authentication from './components/Authentication'
import Contact from './components/contact'
import Cart from './components/cart'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />}></Route>
        <Route path='/home' element={<Home />}></Route>      
      <Route path='/content' element={<Content />}></Route>
      <Route path='/contactus' element={<Contact />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
