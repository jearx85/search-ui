import React, { useState } from 'react';
import './ShowResults.css';

export default function ShowResults({ data }) {
  //console.log(data)
  const [expanded] = useState(false);


  return (
    <div className="container">
      <div className="cont-card">
        {data.map(({id, Title, Content, Path, Extención}) => (
          <div className="card" key={id}>
            <h5 className="card-header">{Title}</h5>
            <div className="card-body">
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {Content ? (
                  expanded ? Content : `${Content.slice(0, 800)}...`
                ) : (
                  "No hay contenido disponible"
                )}
              </p>
              <p className="card-text"> <a href={Path} target="blank">Leer más</a></p> 
              <p className="card-text">Extención: {Extención}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
