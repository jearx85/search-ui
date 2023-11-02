import React, { useState } from 'react';
import logo from '../../img/logo1.png';
import ShowResults from '../../components/results/ShowResults';
import './SeacrhBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState([]); // Declarar el estado para titulo


  const handleSearch = () => {
    const search = document.getElementById('search-box');
    const valor_busqueda = search.value;
    console.log(valor_busqueda);

    const url = `http://192.168.50.230:8087/query/${valor_busqueda}`;

    fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const results = data.hits.map((item) => ({
          titulo: item._source.title,
          // Otras propiedades que desees extraer del objeto
        })); // Aquí puedes hacer lo que desees con los datos de la respuesta
        setData(results); // Actualiza el estado con el valor del título
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      });
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
            <div className="input-group">
              <input id="search-box" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>

      {showResults && <ShowResults data={data} />}
    </div>
  );
}
