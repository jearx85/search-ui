import React, { useState } from 'react';
import logo from '../../img/logo1.png';
import ShowResults from '../../components/results/ShowResults';
import './SeacrhBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    // Realiza alguna lógica de búsqueda aquí si es necesario
    // Por ejemplo, puedes hacer una llamada a una API
    // Luego, muestra los resultados al configurar showResults en true
    setShowResults(true);
  };

  return (
    <div>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <div className="navbar-brand" href="#">
              <img src={logo} alt="Logo" width="50" height="50" />
            </div>
          </div>
        </nav>
        <form className="d-flex custom-form">
          <div className="input-group"> {/* Utilizamos input-group de Bootstrap */}
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  
    {showResults && <ShowResults />}
  </div>
  
  );
}
