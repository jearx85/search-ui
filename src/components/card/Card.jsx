import React from 'react'

export default function Card({ uniqueData, selectedFilters, handleFilterChange, resultados, offcanvas = "" }) {
  console.log(uniqueData)
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
            id={item.Extensión}
            checked={selectedFilters[item.Extensión]}
            onChange={(e) =>
              handleFilterChange(e, uniqueData[index])
            }
          />
          <div className="d-flex justify-content-between">
            <label
              className="form-check-label"
              htmlFor={item.Extensión}
            >
              {uniqueData[index]}
            </label>
            <label className="check-label" htmlFor={item.Extensión}>
              {resultados[item]}
            </label>
          </div>
        </div>
      ))}
      </div>
  )
}


