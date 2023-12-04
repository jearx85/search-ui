import React from "react";
import "./Filtros.css";

import Card from "../card/CardExt";
import CardCategory from "../card/CardCategory";

export default function Filtros({ data, selectedFilters, handleFilterChange, isChecked }) {
  const extensions = data.map((item) => item.Extensión);
  const uniqueData = [...new Set(extensions)];

  const categories = data.map((item) => item.Categorias);
  const lastPositions = categories.map((array) => array[array.length - 1]);
  const uniqueCategory = [...new Set(lastPositions)];

  // const [extensiones, setExtensiones] = useState(uniqueData);
  const resultados = {};

  extensions.forEach((ext) => {
    if (resultados[ext]) {
      resultados[ext]++;
    } else {
      resultados[ext] = 1;
    }
  });

  const resultadosCategory = {};

  lastPositions.forEach((ext) => {
    if (resultadosCategory[ext]) {
      resultadosCategory[ext]++;
    } else {
      resultadosCategory[ext] = 1;
    }
  });

  return (
    <>
      {data.length > 0 && (
          <div className="mi-container">
            <div className="filtros-cont">
              {/* ========================== Offcanvas =====================================*/}
              <button
                className="boton-offcanvas"
                type="button"
                data-bs-toggle="offcanvas"
                // data-bs-target="#offcanvasScrolling"
                // aria-controls="offcanvasScrolling"
                data-bs-target="#offcanvasWithBothOptions" 
                aria-controls="offcanvasWithBothOptions"
              >
                Filtrar
              </button>
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="true"
                tabIndex="-1"
                // id="offcanvasScrolling"
                // aria-labelledby="offcanvasScrollingLabel"
                id="offcanvasWithBothOptions" 
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h3 className="card-title" id="offcanvasWithBothOptionsLabel">Filtros</h3>
                  <hr />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-filter">
                <div className="form-text">Filtrar por extensión</div>
                <hr />
                <Card uniqueData={uniqueData} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} resultados ={resultados} isChecked ={isChecked}  offcanvas="offcanvas"/>

                <div className="form-text">Filtrar por categorías</div>
                <hr />
                <CardCategory uniqueCategory={uniqueCategory} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} resultadosCategory={resultadosCategory}isChecked={isChecked} offcanvas="offcanvas"/>

                </div>
              </div>

              {/* ======================================================================================= */}
              <div className="filtros">
                <h3 className="card-title">Filtros</h3>

                <hr />
                <div className="form-text">Filtrar por extensión</div>
                <Card uniqueData={uniqueData} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} resultados ={resultados} isChecked={isChecked} />

                <hr />
                <div className="form-text">Filtrar por categorías</div>
                <CardCategory uniqueCategory={uniqueCategory} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} resultadosCategory={resultadosCategory}isChecked={isChecked} />

              </div>
            </div>
          </div>
       
      )}
    </>
  );
}
