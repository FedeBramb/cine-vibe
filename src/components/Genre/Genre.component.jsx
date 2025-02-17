'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getMovies } from '@/utils/api';
import Link from 'next/link';

import MovieCard from '@/components/MovieCard/MovieCard.component';

/** 
 * Componente che renderizza tutti i film per genere
 * Inizia dalla pagina 2 (perché la pagina 1 è già caricata)
 * */ 
const Genre = ({ data, type }) => {
  const { initialMovies, id, genreName } = data;
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(2);  
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  // Carica 20 nuovi film ogni volta che si raggiunge il container con l'observer
  const loadMoreMovies = async () => {
    if (loading) return;
  
    setLoading(true);
 
    try {
      const { movies: newMovies } = await getMovies(id, genreName, type, page);
  
      setMovies(prevMovies => {
        // Usa una mappa per filtrare i duplicati basandoti sull'ID del film
        const uniqueMovies = [...prevMovies, ...newMovies].reduce((acc, movie) => {
          if (!acc.some(item => item.id === movie.id)) {
            acc.push(movie);
          }
          return acc;
        }, []);
  
        return uniqueMovies;
      });
  
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Errore caricamento film:", error);
    } finally {
      setLoading(false);
    }
  };
 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreMovies();
        }
      },
      { threshold: 0.7 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [page]);
  
  return (
    <div>
        <div className='w-full my-10 grid grid-cols-7 gap-4'>
          {movies.map(movie => (
            <Link href={`/movie/${movie.id}`} className='relative' key={movie.id}>
                <MovieCard movie={movie} />
            </Link>
          ))}  
        </div>
        <div ref={observerRef} style={{ height: "100px", background: "black" }}></div>
      {loading && <p>Caricamento...</p>}
    </div>
  );
};

export default Genre;
