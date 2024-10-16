import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

const DetallesReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch(`http://localhost:3000/dishes/${id}`)
      .then(response => response.json())
      .then(data => setReceta(data));
  }, [id]);

  if (!receta) {
    return <div>Cargando...</div>;
  }

  const handleEdit = () => {
    navigate(`/editar/${id}`);  
  }

  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{receta.name} {receta.image}</p>
        <p className="subtitle">{receta.type}</p>
        <p><strong>Descripción:</strong> {receta.description}</p>
        <p><strong>Preparación:</strong> {receta.preparation}</p>
        <button className="button is-info" onClick={handleEdit}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default DetallesReceta;
