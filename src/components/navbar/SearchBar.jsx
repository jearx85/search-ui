import React, { useState } from 'react';
import logo from '../../img/logo-nadhis.png';
import ShowResults from '../results/ShowResults';
import Filtros from '../filters/Filtros';
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [ data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [filterdocs, setFilterdocs] = useState([]);
  const [isChecked, setIsChecked] = useState(false);


//======================= Filtros ===========================================
  const handleFilterChange = (e, filter = "") => {
    const docFiltrados = data.filter((doc) => doc.Extención === e.target.value);
 
    setIsChecked(e.target.checked)

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));

    setFilterdocs(docFiltrados);
 
  };
  const extensions = data.map(item => item.Extención);
  const uniqueData = [...new Set(extensions)];

//=========================== Hacer petición y setear datos ================================================

const handleSearch = (event) => {
    event.preventDefault();
    const valorBusqueda = document.getElementById("search-box").value
    if(!valorBusqueda) return;//Validar input vacío.
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic Y2l0cmE6Y2l0cjQuMjAyMg==");

    const raw = JSON.stringify({
      "query": valorBusqueda
    });

    const requestOptions = {
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
        const results = apiData.results.map((item) => ({
          id: item.id.raw,
          Title: item.Title.raw,
          Content: item.Content.raw,
          Path: item.Path.raw,
          Categorias: item.Categorias.raw,
          Extención: item.Extención.raw,
        }));
        setData(results);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
//===================================================================
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <div className="imagen">
            <img src={logo} alt="Logo" width="140" height="50" />
          </div>
          <form className="d-flex custom-form" onSubmit={handleSearch}>
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
          <div className="col-md-3">
            <Filtros data={uniqueData} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
          </div>
          <div className="col-sm-9">
            {/* {showResults && <ShowResults data={data}/>} 
            {filterdocs && <ShowResults data={filterdocs}/>} */}
            {isChecked ? <ShowResults data={filterdocs}/> :  <ShowResults data={data}/>} 
          </div>
        </div>
      </div>
    </div>
  );
}