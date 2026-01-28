import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataBinding } from './data-binding/databinding.jsx'
import { DataBinding2 } from './data-binding/Databinding2.jsx'
import { Flipkart } from './flipkart/flipkart.jsx'
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThrottleDemo />
  </StrictMode>,
)
