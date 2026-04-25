import React, { useState } from 'react';
import { S } from '../styles/theme';

export default function MovieCard({ movie, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...S.card,
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}
      onClick={() => onClick(movie)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img style={S.cardImg} src={movie.poster} alt={movie.title} />
      <div style={{ ...S.cardOverlay, opacity: hovered ? 1 : 0 }}>
        <div style={S.cardTitle}>{movie.title}</div>
        <div style={S.cardRating}>{movie.rating} Match</div>
      </div>
    </div>
  );
}
