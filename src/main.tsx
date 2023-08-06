import React from 'react'
import ReactDOM from 'react-dom/client'
import HeroSection from './Hero'
import BtmContainer from './BtmContainer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroSection/>
    <BtmContainer/>
  </React.StrictMode>,
)
