import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App.jsx'
import { ThemeProvider } from './Components/ContextToggle/ContextBackground.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
