import React from 'react'
import './ShowResults.css'

export default function ShowResults({ data }) {
  return (
    <div className="container">
      <div className="cont-card">
      {data.map((item, index) => (
      <div className="card" key={index}>
            <h5 className="card-header">{item.titulo}</h5>
            <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>  
                {/* <p className="card-text">url: <a href={item.url}>{item.url}</a></p>  */}
                <p className="card-text">url: <a href="https://getbootstrap.com/docs/5.3/components/navbar/">https://getbootstrap.com/docs/5.3/components/navbar/</a></p> 
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}
