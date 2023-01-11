import React from 'react'
import ReactDOM from 'react-dom/client'
import { RootApp } from './RootApp'
import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
)
