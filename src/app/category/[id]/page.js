import React from 'react';
import { getMovies } from '@/utils/api';
import Genre from '@/components/Genre/Genre.component';

const CategoryPage = async ({ params }) => {
    const { id } = await params; // Id del genere dalla URL
    const categoryName = id.charAt(0).toUpperCase() + id.slice(1);;
    const initialMovies = await getMovies(id, categoryName, "category", 1); // Carica i primi 20 film per il genere
    
    const categoryData = {
        id: id,
        genreName: categoryName,
        initialMovies: initialMovies.movies
    };

    return (
    <div className='px-[70px]'>
      <h1>{categoryName}</h1>
      {/* Passa i film iniziali e l'id come prop al Client Component */}
      <Genre data={categoryData} type='category' />
    </div>
  )
}

export default CategoryPage;

