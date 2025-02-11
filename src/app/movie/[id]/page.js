import React from 'react';
import { getImageProps } from 'next/image';

import MovieDetails from '@/components/MovieDetails/MovieDetails.component';
import { fetchSingleMovie, fetchLogoMovie, fetchCasting, fetchTrailer } from '@/utils/api';
import { findGenres } from '@/data/genres';
import { getBackgroundImage } from '@/utils/image.js';

// Server Component, gestisce ed estrapola solo i dati che servono al client
const MoviePage = async ({ params }) => {
  const { id } = await params;
  const dataDetails = await fetchSingleMovie(id);
  const logoPath = await fetchLogoMovie(id);
  const casting = await fetchCasting(id);
  const trailer = await fetchTrailer(id);

  const {
    title,
    release_date,
    runtime,
    vote_average,
    vote_count,
    genres,
    overview,
    production_countries,
    backdrop_path
  } = dataDetails.data;
  
  // Ottiene l'immagine di sfondo e logo.
  const backdropUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const logoUrl = `https://image.tmdb.org/t/p/w500${logoPath}`;
  
  // Ottieni le proprietà dell'immagine per srcSet, funziona solo server component.
  const { props: { srcSet } } = getImageProps({
    src: backdropUrl,
    width: 1600,
    height: 1080,
    alt: title,
  });
  
  const backgroundImage = getBackgroundImage(srcSet);

  const movieData = {
    error: dataDetails.error,
    title,
    releaseDate: release_date?.slice(0, 4) ?? "N/A",
    runtime: runtime ?? "N/A",
    voteAverage: vote_average ? ((vote_average * 10) / 10) : "N/A",
    voteCount: vote_count ?? "N/A",
    genres: findGenres(genres)?.length ? genres.map(g => g.name) : ["Generi non disponibili"],
    overview: overview ?? "Nessuna descrizione disponibile",
    productionCountries: production_countries?.length
      ? production_countries.map(c => c.name)
      : ["N/A"],
    logoUrl,
    casting: casting.slice(0, 7).map(({ name, id }) => ({ name, id })), // Solo nome e ID
    backgroundImage,
    trailer
  };
  console.log("server:", movieData.productionCountries);

  return (
    <div>
      <MovieDetails 
        movieData={movieData}
      />
    </div>
  );
};

export default MoviePage;
