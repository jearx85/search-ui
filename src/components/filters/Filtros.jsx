import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {
  
  return (
    <>
    {data.length > 0 && ( 
      <>
      
        <div className="filtros-cont">
          <div className="container">
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
                  onChange={handleFilterChange}
                />
                <label className="form-check-label" htmlFor={item.Extención}>
                  {data[index]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </>
    )}
    </>
  );
}