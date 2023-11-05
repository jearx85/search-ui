import React, { useState, useEffect } from 'react';
import logo from '../../img/nadhis-logo.png';
import ShowResults from '../../components/results/ShowResults';
import Filtros from '../../components/filters/Filtros';
import './SearchBar.css';

export default function SearchBar() {
  const [showResults, setShowResults] = useState(false);
  const [data, setData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchValue, setSearchValue] = useState('');

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
    const url = `http://192.168.50.230:8087/query/${searchValue}`;

    fetch(url, {
      method: 'GET',
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
            {showResults && <ShowResults data={data}/>}
          </div>
        </div>
      </div>
    </div>
  );
}
