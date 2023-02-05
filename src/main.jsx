import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UseMemoSample from './samples/useMemoSample'
import UseCallbackSample from './samples/useCallbackSample'
import Main from './samples/react-context-createContext-useontext/Main'
import Application from './samples/react-context-createContext-useontext/usecase-global-user-name/Application'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
