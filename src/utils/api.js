import axios from 'axios';
// Evitiamo di 
import { cache } from 'react';

const API_KEY = 'e18d9eb8344cbdbbbb5c3e86630a2b7d';
const BASE_URL = "https://api.themoviedb.org/3/";

// Restituisce nome categoria e film correlati.
export const getCategories = cache(async ({ name, endpoint }) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${endpoint}?api_key=${API_KEY}&language=it-IT&page=1`);

    return {
      name: name,
      movies: data.results.slice(0, 12)
    };
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
    return []; 
  }
});

export const getGenres = cache(async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=it-IT`);
    
    return data.genres;
  } catch (error) {
    console.error('errore recupero generi: ', error);
    return null;
  }
});

// Recupera i film per genere o film per categoria (es. popular, top_rated)
export const getMovies = cache( async (categoryOrGenreId, genreName, type = 'category', page = 1) => {
  try {
    let url = '';
    if (type === 'genre') {
      url = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${categoryOrGenreId}&language=it-IT&page=${page}`;
    } else {
      
      url = `${BASE_URL}movie/${categoryOrGenreId}?api_key=${API_KEY}&language=it-IT&page=${page}`;
    }

    const { data } = await axios.get(url);

    return {
      name: genreName || categoryOrGenreId, // Usa il nome del genere o della categoria
      movies: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
});

// Restituisce le informazioni su film singolo tramite id.
export const getSingleMovie = cache(async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=it-IT'`);
    
    return { data: data, error: null };
    
  } catch (error) {
    console.error('Errore nel recupero dei dettagli del film:', error);
    return null; 
  }
});

// Restituisce il primo logo utile in italiano o inglese
export const getLogoMovie = cache(async (movie_id) => {
  const fetchData = async (language) => {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}/images?include_image_language=${language}`, {
      params: { api_key: API_KEY },
    });

    return data.logos;
  };

  try {
    let logos = await fetchData('it');  
    
    if (!logos.length) {
      logos = await fetchData('en');  
    }
    
    return logos.length ? logos[0].file_path : null;
  } catch (error) {
    console.error('Errore nel recupero dei logo del film:', error);
    return null;
  }
});

// Restituisce il casting del film con id e nome.
export const getCasting = cache(async (movie_id) => {
  try {
    const { data } = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=it-IT`);
    
    return data.cast.map(actor => {
      return {
        id: actor.id,
        name: actor.name,
      }
     });
  } catch (error) {
    console.error('Errore nel recupero del casting:', error);
    return null;
  }
});

// Restituisce il primo trailer in italiano o inglese.
export const getTrailer = cache(async (movie_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}/videos?api_key=${API_KEY}&language=it-IT`
    );

    const itTrailer = data.results.find((video) => video.type === "Trailer");
    if (itTrailer) return itTrailer.key;

    const fallbackResponse = await axios.get(
      `${BASE_URL}movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
    );

    const enTrailer = fallbackResponse.data.results.find(
      (video) => video.type === "Trailer"
    );

    return enTrailer ? enTrailer.key : null;
  } catch (error) {
    console.error("Errore nel recupero del trailer:", error);
    return null;
  }
});
  
 const testData = async () =>{
   const logo = await getGenres();
  
     console.log(logo);
   return;
  }

  testData();