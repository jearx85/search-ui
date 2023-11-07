import React from 'react';
import './Filtros.css';

export default function Filtros({ data, selectedFilters, handleFilterChange }) {
  return (
    <div className="filtros-cont">
      <div className="container">
      {data.length > 0 && ( 
          <h1 className="card-title">Filtros</h1>
        )}
        {data.map((item, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="checkbox"
              id={item.author}
              checked={selectedFilters[item.author]}
              onChange={() => handleFilterChange(item.author)}
            />
            <label className="form-check-label" htmlFor={item.author}>
              {item.author}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}