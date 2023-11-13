import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MetaMaskUIProvider sdkOptions={{ dappMetadata: { name: "Foodygo App"}}}>
      <App />
    </MetaMaskUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
