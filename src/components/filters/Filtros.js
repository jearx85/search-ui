import React from 'react'

export default function Filtros() {
  return (
    <div>
        <div className="form-check">
           
        <div className="form-check" >
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                Default checkbox
            </label>
        </div>
        <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                <label className="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                </label>
            </div>
               
        </div>
    </div>
  )
}
