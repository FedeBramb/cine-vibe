import React from 'react';

const BrowseArrow = () => {
  return (
    <span className="flex items-baseline overflow-hidden">
        {/* Freccia che si sposta */}
        {/* Testo "Sfoglia tutti" che appare con transizione */} 
        <span className="absolute bottom-1 text-azureText transition-transform duration-300 transform group-hover:translate-x-28 text-[20px]">›</span>  
        <span className="text-[12px]  text-azureText opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Sfoglia tutti
        </span>
    </span>
  )
}

export default BrowseArrow;