import React, { useState } from 'react';
import './ShowResults.css';
import parse from 'html-react-parser';

export default function ShowResults({ data }) {
  const documentsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastDocument = currentPage * documentsPerPage;
  const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
  const currentDocuments = data.slice(indexOfFirstDocument, indexOfLastDocument);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const shouldShowPagination = data.length > documentsPerPage;


  return (
    <div className="container">
      <div className="cont-card">
        {currentDocuments.map(({ id, Title, Content, Path, TitleH, ContentH, Categorias }) => (
          <div className="card" key={id}>
            <h5 className="card-header">
              <b>{TitleH ? parse(TitleH) : Title}</b>
            </h5>
            <div className="card-body">
              <h5 className="card-title">Categoría: </h5>
              <p>{Categorias}</p>
              <h5 className="card-title">Contenido</h5>
              <p className="card-text">
                {ContentH ? (
                  parse(`${ContentH.slice(0, 1000)}...`)
                ) : (
                  `${Content.slice(0, 1000)}...`
                )}
              </p>
              <button
                className="card-button"
                onClick={() => window.open(`http://localhost:3008/${Path.replace("C:/Users/user/Dropbox/nadhis_pruebas/Folder_monitoring", "")}`, '_blank')}
              >
                Ver documento
              </button>
            </div>
          </div>
        ))}
      </div>
      {shouldShowPagination && (
      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(data.length / documentsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${currentPage === Math.ceil(data.length / documentsPerPage) ? 'disabled' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
      )}
    </div>
  );
}
