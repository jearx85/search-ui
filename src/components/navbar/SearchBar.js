import React, { useState, useEffect } from 'react';
import logo from '../../img/logo-nadhis.png';
import ShowResults from '../../components/results/ShowResults';
import Filtros from '../../components/filters/Filtros';
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [titles, setTitles] = useState([]);


  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
    if (!selectedFilters[filter]) {
      console.log(`Checkbox seleccionado: ${filter}`);
    }
  };

  const handleSearch = () => {
    // const url = `http://192.168.50.230:8087/query/${searchValue}`;
    const url = `http://10.11.230.23:3002/api/as/v1/engines/{nadhis-pruebas-documentos}/documents/list`;

    fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer search-ii7k98zgbq51hdvso6puyt9o' 
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
        const results = apiData.hits.map((item) => ({
          titulo: item._source.title,
        }));
        setData(results);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    // Initialize data here if needed
  }, []);

  useEffect(() => {
    // Realiza la llamada a la API y muestra la lista de documentos en la consola
    const url = `http://10.11.230.23:3002/api/as/v1/engines/nadhis-pruebas-documentos/documents/list`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer private-883611duideiq7kv66vmtjfb',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
        if (apiData.results && apiData.results.length > 0) {
          const resultado = apiData.results.map((item) => ({
            titulo: item.Title, // Accede directamente a la propiedad Title
          }));
          setTitles(resultado);
          setShowResults(true);
        } else {
          console.error('No se encontraron resultados válidos en la respuesta de la API.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="imagen">
            <img src={logo} alt="Logo" width="140" height="50" />
          </div>
          <form className="d-flex custom-form">
            <div className="input-group">
              <input
                id="search-box"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Filtros data={titles} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
          </div>
          <div className="col-sm-8">
            {showResults && <ShowResults data={titles}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
