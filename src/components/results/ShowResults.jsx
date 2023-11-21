import React, { useState, useRef  } from 'react';
import './ShowResults.css';

export default function ShowResults({ data }) {
  const [expanded] = useState(false);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Simular un clic en el input de tipo file
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Obtener la ruta del archivo seleccionado
    const filePath = event.target.value;
    console.log('Ruta del archivo seleccionado:', filePath);
    // Puedes realizar acciones adicionales con la ruta del archivo aquí
  };

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
              {/* <button className="card-button"> <a className="text-button" href={`file:///${Path}`} target="blank">Leer más</a></button>  */}
              {/* <button className="card-button"><a className="text-button" href="./pdf" target="_blank" onClick={()=>handleClick(Path)}>Leer más</a> </button> */}
              
              <button className="card-button" onClick={handleButtonClick} > Leer más</button>
              <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
