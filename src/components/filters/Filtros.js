import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {
  return (
    <div className="filtros-cont">
      <div className="container">
        <h1 className="card-title">Filtros</h1>
        {data.map((item) => (
          <div className="form-check" key={item.titulo}>
            <input
              className="form-check-input"
              type="checkbox"
              id={item.titulo}
              checked={selectedFilters[item.titulo]}
              onChange={() => handleFilterChange(item.titulo)}
            />
            <label className="form-check-label" htmlFor={item.titulo}>
              {item.titulo}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
