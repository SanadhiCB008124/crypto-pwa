import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'






Notification.requestPermission().then((result) => {
    console.log('notification permission', result)
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
