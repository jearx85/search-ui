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
                {Content ? (
                  expanded ? Content : `${Content.slice(0, 800)}...`
                ) : (
                  "No hay contenido disponible"
                )}
              </p>
              {/* {Content && Content.length > 500 && (
                <button className="btn btn-link" onClick={toggleExpand}>
                  {expanded ? 'Leer menos' : 'Leer más'}
                </button>
              )} */}
              <p className="card-text"> <a href={Path} target="blank">Leer más</a></p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
