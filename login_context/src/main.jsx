import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SessionProvider } from './context/SessionProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider>
    <App />
    </SessionProvider>
  </StrictMode>
);
