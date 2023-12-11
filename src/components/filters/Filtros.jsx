import React from "react";
import "./Filtros.css";

import Card from "../card/CardExt";
import CardCategories from "../card/CardCategory";

export default function Filtros({ data, handleFilterChange }) {
//================= Filtro Extensiones ================================

  const extensions = data.map((item) => item.Extensión);
  const uniqueData = [...new Set(extensions)];

  const resultados = {};

  extensions.forEach((ext) => {
    if (resultados[ext]) {
      resultados[ext]++;
    } else {
      resultados[ext] = 1;
    }
  });
//================= Filtro categorias ================================

  const categories = data.map((item) => item.Categorias);
  const uniqueCategory = [...new Set(categories)];
  const resultadosCategory = {};

  categories.forEach((cat) => {
    if (resultadosCategory[cat]) {
      resultadosCategory[cat]++;
    } else {
      resultadosCategory[cat] = 1;
    }
  });
//============================================================================
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
                <div className="cardExt">
                  <Card uniqueData={uniqueData} handleFilterChange={handleFilterChange} resultados ={resultados}  offcanvas="offcanvas"/>
                </div>

                <div className="form-text">Filtrar por categorías</div>
                <hr />
                <div className="cardCat">
                  <CardCategories uniqueCategory={uniqueCategory} handleFilterChange={handleFilterChange} resultados ={resultados} offcanvas="offcanvas"/>
                </div>
                </div>
              </div>

              {/* ======================================================================================= */}
              <div className="filtros">
                <h3 className="card-title">Filtros</h3>
                <hr />
                <div className="cardExt">
                  <div className="form-text">Filtrar por extensión</div>
                  <Card uniqueData={uniqueData} handleFilterChange={handleFilterChange} resultados ={resultados}  />
                </div>
                <hr />
                <div className="cardCat">
                  <div className="form-text">Filtrar por categorías</div>
                  <CardCategories uniqueCategory={uniqueCategory} handleFilterChange={handleFilterChange} resultados ={resultados}  />
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
}
