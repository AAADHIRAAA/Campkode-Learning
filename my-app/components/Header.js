"use client"
import React from 'react';
import Link from 'next/link';

export default function Header({ onClick }) {
  return (
    <div className='flex flex-row justify-between align-middle items-center bg-zinc-300 px-4 py-2 text-blue-800'>
      <Link href='#' className='justify-start'>CampKodeLearners</Link>
      <div className='flex align-middle items-center justify-end gap-4 '>
        <Link href='/' onClick={() => onClick('home')}>Home</Link>
        <Link href={'#about'} onClick={() => onClick('about')}>About</Link>
        <Link href={'#blogs'} onClick={() => onClick('blogs')}>Blogs</Link>
        <Link href={'#explore'} onClick={() => onClick('explore')}>Explore</Link>
        <Link href={'#reviews'} onClick={() => onClick('reviews')}>Reviews</Link>
        <button className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'><Link href='/Login'>Login</Link></button>
        <button className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'><Link href='/signUp'>SignUp</Link></button>
      </div>
    </div>
  );
}
