import React from 'react';
import { getMovies } from '@/utils/api';
import { findGenres } from '@/utils/genres';
import Genre from '@/components/Genre/Genre.component';

const GenrePage = async ({ params }) => {
    const { id } = await params; // Id del genere dalla URL
    const genreName = await findGenres(id);
    const initialMovies = await getMovies(id, genreName, "genre", 1); // Carica i primi 20 film per il genere

    const genreData = {
      id: id,
      genreName: genreName,
      initialMovies: initialMovies.movies
    };

  return (
    <div className='p-[70px]'>
      <h3>{genreName}</h3>
      {/* Passa i film iniziali e l'id come prop al Client Component */}
      <Genre data={genreData} type='genre' />
    </div>
  )
}

export default GenrePage;


