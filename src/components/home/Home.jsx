import React, { useState } from "react";
import "./Home.css";
import logo from "../../img/logo-nadhis.png";
import { useNavigate } from "react-router-dom";
// import ShowResults from "../results/ShowResults";
// import Filtros from '../filters/Filtros';

export default function Home() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  // const [data, setData] = useState([]);
  // const [showResults, setShowResults] = useState(false);

//============================================================================
// const handleSearch = (event) => {
//     event.preventDefault();
//     const valorBusqueda = document.getElementById("search-box").value
//     if(!valorBusqueda) return;//Validar input vacío.
//       const urlNdhis = `http://localhost:8000/query2/${valorBusqueda}`;
  
//       fetch(urlNdhis)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then((docsData) => {
//         const results = docsData.hits.map((item) => {
//           const obj = {
//             id: item._id,
//             Title: item._source.Title,
//             Content: item._source.Content,
//             Path: item._source.Path,
//             Categorias: item._source.Categorias.pop(),
//             Extensión: item._source.Extensión,
//             TitleH: item.highlight && item.highlight.Title ? item.highlight.Title[0] : null,
//             ContentH: item.highlight && item.highlight.Content ? item.highlight.Content[0] : null,
//           };

//           return obj;
//         });
//           setData(results);
//           setShowResults(true);

//           // navigate(`/main?search=${searchValue}`);
//         })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//   };

  //============================================================================
  const handleClick = (e) => {
    if (searchValue.trim() === "") {
      e.preventDefault();
      return;
    } else {
      navigate(`/main?search=${searchValue}`);
    }
  };

  return (
    <>
      <div className="imagen-home">
        <img src={logo} alt="Logo" width="240" height="130" />
      </div>
      <div className="home-container ">
        <form className="busqueda" onSubmit={handleClick}>
          <input
            id="search-box"
            className="form-control form-control-lg input-home"
            type="text"
            aria-label="form-control"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus={true}
          />
          <div className="boton">
            <button type="submit" className="btn-home" onClick={handleClick}>
              Buscar
            </button>
          </div>
        </form>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Filtros data={data}/>
          </div>
          <div className="col-sm-12 col-lg-9">
        { showResults && <ShowResults data={data} />} 
          </div>
        </div>
      </div> */}
    </>
  );
}
