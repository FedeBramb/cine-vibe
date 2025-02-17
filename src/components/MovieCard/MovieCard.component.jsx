import React from 'react';
import Image from "next/image";

import { findGenres } from "@/utils/genres";

const MovieCard = ({ movie }) => {
    
  return (
    <>
      <div key={movie.id} className='relative'>
        {/* <h3>{movie.title}</h3> */}
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          width={500} // Valore iniziale, poi ridimensionato con CSS
          height={300} 
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </>
  )
}

export default MovieCard;