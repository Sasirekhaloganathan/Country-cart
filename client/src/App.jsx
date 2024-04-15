import { useState } from 'react'

import Content from './components/content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Content />
      </div>
    </>
  )
}

export default App
