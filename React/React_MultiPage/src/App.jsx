import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './Components/Auth/Auth'
import Home from './Components/Home/Home'
import Settings from './Components/Settings/Settings'
import Nothing from './Components/Nothing/Nothing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/settings' element={<Settings/>}/>
    <Route path='/' element={<Auth/>}/>
    <Route path='/*' element={<Nothing/>}/>
    </Routes>
    </>
  )
}

export default App
