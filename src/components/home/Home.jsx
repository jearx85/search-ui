import React, { useState } from 'react'
import './Home.css'
import logo from '../../img/logo-nadhis.png';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleClick = (e) => {
    if(searchValue.trim() === ''){
      e.preventDefault();
      return
       
    }else{
      navigate(`/main?search=${searchValue}`);
    }
  };

  return (
    <>
    <div className="imagen-home">
        <img src={logo} alt="Logo" width="240" height="130" />
    </div>
    <div className='home-container '>
        <form className='busqueda'>
            <input
            className="form-control form-control-lg input-home"
            type="text"
            aria-label="form-control"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus={true}
          />
            <div className='boton'>
              <button type="submit" className="btn-home" onClick={handleClick}>
                Buscar
              </button>
            </div>
        </form>
    </div>
    
    </>
  )
}
