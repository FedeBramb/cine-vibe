"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

import MovieCard from '../MovieCard/MovieCard.component';
import MovieInteraction from '../MovieInteraction/MovieInteraction.component';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PreviewCategory.styles.css';

const PreviewCategory = ({ movies }) => {
  return (
    <div className='w-full my-10'>
      {/* <h3 className='text-3xl'>{name}</h3> */}
      <Swiper
        slidesPerView={7}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        className="mySwiper"
      >
        <div className=''>
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <Link href={`/movie/${movie.id}`} className='relative'>
                <MovieCard movie={movie} />
                {/* <div className='ciao'>
                  <MovieInteraction 
                    sizes={{ play: 20, plus: 25, star: 30, progress: 80 }}
                    value={77}
                    background='bg-black'
                    />
                </div> */}
              </Link>
            </SwiperSlide>
          ))}   
        </div>
      </Swiper>
    </div>
  )
}

export default PreviewCategory;