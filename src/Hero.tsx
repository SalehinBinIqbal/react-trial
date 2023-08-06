import { useState } from 'react'
import doctor from './assets/pic.png'
import './Hero.css'

function Hero() {
  const navItems = ['Products','Solutions','Platform','Resources'];
  return (
    <div className="upper-container">
            <div className="header">
                <nav className="navbar">
                    <div className="container">
                      <div className="navbar-brand">
                        Payus
                      </div>
                      <div className="navbar-nav">
                        {navItems.map(navItems => <a href='#' key={navItems}>{navItems}</a>)}
                      </div>
                      <div className="navbar-login">
                        <a href="#">Log in</a>
                        <button className="btn-nav" type="button">Get Started</button>
                      </div>
                    </div> 
                </nav>
            </div>

            <div className="top-grid">
                <div className="top-row">
                    <div className="top-col">
                        <div className="big-text-top">
                            A powerful set of solutions to help you & high-tech challenger bank
                        </div>
                        <div className="small-text-top">
                            Our main goals were to reduce the friction of key user journeys, change the layouts to be more intuitive and establish a modern interface.
                        </div>
                        <button className="btn-grid" type="button">Apply for account</button>
                    </div>
                    <div className="top-col">
                        <img src={doctor} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero