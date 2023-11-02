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
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      // Si la tecla presionada es Enter, ejecuta la búsqueda
     
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <nav className="navbar bg-body-tertiary">
            <div className="container">
              <div className="navbar-brand" href="#">
                <div className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                     <img src={logo} alt="Logo" width="50" height="50" />
                </div>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Filtros</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <hr/>
                  <ul className="list-group">
                        <li className="list-group-item active" aria-current="true">An active item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                  </ul>
                      <br/>
                      <hr/>
                      <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        Default radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label className="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                      </label>
                    </div>   
                </div>
              </div>
            </div>
          </nav>
          <form className="d-flex custom-form">
            <div className="input-group">
              <input id="search-box" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onKeyDown={handleEnterPress}/>
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
