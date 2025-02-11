'use client';

import React from 'react';
import Link from 'next/link';

import SearchBar from './SearchBar/SearchBar.component';

const routes = [
  ['home', '/'],
  ['film', '/film'],
  ['series', '/series'],
  ['actors', './actors']
];

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const NavBar = () => {
  return (
    <nav className='h-full w-full'>
      <div>
        {routes.map(route => {
          const [ key, variable ] = route;
          return (
              <Link href={variable} key={key}>{capitalize(key)}</Link>
        )})}
      </div>
      <div>
        <SearchBar />
        <Link href={'./'}>Accedi</Link>
      </div>
      
    </nav>
  )
}

export default NavBar;