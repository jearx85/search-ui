import React from 'react'
import './ShowResults.css'

export default function ShowResults({ titulo }) {
  return (
    <div className="container">
      <div className="cont-card">
      <div className="card">
            <h5 className="card-header">{titulo}</h5>
            <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>  
                <p className="card-text">url: </p>  
            </div>
        </div>
      </div>
    </div>
  )
}
