import { fetchCategoriesMovies } from "@/utils/api";
import { categories_map } from "@/data/categories_map";

import Categories from "@/components/Categories/Categories.component";
import MovieBanner from "@/components/MovieBanner/MovieBanner.component";


// Homepage, vengono mostrati i caroselli per ogni categoria di films.
const Page = async () => {
  const categoriesData = await Promise.all(
    categories_map.map(async (category) => {
      const movie = await fetchCategoriesMovies(category);
      return { ...category, ...movie };
    }
    )
  )

  return (
    <div className="">
      <MovieBanner videoUrl={'https://res.cloudinary.com/dzm2ylhty/video/upload/v1738772220/ydkbawrwcv3evypi8ubh.mp4'}></MovieBanner>
      <main className="">
        {categoriesData.map((categoryData) => (
          <Categories 
            categoryData={categoryData} 
            index={categoryData.endpoint} 
          />
        ))}
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
};

export default Page;

/**
 * struttura provvisoria route:
 * /app
  /page.js          <-- Homepage con i caroselli
  /category
    /[id]
      /page.js      <-- Pagina dinamica per una categoria (es. /category/28 per "Action")
  /movie
    /[id]
      /page.js      <-- Pagina dinamica per il dettaglio di un film (es. /movie/550 per "Fight Club")
  /login
    /page.js        <-- Pagina di login
  /register
    /page.js        <-- Pagina di registrazione
  /components
    Carousel.js     <-- Componente per il carosello
    MovieCard.js    <-- Componente per un singolo film
  /utils
    api.js          <-- Funzioni per chiamare l'API di TMDb
    genres.js       <-- Mappa dei generi dei film

 */