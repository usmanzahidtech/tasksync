import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Authprovider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     <Authprovider>
        <App />
      </Authprovider>
       

  </StrictMode>,
)
