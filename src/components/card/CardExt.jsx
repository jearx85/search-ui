import React, {useState} from 'react'

export default function Card({ uniqueData, handleFilterChange, resultados, offcanvas = ""  }) {

  const [selectedExtensions, setSelectedExtensions] = useState(null)

  function handleCheck(extension){

    if(selectedExtensions === extension){
      setSelectedExtensions(null)
    }else{
      setSelectedExtensions(extension)
    }
}

const filteredExtensions = selectedExtensions ? [selectedExtensions] : uniqueData

  return (
    <div>
        {filteredExtensions.map((item, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name="filtrar"
            data-bs-dismiss= {offcanvas}
            value={item}
            id={item}
            checked={selectedExtensions === item}
            onChange={(e) =>{
              handleFilterChange(e, uniqueData[index])
              handleCheck(item)
              }
            }
          />
          <div className="d-flex justify-content-between">
            <label
              className="form-check-label"
              htmlFor={item}
            >
              {item}
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
