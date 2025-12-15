import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Message from './exercises/greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Message name='Seppo'/>
  </StrictMode>,
)
