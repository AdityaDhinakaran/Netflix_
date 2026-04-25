import React, { useState, useEffect } from "react";
import { MOVIES, CATEGORIES } from "./data/movies";
import { S } from "./styles/theme";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import MovieModal from "./components/MovieModal";
import Footer from "./components/Footer";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // scroll watcher
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isLoggedIn) {
    return (
      <div style={S.app}>
        <LandingPage onLogin={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  // filter movies by search
  const filteredCategories = CATEGORIES.map((cat) => ({
    ...cat,
    movies: cat.movies.filter(
      (m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.genre.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <div style={S.app}>
      <Navbar onSearch={setSearchQuery} scrolled={scrolled} />
      <Hero movie={MOVIES[0]} onInfoClick={setSelectedMovie} />

      <div style={S.rowsContainer}>
        {filteredCategories.map((cat) => (
          <Row
            key={cat.id}
            title={cat.name}
            movies={cat.movies}
            onMovieClick={setSelectedMovie}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  );
}
