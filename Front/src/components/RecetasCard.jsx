import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecetaCard.module.css';

const RecetasCard = ({ receta, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.title}>{receta.image}</p>
        <p className={styles.subtitle}>
          Receta: {receta.name} <br />
          Categoria: {receta.type}
        </p>
        <div className={styles.buttonContainer}>
          <Link to={`/details/${receta.id}`} className={`button is-link ${styles.button}`}>
            Ver detalles
          </Link>
          <button className={`button is-danger ${styles.button}`} onClick={() => onDelete(receta.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecetasCard;
