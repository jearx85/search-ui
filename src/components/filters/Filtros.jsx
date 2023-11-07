import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {
  return (
    <div className="filtros-cont">
      <div className="container">
      {data.length > 0 && ( 
          <>
            <h1 className="card-title">Filtros</h1>
            <div className="form-text">Filtrar por categoría</div>
          </>
          )}
        {data.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={item.Categorias}
              checked={selectedFilters[item.Categorias]}
              onChange={() => handleFilterChange(item.Categorias)}
            />
            <label className="form-check-label" htmlFor={item.Categorias}>
              {item.Categorias}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}