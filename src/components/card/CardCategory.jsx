import React from 'react'

export default function CardCategories({ uniqueData, handleFilterChange, resultados, offcanvas = "", setselectedCategory, selectedCategory}) {


  function handleCheck(Category){

    if(selectedCategory === Category){
      setselectedCategory(null)
    }else{
      setselectedCategory(Category)
    }
}

const filteredCategories = selectedCategory ? [selectedCategory] : uniqueData

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
              handleFilterChange(e, uniqueData[index], "Categorias")
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
            <label className="check-label" htmlFor={item}>
              {resultados[item]}
            </label>
          </div>
        </div>
      ))}
      </div>
  )
} 
