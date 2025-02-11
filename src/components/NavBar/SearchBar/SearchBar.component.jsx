'use client';

import React, { useState } from 'react';
import Image from 'next/image';



const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleOnChange = (e) => {
        setSearchInput(e.target.value);
    };

  return (
    <div>
        <Image 
            src='/svgs/search.svg' 
            width={23} 
            height={23} 
            style={{ color: 'white' }} 
            alt='search'
        />
        <input 
            type='text' 
            value={searchInput} 
            onChange={handleOnChange} 
            className='text-white bg-black'
        />
        <div className='dropdown'>

        </div>
    </div>
  )
}

export default SearchBar