import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ProgressProvider} from "./ProgressProvider.tsx";
import {App} from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ProgressProvider>
        <App />
      </ProgressProvider>
  </StrictMode>,
)
