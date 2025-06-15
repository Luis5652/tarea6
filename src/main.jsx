import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Principal.css'
import Principal from './Principal.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './Global.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Principal></Principal>
  </BrowserRouter>,
)
