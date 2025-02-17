import React, { Fragment } from 'react';
import Link from 'next/link';

import { getGenres, getMovies } from '@/utils/api';

import Category from '@/components/PreviewsCategory/Preview/PreviewCategory.component';
import BrowseArrow from '@/components/BrowseArrow/BrowseArrow.component';

const genresPage = async () => {
  const genres = await getGenres();
  
  const genresData = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMovies(genre.id, genre.name, "genre");
      return { ...genre, ...movies};
    })
  )

  return (
    <div className='px-[70px] my-20'>
      {genresData.map((genre, index) => (
        <Fragment key={`${genre.name}-${index}`}>
          {/* Link con effetto hover */}
          <Link href={`/genres/${genre.id}`} 
            className="group flex items-baseline gap-2 text-3xl font-bold relative"
          >
            <h3 className="text-[20px]">{genre.name}</h3>
            <BrowseArrow />
          </Link> 

          {/* Componente Category */}
          <Category movies={genre.movies} index={genre.id} key={index} />
        </Fragment>
      ))}
    </div>

  )
}

export default genresPage;