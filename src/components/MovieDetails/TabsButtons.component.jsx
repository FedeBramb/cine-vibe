import React from 'react'

const TabsButtons = ({ handler, tab }) => {
  return (
    <div className='absolute bottom-3 left-1/2 h-14 transform -translate-x-1/2 flex gap-7'>
        <button onClick={() => handler('panoramica')} className='relative movie-tabs'>
            PANORAMICA
            <div 
                className={`tab ${tab === 'panoramica' ? 'active-tab' : ''}`} 
            />
        </button>
        <button onClick={() => handler('dettagli')} className="relative movie-tabs">
            DETTAGLI
            <div 
                className={`tab ${tab === 'dettagli' ? 'active-tab' : ''}`} 
            />
        </button>
        <button onClick={() => handler('trailer')} className="relative movie-tabs">
            TRAILER
            <div 
                className={`tab ${tab === 'trailer' ? 'active-tab' : ''}`} 
            />
        </button>
    </div>
  )
}

export default TabsButtons;