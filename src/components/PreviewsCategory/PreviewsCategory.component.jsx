import React, { Fragment } from 'react';
import Link from 'next/link';

import BrowseArrow from '../BrowseArrow/BrowseArrow.component';
import PreviewCategory from './Preview/PreviewCategory.component';

const PreviewsCategory = ({ categoriesData }) => {

    const formatString = (str) => {
        return str
          .replace(/_/g, ' ') // Sostituisce gli underscore con uno spazio
          .replace(/^\w/, (c) => c.toUpperCase()); // Mette la prima lettera maiuscola
      };

    return (
        <div className='px-[70px]'>
            {categoriesData.map((categoryData, index) => (
                <Fragment key={`${categoryData.name}-${index}`}>
                <Link 
                    href={`/category/${categoryData.endpoint}`}
                    className='group flex items-baseline gap-2 text-3xl font-bold relative mt-16'
                >
                    <h3 className="font-bold text-3xl">
                    {formatString(categoryData.name)}
                    </h3>
                    <BrowseArrow />
                </Link>
                <PreviewCategory 
                    movies={categoryData.movies} 
                    index={categoryData.endpoint}
                />
                </Fragment>
            ))}
        </div>
  )
}

export default PreviewsCategory