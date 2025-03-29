import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/homepage'
import Login from './components/Login'
import Signup from './components/Signup'
import { Router } from 'react-router-dom'



function App() {

  return (
      <div className='app-main-container'>
         <HomePage></HomePage>
      
      </div>

  )
}

export default App
