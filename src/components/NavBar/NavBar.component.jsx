import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SearchBar from './SearchBar/SearchBar.component';

const routes = [
  ['home', '/'],
  ['film', '/genres'],
  ['series', '/series'], 
  ['actors', './actors']
];

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


const NavBar = () => {
  return (
    <nav className='h-28 w-full flex items-center px-[70px] navbar-gradient'>
      <div className=''>
        <Image 
          src='/images/Cine_logo.png' 
          width={140} 
          height={58} 
          alt='logo'
          className='mb-5'
        />
      </div>
      <div className='flex gap-20 ml-40'>
        {routes.map(route => {
          const [ key, variable ] = route;
          return (
              <Link 
                href={variable} 
                key={key}
                className='text-3xl'
              >
                {capitalize(key)}
              </Link>
        )})}
      </div>
      <div className='center-flex ml-auto'>
        <SearchBar />
        <Link href={'./'}>Accedi</Link>
      </div>
      
    </nav>
  )
}

export default NavBar;