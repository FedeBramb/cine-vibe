import axios from 'axios';

const apiKey = 'e18d9eb8344cbdbbbb5c3e86630a2b7d';

export const fetchCategoriesMovies = async ({ name, endpoint}) => {

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, {
      params: {
        api_key: apiKey,
      },
    });

    const data = response.data; // I dati vengono ricevuti qui
    return {
      name: name, // Aggiungi il nome della categoria
      movies: data.results // Aggiungi i film
    };
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
    return []; // Se c'è un errore, ritorna un array vuoto
  }
};


  
// const testData = async () =>{
//     const data = await fetchFilms();
//     console.log(data);
//     console.log(data.length);
//     return;
// }

// testData();


