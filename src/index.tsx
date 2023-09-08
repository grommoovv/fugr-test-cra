import React from 'react'
import { createRoot } from 'react-dom/client'
import { ReduxProvider } from './app/providers/redux'
import { App } from './app/App'
import './app/styles/styles.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
)
