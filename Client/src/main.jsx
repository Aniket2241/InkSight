import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParticlesComponent from './components/Particles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParticlesComponent className="particles"></ParticlesComponent>
    <App />
  </StrictMode>
)
