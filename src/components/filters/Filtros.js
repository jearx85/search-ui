import React from 'react';

export default function Filtros({ filtros }) {
  return (
    <div>
      <ul className="list-group">
        {filtros.map((filtro, index) => (
          <li key={index} className="list-group-item">
            {filtro.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
