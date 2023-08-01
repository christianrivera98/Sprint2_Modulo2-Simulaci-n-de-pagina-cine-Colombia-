import React from 'react';
import '../cardSwiper/CardSwiper.scss'

export function CardSwiper({ movie }) {
  if (!movie || !movie.poster_path) {
    return null; // Si no hay datos de película o no hay poster_path, no renderizar nada
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      <div className="card-conteiner">
        <li className="li-imagenes">
          <img
            className="li-imagenes__img-desktop"
            src={imageUrl}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
        </li>
      </div>
    </>
  );
}

export default CardSwiper;