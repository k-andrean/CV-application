import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './components/Profile.jsx'
import Study from './components/Study.jsx'
import Work from './components/Work.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Curriculum Vitae</h1>
    <Profile />
    <Study />
    <Work />
  </React.StrictMode>,
)
