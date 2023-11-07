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
        {data.map(({id, Title, Content, Path}) => (
          <div className="card" key={id}>
            <h5 className="card-header">{Title}</h5>
            <div className="card-body">
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {Content.raw ? (
                  expanded ? Content.raw : `${Content.raw.slice(0, 500)}...`
                ) : (
                  "No hay contenido disponible"
                )}
              </p>
              {/* {item.contenido && item.contenido.length > 500 && (
                <button className="btn btn-link" onClick={toggleExpand}>
                  {expanded ? 'Leer menos' : 'Leer más'}
                </button>
              )} */}
              <p className="card-text">url: <a href={Path} target="blank">{Path}</a></p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
