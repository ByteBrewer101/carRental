import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from './components/ui/sonner'
import { GlobalProvider } from './ContextAPI/GlobalProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
   <Toaster richColors />
    <App />
    </GlobalProvider>
  </StrictMode>,
)
