import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, ProgressContext} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ProgressContext value={30}>
            <App />
      </ProgressContext>
  </StrictMode>,
)
