import { useState } from 'react'
import {BrowserRoutes , Routes} from 'react-router-dom'
import Content from './components/content'
import Home from './components/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRoutes>
      <Routes path="/home" element="Home"></Routes>
      <Routes path="/content" element="Content"></Routes>
      </BrowserRoutes>
    </>
  )
}

export default App
