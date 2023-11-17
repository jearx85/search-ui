import React from "react";

export default function Pdf({data}) {
    const path = "file://"+data
    console.log(path)
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={require("file:///C:/Users/user/Downloads/Portafolio_ServiciosWEB_SIATA.pdf")}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <br />
        <a
          href={require("file:///C:/Users/user/Downloads/Portafolio_ServiciosWEB_SIATA.pdf")}
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
