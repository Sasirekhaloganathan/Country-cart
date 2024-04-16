import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Content from './components/content'
import Home from './components/HomePage'
import './Style/App.css'
import Cart from './components/cart'
import Landing from './components/LandingPage'
import Login from './components/LoginPage'
import Register from './components/RegisterPage'
import ForgotPass from './components/ForgetPasswordPage'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>      
        <Route path='/home' element={<Home />}></Route>      
        <Route path='/login' element={<Login />}></Route>      
        <Route path='/register' element={<Register />}></Route>      
        <Route path='/forgot' element={<ForgotPass />}></Route>      
      <Route path='/content' element={<Content />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path="/cart/:data" component={<Cart />} />


      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
