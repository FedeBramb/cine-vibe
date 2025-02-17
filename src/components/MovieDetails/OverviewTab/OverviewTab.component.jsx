import React, { useState } from 'react';

import MovieInteraction from '@/components/MovieInteraction/MovieInteraction.component';

const OverviewTab = ({ voteAverage, overViewData, overViewP }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 270;

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

  return (
    <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px]' : 'max-h-[200px]'} overflow-hidden`}>
        <MovieInteraction 
            sizes={{ play: 20, plus: 25, star: 30, progress: 80 }}
            value={(voteAverage)}
            color={'white'}
        />
        <div className='w-2/5 mt-3'>
            <p className={`mt-3`}>
                {isExpanded ? overViewP : overViewP.slice(0, maxLength) + '...'}
                {overViewP.length > maxLength && (
                <button onClick={toggleDescription} className="text-gray-500 mt-2">
                {isExpanded ? 'Leggi meno' : 'Leggi tutto'}
                </button>
            )}
            </p>
            

            <p className='small-text-gray mt-3'>
                Cast: {overViewData.cast}
            </p>
            <p className='small-text-gray'>
                Genere: {overViewData.generes.join(', ')}
            </p>
        </div>
    </div>
  )
}

export default OverviewTab;