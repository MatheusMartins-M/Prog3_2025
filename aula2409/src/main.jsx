import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App nome="Restinga" endereco="https://ifrs.edu.br/restinga/"/><br/>
    <App nome="Canoas" endereco="https://ifrs.edu.br/canoas/"/><br/>
    <App nome="Alvorada" endereco="https://ifrs.edu.br/alvorada/"/><br/>
  </StrictMode>,
)
