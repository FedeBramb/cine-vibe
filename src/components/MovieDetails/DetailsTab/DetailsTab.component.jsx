import React from 'react'

const DetailsTab = ({ casting, overViewData, productionCountries }) => {
  return (
    <div className='grid grid-cols-3 w-1/2'>
        <div className='flex justify-start flex-col'>
            <span className='small-text-gray'>Cast:</span>
            {casting.map(({ name, id }) => (
                <span key={id}>{name}</span>
            ))}
        </div>
        <div className='flex justify-start flex-col'>
            <span className='small-text-gray'>Generi:</span>
            {overViewData.generes.map((gen, index) => (
                <span key={index}>{gen}</span>
            ))}
        </div>
        <div className='flex justify-start flex-col'>
            <span className='small-text-gray'>Nazioni:</span>
            {productionCountries.map((name, index) => (
                <span key={index}>{name}</span>
            ))}
        </div>
    </div>
  )
}

export default DetailsTab