import axios from 'axios';

const apiKey = 'e18d9eb8344cbdbbbb5c3e86630a2b7d';
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const fetchCategoriesMovies = async ({ name, endpoint }) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}?language=it-IT&page=1`, {
      params: {
        api_key: apiKey,
      },
    });

    const data = response.data; 
    return {
      name: name, // Aggiungi il nome della categoria
      movies: data.results // Aggiungi i film
    };
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
    return []; 
  }
};

export const fetchSingleMovie = async (movie_id) => {
  try {
    const response = await axios.get(`${BASE_URL}${movie_id}?language=it-IT'`, {
      params: {
        api_key: apiKey,
      }
    });
    
    const data = response.data;
    return { data: data, error: null };
    
  } catch (error) {
    console.error('Errore nel recupero dei dettagli del film:', error);
    return { data: null, error: error.message }; 
  }
}

export const fetchLogoMovie = async (movie_id) => {
  try {
    const response = await axios.get(
      ` ${BASE_URL}${movie_id}/images?language=it-IT&include_image_language=it,it`, {
      params: {
        api_key: apiKey,
      }
    });

    const data = response.data;
    return data.logos[0].file_path;
  } catch (error) {
    console.error('Errore nel recupero dei logo del film:', error);

  }
}

export const fetchCasting = async (movie_id) => {
  try {
    const response = await axios.get(
    `${BASE_URL}${movie_id}/credits?language=it-IT`, {
    params: {
      api_key: apiKey,
    }
  });
    const data = response.data;
    return data.cast.map(actor => {
      return {
        id: actor.id,
        name: actor.name,
      }
     });
  } catch (error) {
    console.error('Errore nel recupero del casting:', error);
  }
};

export const fetchTrailer = async (movie_id) => {
  try {
    const response = await axios.get (
      `${BASE_URL}${movie_id}/videos?language=it-IT';`, {
        params: {
          api_key: apiKey,
        }
      })
    const data = response.data;
    return data.results[0].key;
  } catch (error) {
    console.error('Errore nel recupero del trailer:', error);
  }
}


  
 const testData = async () =>{
     const data = await fetchTrailer(539972);
    
      console.log(data)
     return;
 }

 testData();