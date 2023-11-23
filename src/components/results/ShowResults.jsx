import React, { useState } from 'react';
import './ShowResults.css';

import { Link } from  'react-router-dom';
 export default function ShowResults({ data }) {
  const [expanded] = useState(false);


  return (
    <div className="container">
      <div className="cont-card">
        {data.map(({id, Title, Content, Path}) => (
          <div className="card" key={id}>
            <h5 className="card-header"><b>{Title}</b></h5>
            <div className="card-body">
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {Content ? (
                  expanded ? Content : `${Content.slice(0, 800)}...`
                ) : (
                  "No hay contenido disponible"
                )}
              </p>
              <button className="card-button"><Link className="text-button" to={ `../pdf/${btoa("file:///"+Path)}`} target="_blank" >Leer más </Link> </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
