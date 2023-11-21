import React, { useContext } from "react";
import SearchContext from "../context/SearchContext";

export default function Pdf() {
  const { path } = useContext(SearchContext);
  console.log("path2", path);
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
