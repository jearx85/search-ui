import React, { useState, useEffect } from 'react';
import logo from '../../img/logo-nadhis.png';
import ShowResults from '../results/ShowResults';
import Filtros from '../filters/Filtros';
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [ data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //const [titles, setTitles] = useState([]);

//==================================================================
  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
    if (!selectedFilters[filter]) {
      console.log(`Checkbox seleccionado: ${filter}`);
    }
  };
  const uniqueData = Array.from(new Set(data));
  // const filteredTitles = titles.filter((Categorias) => Categorias !== undefined);

//===========================================================================

const handleSearch = () => {
    const valorBusqueda = document.getElementById("search-box").value
    console.log(valorBusqueda)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic Y2l0cmE6Y2l0cjQuMjAyMg==");

    var raw = JSON.stringify({
      "query": valorBusqueda
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
      
    const url = "http://10.11.230.23:3002/api/as/v1/engines/nadhis-documentos/search";
    fetch(url, requestOptions )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((apiData) => {
        const results = apiData.results.map((id, Title, Content, Path) => ({
          id: id.raw,
          Title: Title.raw, 
          Content: Content.raw,
          Path: Path.raw,
        }));
        console.log(apiData.results[0].Path.raw)
        setData(results);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
//===============================================================================
  // const ListarDocs= () => {
      

  // }

//===============================================================================
  // useEffect(() => {
  //   // Realiza la llamada a la API y muestra la lista de documentos en la consola
  //   const url = `http://10.11.230.23:3002/api/as/v1/engines/nadhis-documentos/documents/list`;

  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer private-883611duideiq7kv66vmtjfb',
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((apiData) => {
  //       if (apiData.results && apiData.results.length > 0) {
  //         const resultado = apiData.results.map(({id, Title, Content, Path, Categorias}) => ({
  //           id,
  //           Title, 
  //           Content,
  //           Path,
  //           Categorias,
  //         }));
         
  //         setTitles(resultado);
  //         setShowResults(true);
  //       } else {
  //         console.error('No se encontraron resultados válidos en la respuesta de la API.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

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
            <Filtros data={data} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
          </div>
          <div className="col-sm-8">
            {showResults && <ShowResults data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
