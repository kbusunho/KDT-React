import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MyProvider} from './components/context/MyProvider.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>,
)