import React from 'react';
import { Play, Plus, Star } from "lucide-react";
import ProgressCircle from '@/components/MovieInteraction/ProgressCircle.component';

// Renderizza tasti Play, Plus e ProgressCircle
const MovieInteraction = ({ sizes, value, background }) => {
    return (
      <div className={`realtive z-50 flex gap-4 h-16 ${background}`}>
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