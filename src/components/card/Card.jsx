import React from 'react'

export default function Card({ uniqueData, selectedFilters, handleFilterChange, resultados, offcanvas = "" }) {
  return (
    <div>
        {uniqueData.map((item, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name="filtrar"
            data-bs-dismiss= {offcanvas}
            value={uniqueData[index]}
            id={item.Extención}
            checked={selectedFilters[item.Extención]}
            onChange={(e) =>
              handleFilterChange(e, uniqueData[index])
            }
          />
          <div className="d-flex justify-content-between">
            <label
              className="form-check-label"
              htmlFor={item.Extención}
            >
              {uniqueData[index]}
            </label>
            <label className="check-label" htmlFor={item.Extención}>
              {resultados[item]}
            </label>
          </div>
        </div>
      ))}
      </div>
  )
}


