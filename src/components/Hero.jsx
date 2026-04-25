import React from 'react';
import { S } from '../styles/theme';

export default function Hero({ movie, onInfoClick }) {
  if (!movie) return null;
  
  return (
    <section style={S.hero}>
      <img style={S.heroImg} src={movie.backdrop} alt={movie.title} />
      <div style={S.heroOverlay} />
      <div style={S.heroContent}>
        <span style={S.heroTag}>{movie.genre}</span>
        <h1 style={S.heroTitle}>{movie.title}</h1>
        <p style={S.heroDesc}>{movie.description}</p>
        <div style={S.heroButtons}>
          <button style={S.btnPlay}>▶ Play</button>
          <button style={S.btnInfo} onClick={() => onInfoClick(movie)}>
            ⓘ More Info
          </button>
        </div>
      </div>
    </section>
  );
}
