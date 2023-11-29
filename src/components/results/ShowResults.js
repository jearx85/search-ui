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
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor ut nunc a auctor. Fusce vehicula est eget nibh finibus ullamcorper. Aliquam sit amet tincidunt dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam accumsan pretium enim, eu convallis sem semper sed. Integer tincidunt ornare lorem, nec pulvinar ipsum suscipit sit amet. Suspendisse potenti. Nunc condimentum erat id augue commodo, id pellentesque risus congue. Aenean risus mi, lacinia at sem id, laoreet interdum arcu. Curabitur pulvinar tortor feugiat enim pretium viverra. Proin auctor sollicitudin tempus. Cras vestibulum gravida sem, sed lobortis eros faucibus vel. Aenean ac hendrerit eros. Nunc sagittis et orci at ultrices. Duis euismod sagittis elit, non rutrum ligula aliquam et.</p>  
                {/* <p className="card-text">url: <a href={item.url}>{item.url}</a></p>  */}
                <p className="card-text">url: <a href="https://getbootstrap.com/docs/5.3/components/navbar/" target='blank'>https://getbootstrap.com/docs/5.3/components/navbar/</a></p> 
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

