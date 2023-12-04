import React, { useState } from 'react';
import './ShowResults.css';
import parse from 'html-react-parser';

 export default function ShowResults({ data }) {
  const [expanded] = useState(false);

  return (
    <div className="container">
      <div className="cont-card">
        {data.map(({id, Title, Content, Path, TitleH ,ContentH, Categorias}) => (
          
          <div className="card" key={id}>
            {/* <h5 className="card-header"> <b>{TitleH ? <span dangerouslySetInnerHTML={{ __html: TitleH }} /> : Title}</b></h5> */}
            <h5 className="card-header"> <b>{TitleH ? parse(TitleH) : Title}</b></h5>
            <div className="card-body">
              <h5 className="card-title">Categoría: </h5>
              <p>{Categorias[Categorias.length - 1]}</p>
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {ContentH ? (
                  parse(`${ContentH.slice(0, 1000)}...` )
                ) : (
                  expanded ? (
                   Content  
                  ) : (
                    `${Content.slice(0, 1000)}...`
                  )
                )}
              </p>
              <button className="card-button"><a className="text-button" href= {`http://localhost:3008/${Path.replace("C:/Users/user/Dropbox/nadhis_pruebas/Folder_monitoring", "")}`} rel="noreferrer" target="_blank" >Ver documento </a> </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
