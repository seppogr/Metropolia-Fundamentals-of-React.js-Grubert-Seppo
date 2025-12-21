import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MpApp from './exercises/MpApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MpApp />
  </StrictMode>,
)
