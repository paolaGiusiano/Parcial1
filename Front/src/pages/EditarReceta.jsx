import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarReceta = () => {
  // Obtener el ID de la receta de los parámetros de la URL
  const { id } = useParams();
  
  // Estado para almacenar la receta
  const [receta, setReceta] = useState({
    name: '',
    type: '',
    description: '',
    preparation: '',
    image: ''
  });

  
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`http://localhost:3000/dishes/${id}`)
      .then(response => response.json())
      .then(data => setReceta(data))
      .catch(error => console.error('Error al cargar la receta:', error));
  }, [id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceta({ ...receta, [name]: value }); 
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetch(`http://localhost:3000/dishes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receta), 
    })
      .then(response => response.json())
      .then(() => {
        navigate(`/detalles/${id}`); 
      })
      .catch(error => console.error('Error al actualizar la receta:', error));
  };

  return (
    <div className="container">
      <h1 className="title">Editar Receta</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              value={receta.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tipo</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="type"
              value={receta.type}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              value={receta.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Preparación</label>
          <div className="control">
            <textarea
              className="textarea"
              name="preparation"
              value={receta.preparation}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Imagen URL</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              value={receta.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button is-success" type="submit">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditarReceta;
