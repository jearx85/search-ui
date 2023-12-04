import React, {useState} from 'react'

export default function Card({ uniqueCategory, handleFilterChange, resultadosCategory, offcanvas = ""  }) {

  const [selectedCategory, setselectedCategory] = useState(null)

  function handleCheck(Categorias){

    if(selectedCategory === Categorias){
      setselectedCategory(null)
    }else{
      setselectedCategory(Categorias)
    }
}

const filteredCategories = selectedCategory ? [selectedCategory] : uniqueCategory

  return (
    <div>
        {filteredCategories.map((item, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="checkbox"
            name="filtrar"
            data-bs-dismiss= {offcanvas}
            value={item}
            id={item}
            checked={selectedCategory === item}
            onChange={(e) =>{
        
              handleFilterChange(e, uniqueCategory[index])
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
            <label className="check-label" htmlFor={item.Categorias}>
              {resultadosCategory[item]}
            </label>
          </div>
        </div>
      ))}
      </div>
  )
} 
