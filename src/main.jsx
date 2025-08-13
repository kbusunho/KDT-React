import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CounterProvider} from './context/CounterProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <App />
  </CounterProvider>,
)