import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarReceta = () => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [preparacion, setPreparacion] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaReceta = {
      name: nombre,
      image: imagen,
      description: descripcion,
      type: tipo,
      preparation: preparacion,
    };

    try {
      const response = await fetch('http://localhost:3000/dishes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaReceta),
      });

      if (response.ok) {
        // Redirigir a la página principal después de agregar la receta
        navigate('/');
      } else {
        console.error('Error al agregar la receta:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="container">
      <h2>Agregar Nueva Receta</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Nombre de la receta"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Imagen (icono)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Imagen (icono)"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Descripción de la receta"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
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
              placeholder="Tipo de receta (italiana, vegana, etc.)"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Preparación</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Pasos para preparar la receta"
              value={preparacion}
              onChange={(e) => setPreparacion(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-link" type="submit">
            Agregar Receta
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgregarReceta;
