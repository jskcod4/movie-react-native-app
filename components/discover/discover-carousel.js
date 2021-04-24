import React, { useState, useEffect } from 'react';

import GetDiscover, { SortByOptions } from '../../services/GetDiscover';

import MovieCarousel from '../movie/movie-carousel';

const DiscoverCarousel = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetDiscover(SortByOptions.voteDesc).then((res) => {
      setMovies(res);
    });
  }, []);

  return <MovieCarousel movies={movies} />;
};

export default DiscoverCarousel;
