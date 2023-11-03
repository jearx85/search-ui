import React, { useState } from 'react';
import logo from '../../img/nadhis-logo.png';
import ShowResults from '../../components/results/ShowResults';
import Filtros from '../../components/filters/Filtros'
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
          resumen: item._source.resumen
          
          // Otras propiedades que desees extraer del objeto
        })); // Aquí puedes hacer lo que desees con los datos de la respuesta
        console.log(data)
        setData(results); // Actualiza el estado con el valor del título
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Aquí puedes manejar el error, mostrar un mensaje al usuario, etc.
      });
     
  };
  // const handleEnterPress = (event) => {
  //   if (event.key === 'Enter') {
  //     // Si la tecla presionada es Enter, ejecuta la búsqueda
     
  //     handleSearch();
  //   }
  // };

  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
        <div className="imagen">
                     <img src={logo} alt="Logo" width="150" height="50" />
                </div>
          <form className="d-flex custom-form">
            <div className="input-group">
              <input id="search-box" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
          <div className='row'>
              {/* <div className="col-sm-4">
                <Filtros data={data}/>
              </div> */}
              <div className="col-sm-12">
                  {showResults && <ShowResults data={data} />}

              </div>
          </div>
    </div>
  );
}
