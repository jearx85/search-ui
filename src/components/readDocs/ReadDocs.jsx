import React from "react";
import {useParams } from 'react-router-dom';

export default function Pdf() {

  const { ruta } = useParams();
  console.log(atob(ruta));
 
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={require(atob(ruta))}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a
          href={require(atob(ruta))}
          id="enlaceDescargarPdf"
          download="ReactJS.pdf"
        >
          Tu dispositivo no puede visualizar los PDF, da click aquí para
          descargarlo
        </a>
      </object>
    </div>
  );
}
