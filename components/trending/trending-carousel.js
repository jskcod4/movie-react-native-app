import React, { useState, useEffect } from 'react';

import GetTrending from '../../services/GetTrending';

import MovieCarousel from '../movie/movie-carousel';

const TrendingCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetTrending().then((res) => {
      setMovies(res);
    });
  }, []);

  return <MovieCarousel movies={movies} />;
};

export default TrendingCarousel;
