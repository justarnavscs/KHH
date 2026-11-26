import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

hydrateRoot(document.getElementById('root'),
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#252421',
          color: '#FFFFFF',
          border: '1px solid #3b3934',
          fontSize: '12px',
          borderRadius: '10px',
          fontFamily: 'sans-serif'
        }
      }}
    />
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
}
