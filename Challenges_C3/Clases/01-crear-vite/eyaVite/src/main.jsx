import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function App3() {
  return <h1>Hola mundo</h1>

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
