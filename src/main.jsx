import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'/* en esta parte estamos importando el index.css */

ReactDOM.createRoot(document.getElementById('root')).render(  /*  con getelementbyid seleccionamos el div root que esta en nuestro index*/
  <React.StrictMode>
    <App />  {/* App es una funcion de javascript que estamos trayendo desde el archivo App.jsx, ahi es donde podemos ver que es lo que hace esta funcion */}
  </React.StrictMode>,
)
