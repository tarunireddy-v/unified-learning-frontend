import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> d29d898be73ddd6bf85f910fdf307d9cdcf38c19
  </StrictMode>,
)
