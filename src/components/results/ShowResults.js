import React, { useState } from 'react';
import './ShowResults.css';

export default function ShowResults({ data }) {
  const [expanded] = useState(false);

  // const toggleExpand = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className="container">
      <div className="cont-card">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h5 className="card-header">{item.titulo}</h5>
            <div className="card-body">
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {item.contenido ? (
                  expanded ? item.contenido : `${item.contenido.slice(0, 500)}...`
                ) : (
                  "No hay contenido disponible"
                )}
              </p>
              {/* {item.contenido && item.contenido.length > 500 && (
                <button className="btn btn-link" onClick={toggleExpand}>
                  {expanded ? 'Leer menos' : 'Leer más'}
                </button>
              )} */}
              <p className="card-text">url: <a href={item.path} target="blank">{item.path}</a></p> 
              {/* <p className="card-text">url: <a href="https://getbootstrap.com/docs/5.3/components/navbar/">https://getbootstrap.com/docs/5.3/components/navbar/</a></p>  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
