import { useState } from 'react'
import NavBar from './components/NavBar'
import MainIcon from './components/MainIcon'
import HourlyForecast from './components/HourlyForecast'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  


  return (
   <div className="app-layout">
      <main className='content'>
        <NavBar/>
          <MainIcon/>
        <HourlyForecast/>
      </main>
    </div>
  )
}

export default App
