import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../img/logo-nadhis.png';
import ShowResults from '../results/ShowResults';
import Filtros from '../filters/Filtros';
import { useNavigate } from 'react-router-dom'
// import Pdf from '../readDocs/ReadDocs';
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [ dataNadhis, setDataNadhis] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedFiltersCat, setSelectedFiltersCat] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [filterdocs, setFilterdocs] = useState([]);
  // const [filterDocsCat, setfilterDocsCat] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const valorHome = searchParams.get('search');

//======================= Filtros ===========================================
  const handleFilterChange = (e, filter = "") => {
    const docFiltrados = dataNadhis.filter((doc) => doc.Extensión === e.target.value);

    setIsChecked(e.target.checked)

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));

    setFilterdocs(docFiltrados);
 
  };
  //----------------------------------------------------
  const handleFilterChangeCat = (e, filter = "") => {
console.log(dataNadhis)
    const docFiltradosCat = dataNadhis.filter((doc) => doc.Categorias === e.target.value);
    setIsChecked(e.target.checked)
    setSelectedFiltersCat((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }
    ));
    setFilterdocs(docFiltradosCat);
 
  };

  //=============================================================================
  useEffect(() => {
    if (valorHome) {
      // Realiza la búsqueda con el valor de "searchValue"
      // Actualiza el estado de los resultados en este componente
      const urlNdhis = `http://localhost:8000/query2/${valorHome}`;
    fetch(urlNdhis)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((docsData) => {
        const results = docsData.hits.map((item) => {
          const obj = {
            id: item._id,
            Title: item._source.Title,
            Content: item._source.Content,
            Path: item._source.Path,
            Categorias: item._source.Categorias.pop(),
            Extensión: item._source.Extensión,
            TitleH: item.highlight && item.highlight.Title ? item.highlight.Title[0] : null,
            ContentH: item.highlight && item.highlight.Content ? item.highlight.Content[0] : null,
          };
        
          return obj;
        });
        
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

 
//====================== Api Nadhis ===========================================
      const urlNdhis = `http://localhost:8000/query2/${valorBusqueda}`;
      
      navigate(`/main?search=${valorBusqueda}`);
      // setPath(urlNdhis);
      fetch(urlNdhis)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((docsData) => {
        const results = docsData.hits.map((item) => {
          const obj = {
            id: item._id,
            Title: item._source.Title,
            Content: item._source.Content,
            Path: item._source.Path,
            Categorias: item._source.Categorias.pop(),
            Extensión: item._source.Extensión,
            TitleH: item.highlight && item.highlight.Title ? item.highlight.Title[0] : null,
            ContentH: item.highlight && item.highlight.Content ? item.highlight.Content[0] : null,
          };

          return obj;
        });
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
          <div className="col-lg-3">
            <Filtros data={dataNadhis} handleFilterChange={handleFilterChange} handleFilterChangeCat={handleFilterChangeCat} />
          </div>
          <div className="col-sm-12 col-lg-9">
            {isChecked ? <ShowResults data={filterdocs}/> :  showResults && <ShowResults data={dataNadhis} />} 
          </div>
        </div>
      </div>
    </>
  );
}
