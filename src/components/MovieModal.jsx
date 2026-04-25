import React from 'react';
import { S } from '../styles/theme';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div style={S.modalOverlay} onClick={onClose}>
      <div style={S.modalBox} onClick={(e) => e.stopPropagation()}>
        <button style={S.modalClose} onClick={onClose}>✕</button>

        <div style={S.modalImgWrap}>
          <img style={S.modalImg} src={movie.backdrop} alt={movie.title} />
          <div style={S.modalGrad} />
          <div style={S.modalTitleArea}>
            <h2 style={S.modalTitle}>{movie.title}</h2>
            <div style={S.heroButtons}>
              <button style={S.btnPlay}>▶ Play</button>
              <button style={{ ...S.btnInfo, padding: "0.6rem" }}>＋</button>
            </div>
          </div>
        </div>

        <div style={S.modalBody}>
          <div style={S.modalMeta}>
            <span style={S.metaMatch}>{movie.rating} Match</span>
            <span style={S.metaYear}>{movie.year}</span>
            <span style={S.metaHD}>HD</span>
          </div>
          <p style={S.modalDesc}>{movie.description}</p>
          <p style={S.modalGenre}>
            Genre: <span style={S.genreSpan}>{movie.genre}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
