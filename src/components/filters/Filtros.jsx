import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {

  const extensions = data.map(item => item.Extención);
  const uniqueData = [...new Set(extensions)];

  const resultados = {}

  extensions.forEach((ext)=> {
      if(resultados[ext]){
          resultados[ext]++;
      }else{
          resultados[ext] = 1
      }
  })

  return (
    <>
    {data.length > 0 && ( 
      <>
      
          <div className="mi-container">
            <div className="filtros-cont">
                <h3 className="card-title">Filtros</h3>
                <hr/>
                <div className="form-text">Filtrar por extensión</div> 
                {uniqueData.map((item, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name ="filtrar"
                      value={uniqueData[index]}
                      id={item.Extención}
                      checked={selectedFilters[item.Extención]}
                      onChange={(e) => handleFilterChange(e, uniqueData[index])}
              
                    />
                    <div className="d-flex justify-content-between">
                      <label className="form-check-label" htmlFor={item.Extención}>
                        {uniqueData[index]} 
                      </label>
                      <label className="check-label" htmlFor={item.Extención}>
                        {resultados[item]}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </>
    )}
    </>
  );
}