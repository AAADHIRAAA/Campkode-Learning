
"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Login from './Login/page';
import Link from 'next/link';
import SheetComponent from '@/components/sheet';
import ElasticCarousel from '@/components/Carousel';
import { PointCard } from '@/components/PointCard';
import { Mission } from '@/components/PointCard/mission';
import Partners from '@/components/partners';
// import InfiniteScroll from 'react-infinite-scroller';

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
  const [data,setData]=useState(Array.from({length:20}))

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the JWT token exists in the cookie
    // const token = Cookie.get('jwt');
    // console.log(Cookie);
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
const tokenCookie = cookies.find(cookie => cookie.startsWith('__clerk_db_jwt='));
const token = tokenCookie ? tokenCookie.split('=')[1] : null;

    if (token) {
      // Set the Authorization header with the JWT token for subsequent requests
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Set the expiration date of the cookie to a past time
    document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
  };


  return (
    <>
      {/* <div className="top-0"><Header onClick={handleHeaderClick} /></div>
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
     */}
     <nav class="nav-main">
      {isLoggedIn && (<>
        <SheetComponent/>
      </>)}
        <img class="incubator-logo" src="" alt="CampKode"/>
        <div class="nav-btns">
            <div class="nav-slider"></div>
            <a class="nav-link" href="index.html">HOME</a>
            <a class="nav-link" href="index.html#startups">COURSES</a>
            <a class="nav-link" href="#voucher">BLOG</a>            
            <a class="nav-link" href="index.html#about-us">ABOUT US</a>
            <a class="nav-link" href="#footer">CONTACT</a>
            {/* <button className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white' > */}
            {!isLoggedIn && (<>
              <Link href={"/Login"} className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Login</Link>
          
            <Link href="/signUp" className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>Signup</Link>
            </>)}
            {isLoggedIn && (<>
              <button onClick={handleLogout} className='px-3 py-2 rounded bg-blue-800 hover:bg-blue-600 text-white'>
            Logout
          </button>
            </>)}
         
           
        </div>
        <button className="hamburger" onclick="menuToggle()">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
    <ElasticCarousel/>

    <div className='why-incubation'>
    <img loading="lazy" src="10.png" alt="illus" class="mainillus"/>
    <img loading="lazy" src="10.png" alt="illus" class="mainillus2"/>
    <img loading="lazy" src="" alt="CampKodeLogo" class="incubation-main"/>
    <div className="data">
    <h2 data-splitting style={{
      fontFamily: "montserrat, sans-serif",
      fontSize: '4rem',
      fontWeight: 400
    }}> WHY INCUBATION<br/>IN SAIRAM?</h2>
          <hr className="underline"/>
            <p className="desc-info">
                The incubation process allows entrepreneurs to preserve capital and gain external support to accelerate their business growth.
                <br/>Through business incubation, the enterprise center captures each entrepreneur’s uniqueness and offers support and customized services to maximize business potential.
            </p>
    </div>
    </div>

    <section class="incubation-points">
      <PointCard/>
      <Mission/>
    </section>
    <div class="marquee">
            <div class="side-gradient"></div>
            <div class="side-gradient"></div>
            <div class="marquee-content">
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                <img loading="lazy" src="10.png" alt=""/>
                
            </div>
            
        </div>

        <section>
      <div class="row">
        <h1>Board Of Directors</h1>
      </div>
      <div class="row">
      
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-1.png" />
            </div>
            <h3>Karthik Srivathsan</h3>
            <p>Founder</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-2.png" />
            </div>
            <h3>Kausik</h3>
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-3.png" />
            </div>
            <h3>Sairam</h3>
            <p>Designer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row">
        <h1>Our Team</h1>
      </div>
      <div class="row">
      
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-1.png" />
            </div>
            <h3>Karthik Srivathsan</h3>
            <p>Founder</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-2.png" />
            </div>
            <h3>Kausik</h3>
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <div class="img-container">
              <img src="profile-img-3.png" />
            </div>
            <h3>Sairam</h3>
            <p>Designer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
<div className='flex justify-center items-center'>
<Partners/>
    </div>
  
        <section id="footer" class="footer">
        <img loading="lazy" src="9.png" alt="" class="footillus"/>
        <div class="contact-details">
            <img loading="lazy" src="" alt="campKode" class="incub-footer"/>
            <div class="contact-links">
                <div class="contact-phone"><i class="fa fa-phone-alt"></i><a target="_blank" href="tel:+91 7845127111">+91 7845127111</a></div>
                <div class="contact-instagram"><i class="fab fa-instagram"></i><a target="_blank" href="https://www.instagram.com/techno_incubator_sairam/">@techno_incubator_sairam</a></div>
                <div class="contact-mail"><i class="fa fa-envelope"></i><a target="_blank" href="mailto:incubation@sairam.edu.in">incubation@sairam.edu.in</a></div>
                <div class="contact-mail"><i class="fa fa-envelope"></i><a target="_blank" href="mailto:queries.rd@sairam.edu.in">queries.rd@sairam.edu.in</a></div>
        </div>
        <a href="https://sairam.edu.in/"><img loading="lazy" src="clg.png" alt="Sri Sairam Institutions" class="sairam-footer"/></a>
        </div>
        </section>
    </>
  );
}
