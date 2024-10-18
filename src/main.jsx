import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Languages/i18n.js'
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <App />
)
