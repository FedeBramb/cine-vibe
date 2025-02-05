"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import MovieCard from '../MovieCard/MovieCard.component';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Categories.styles.css';


//id, title, poster_path, vote_average, genre_ids
const Categories = ({ categoryData }) => {
  const { name, movies} = categoryData;

  return (
    <>
      <h3>{name}</h3>
      <Swiper
        slidesPerView={7}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}> 
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}   
      </Swiper>
    </>
  )
}

export default Categories;