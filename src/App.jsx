import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import { Home } from './container'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='app'>
      <Home/>

   </div>
  )
}

export default App
