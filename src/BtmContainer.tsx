import { useState } from 'react'
import './BtmContainer.css'

function BtmContainer() {

  return (
    <div className="lower-container">
            <div className="big-text-bottom">
                Spend wisely and always save
            </div>
            <div className="small-text-bottom">
                Be ready to face new risks with Benchmarq - coverage that can scale up or down depending on the size and scope of your business
            </div>
            <div className="bottom-row">
                <div className="bottom-col">
                    <div className="card">
                        <div className="card-content">
                            2m+
                        </div>
                        <div className="card-text">
                            Turns your self-cured past-due customers
                        </div>
                    </div>
                </div>
                <div className="bottom-col">
                    <div className="card">
                        <div className="card-content">
                            5x+
                        </div>
                        <div className="card-text">
                            Average return on investment
                        </div>
                    </div>
                </div>
                <div className="bottom-col">
                    <div className="card">
                        <div className="card-content">
                            65%+
                        </div>
                        <div className="card-text">
                            Turns your reduction in OPEX
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BtmContainer