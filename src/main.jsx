import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Screen from './screen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Screen />
  </StrictMode>,
)
