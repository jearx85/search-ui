import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../img/logo-nadhis.png';
import ShowResults from '../results/ShowResults';
import Filtros from '../filters/Filtros';
import { useNavigate } from 'react-router-dom'
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  // const [ data, setData] = useState([]);
  const [ dataNadhis, setDataNadhis] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [filterdocs, setFilterdocs] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const valorHome = searchParams.get('search');

//======================= Filtros ===========================================
  const handleFilterChange = (e, filter = "") => {
    const docFiltrados = dataNadhis.filter((doc) => doc.Extención === e.target.value);
 
    setIsChecked(e.target.checked)

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));

    setFilterdocs(docFiltrados);
 
  };
  // const extensions = dataNadhis.map(item => item.Extención);
  // const uniqueData = [...new Set(extensions)];
  
  //=============================================================================
  useEffect(() => {
    if (valorHome) {
      // Realiza la búsqueda con el valor de "searchValue"
      // Actualiza el estado de los resultados en este componente
      const urlNdhis = `http://192.168.50.230:8087/query2/${valorHome}`;
    fetch(urlNdhis)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((docsData) => {
        // console.log(docsData)
        const results = docsData.hits.map((item) => ({
          id: item._id,
          Title: item._source.Title,
          Content: item._source.Content,
          Path: item._source.Path,
          Categorias: item._source.Categorias,
          Extención: item._source.Extención,
        }));
        // console.log(results)
        setDataNadhis(results);
        setShowResults(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [valorHome]);    


//=========================== Hacer petición y setear datos ================================================

const handleSearch = (event) => {
    event.preventDefault();
    const valorBusqueda = document.getElementById("search-box").value
    if(!valorBusqueda) return;//Validar input vacío.
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic Y2l0cmE6Y2l0cjQuMjAyMg==");

    //============================= Api app search ======================================================      
    // const raw = JSON.stringify({
    //   "search_fields": {
    //     "Title": {
    //       "weight": 99
    //     },
    //     "Content":{
    //       "weight": 1
    //     } 
    //   },
    //   "query": valorBusqueda
    // });

    // const requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };
    // const url = "http://10.11.230.23:3002/api/as/v1/engines/nadhis-documentos/search";
    // fetch(url, requestOptions )
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((apiData) => {
 
    //     // const results =  {
    //     //     id: apiData.results[0].id.raw,
    //     //     Title: apiData.results[0].Title.raw,
    //     //     Content: apiData.results[0].Content.raw,
    //     //     Path: apiData.results[0].Path.raw,
    //     //     Categorias: apiData.results[0].Categorias.raw,
    //     //     Extención: apiData.results[0].Extención.raw,
    //     //   }
    //     //   console.log(results.Title)
       
      
    //     const results = apiData.results.map((item) => ({
    //       id: item.id.raw,
    //       Title: item.Title.raw,
    //       Content: item.Content.raw,
    //       Path: item.Path.raw,
    //       Categorias: item.Categorias.raw,
    //       Extención: item.Extención.raw,
    //     }));
    //     setData(results);
    //     setShowResults(true);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });


//====================== Api Nadhis ===========================================
      const urlNdhis = `http://192.168.50.230:8087/query2/${valorBusqueda}`;
      
      navigate(`/main?search=${valorBusqueda}`);
      fetch(urlNdhis)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((docsData) => {
          // console.log(docsData)
          const results = docsData.hits.map((item) => ({
            id: item._id,
            Title: item._source.Title,
            Content: item._source.Content,
            Path: item._source.Path,
            Categorias: item._source.Categorias,
            Extención: item._source.Extención,
          }));
          // console.log(results)
          setDataNadhis(results);
          setShowResults(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  };



//===================================================================
  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid search-bar">
          <div className="imagen">
            <a href="/">
              <img src={logo} alt="Logo" width="140" height="50" />
            </a>
          </div>
          <form className="d-flex custom-form" onSubmit={handleSearch}>
            <div className="d-flex busqueda-main">
              <input
                id="search-box"
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button className="btn-search" type="button" onClick={handleSearch}>
                Buscar
              </button>
            </div>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Filtros data={dataNadhis} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
          </div>
          <div className="col-sm-9">
            {isChecked ? <ShowResults data={filterdocs}/> :  showResults && <ShowResults data={dataNadhis} />} 
          </div>
        </div>
      </div>
    </>
  );
}
