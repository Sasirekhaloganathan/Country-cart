import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Content from './components/content'
import Home from './components/HomePage'
import Authentication from './components/Authentication'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Authentication />}></Route>
        <Route path='/home' element={<Home />}></Route>      
      <Route path='/content' element={<Content />}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
