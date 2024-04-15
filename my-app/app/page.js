
"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ElasticCarousel from '@/components/Carousel';

export default function Home() {
  const [section, setSection] = useState('home');

  const handleHeaderClick = (sectionName) => {
    setSection(sectionName);
    // Scroll to the corresponding section using JavaScript
    const element = document.getElementById(sectionName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="top-0"><Header onClick={handleHeaderClick} /></div>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <div id="home" className='w-screen  h-screen'>
          {section === "home" && <ElasticCarousel />}
        </div>
        <div id="about" className='w-screen  h-screen'>
          {section === "about" || section==="home" && <h1>About Us</h1>}
        </div>
        <div id="partners" className='w-screen  h-screen'>
          {section ==="partners" &&<ElasticCarousel />}
        </div>
        <div id="explore" className='w-screen  h-screen'>
          {section==='explore' &&<h1>Explore</h1>}
        </div>
        <div id="reviews" className='w-screen  h-screen'>
          {section==='reviews' &&<ElasticCarousel/>}
        </div>
      </div>
      <div className="sticky bottom-0"><Footer /></div>
    </>
  );
}
