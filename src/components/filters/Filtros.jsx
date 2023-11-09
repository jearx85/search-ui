import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {
  return (
    <>
    {data.length > 0 && ( 
      <>
      
          <div className="mi-container">
            <div className="filtros-cont">
                <h3 className="card-title">Filtros</h3>
                <hr/>
                <div className="form-text">Filtrar por extensión</div> 
                {data.map((item, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name ="filtrar"
                      value={data[index]}
                      id={item.Extención}
                      checked={selectedFilters[item.Extención]}
                      onChange={(e) => handleFilterChange(e, data[index])}
              
                    />
                    <div className="d-flex justify-content-between">
                      <label className="form-check-label" htmlFor={item.Extención}>
                        {data[index]} 
                      </label>
                      <label className="check-label" htmlFor={item.Extención}>
                        {/* {data.length} */}
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