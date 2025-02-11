'use client';

import React from 'react';
import { Play, Plus, Star } from "lucide-react";
import ProgressCircle from '@/components/MovieInteraction/ProgressCircle.component';

const MovieInteraction = ({ sizes, value }) => {
    return (
      <div className='flex gap-4 h-16'>
          <div className='center-flex icon-movie' >
              <Play size={sizes[0]} color="white" />
          </div>
          <div className='center-flex icon-movie'>
              <Plus size={sizes[1]} color="white" />
          </div>
          <div className='center-flex icon-movie'>
              <Star size={sizes[2]} color="white" />
          </div>	
          <ProgressCircle value={value} />
      </div>
    )
  }
  

export default MovieInteraction