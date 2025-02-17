import { Fragment } from "react";
import Link from "next/link";
import { getCategories } from "@/utils/api";
import { categories_map } from "@/data/categories_map";

import Category from "@/components/PreviewCategory/PreviewCategory.component";
import MovieBanner from "@/components/MovieBanner/MovieBanner.component";
import BrowseArrow from "@/components/BrowseArrow/BrowseArrow.component";

// Homepage, vengono mostrati i caroselli per ogni categoria di films.
const Page = async () => {
  const videoUrl = 'https://res.cloudinary.com/dzm2ylhty/video/upload/v1738772220/ydkbawrwcv3evypi8ubh.mp4';

  const categoriesData = await Promise.all(
    categories_map.map(async (category) => {
      const movie = await getCategories(category);
      return { ...category, ...movie };
    })
  );
  console.log("categoriesData", categoriesData)

  return (
    <div className="relative">
      <MovieBanner videoUrl={videoUrl} />
      <div className="absolute top-[80vh] w-full h-screen px-[70px]">
      {categoriesData.map((categoryData, index) => (
        <Fragment key={`${categoryData.name}-${index}`}>
          <Link 
            href={`/category/${categoryData.endpoint}`}
            className='group flex items-baseline gap-2 text-3xl font-bold relative mt-16'
          >
            <h3 className="font-bold text-3xl">
              {categoryData.name}
            </h3>
            <BrowseArrow />
          </Link>
          <Category 
            movies={categoryData.movies} 
            index={categoryData.endpoint}
          />
        </Fragment>
      ))}

      </div>
      <footer className="">
        
      </footer>
    </div>
  );
};

export default Page;

/**
 * 
 * cose da fare:
 * - loading.js e notfound.js per caricamento e gestione errori
 * - salvare apikey in embeed variable
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