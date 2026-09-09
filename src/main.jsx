import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataBinding } from './data-binding/databinding.jsx'
import { DataBinding2 } from './data-binding/Databinding2.jsx'
import { DataBinding3 } from './data-binding/dataBinding3.jsx'
import { Flipkart } from './flipkart/flipkart.jsx'
import { FakeStore } from './components/fakestore/fakestore.jsx'
import { FakeStorePractice } from './components/fakestore/fakestore_practice.jsx'
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx'
import { DemoComponent } from './components/components-demo/demoComponent.jsx'
import { FlipkartXMLHTTP } from './flipkart/flipkartXMLHTTP.jsx'
import { EventBinding } from './data-binding/EventBinding.jsx'
import { KeyDemo } from './components/key-demo/KeyDemo.jsx'
import { ButtonDemo } from './components/key-demo/ButtonDemo.jsx'
import { EMICalculator } from './components/EMI-Calculator/EMICalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EMICalculator />
  </StrictMode>
)
