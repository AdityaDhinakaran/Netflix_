import React from 'react';
import { S } from '../styles/theme';
import MovieCard from './MovieCard';

export default function Row({ title, movies, onMovieClick }) {
  if (movies.length === 0) return null;
  return (
    <div style={S.row}>
      <h2 style={S.rowTitle}>{title}</h2>
      <div style={S.rowPosters}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </div>
  );
}
