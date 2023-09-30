import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if(!("BarcodeDetector" in window)){
    console.log("BarcodeDetector is not supported by this browser");
}else
{
    console.log("BarcodeDetector is supported by this browser")
}


Notification.requestPermission().then((result) => {
    console.log('notification permission', result)
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
