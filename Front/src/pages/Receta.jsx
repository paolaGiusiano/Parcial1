import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecetasCard from '../components/RecetasCard';

const Receta = () => {
  const [recetas, setRecetas] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(''); 
  const navigate = useNavigate();

  // cargar las recetas 
  useEffect(() => {
    fetch('http://localhost:3000/dishes')
      .then(response => response.json())
      .then(data => setRecetas(data)) 
      .catch(error => console.error('Error al cargar las recetas:', error)); 
  }, []);

  // eliminar una receta
  const eliminarReceta = (id) => {
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'DELETE', 
    })
      .then(() => {
        setRecetas(recetas.filter(receta => receta.id !== id));
      })
      .catch(error => console.error('Error al eliminar la receta:', error));
  };

  // Filtrar recetas según el tipo seleccionado
  const recetasFiltradas = () => {
    if (tipoSeleccionado === '') {
      return recetas; 
    }
    return recetas.filter(receta => receta.type === tipoSeleccionado);
  };

  return (
    <div className="container">
      <h1 className="title">Recetas</h1>
      
      <div className="field">
        <label className="label">Filtrar por Tipo de Comida</label>
        <div className="control">
          <div className="select">
            <select value={tipoSeleccionado} onChange={(e) => setTipoSeleccionado(e.target.value)}>
              <option value="">Todos</option>
              <option value="italiana">Italiana</option>
              <option value="mexicana">Mexicana</option>
              <option value="vegana">Vegana</option>
            </select>
          </div>
        </div>
      </div>

      <button className="button is-primary" onClick={() => navigate('/agregar')}>
        Agregar Receta
      </button>

      <div className="columns is-multiline">
        {recetasFiltradas().map(receta => (
          <div key={receta.id} className="column">
            <RecetasCard receta={receta} onDelete={eliminarReceta} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receta;
