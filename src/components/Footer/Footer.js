import React from 'react'
import Link from 'next/link'
import Svg from '../Svg/index'

function Footer() {
  return (
    <footer className='content-center'>
      <div className="footer-wrapper">

        
        <div className="content-center footer-top-icons">
          <span className="footer-fotopics-icon">
            <Link href='/'>
              <a>
                <Svg svg='topnav'/>
              </a>
            </Link>
          </span>
          <span className="content-center footer-fotopics-icon text-2">
            Photo and video source from
            <a href='/' 
              target='_blank'
              rel="nofollow">
                <img src="/images/pexels-logo.png" alt=""/></a>
          </span>
        </div>




        <div className="footer-menus text-2">
          <ul className='footer-menu'>
            <li>
              <Link href='/'><a className='active'>Home</a></Link>
            </li>
            <li>
              <Link href='/'><a>Stock Photos</a></Link>
            </li>
            <li>
              <Link href='/'><a>Stock Videos</a></Link>
            </li>
            <li>
              <Link href='/'><a>Discover</a></Link>
            </li>
          </ul>
          <div className='footer-stocks'>
            <span>Stock Collections</span>
            <ul>
              <li>
                <Link href='/'><a>Popular Collections</a></Link>
              </li>
              <li>
                <Link href='/'><a>Animal Collections</a></Link>
              </li>
              <li>
                <Link href='/'><a>Photography Collections</a></Link>
              </li>
              <li>
                <Link href='/'><a>Background Collections</a></Link>
              </li>
              <li>
                <Link href='/'><a>Health and Lifestyle</a></Link>
              </li>
              <li>
                <Link href='/'><a>Marine Photography</a></Link>
              </li>
              <li>
                <Link href='/'><a>Arts and Museums</a></Link>
              </li>
              <li>
                <Link href='/'><a>Drink and Collections</a></Link>
              </li>
              
            </ul>
          </div>
        </div>





        <div className="content-center footer-icons">
          <span className='text-2 text-learn'>
            A project for fun, learning and creativity.</span>
          <div className="content-center footer-menu-icons">
            <a href="/"
              target='_blank'
              rel="nofollow">
              <span><Svg svg='behance'/></span>
            </a>
            <a href="/"
              target='_blank'
              rel="nofollow">
              <span><Svg svg='dribbble'/></span>
            </a>
            <a href="/"
              target='_blank'
              rel="nofollow">
              <span><Svg svg='aiman'/></span>
            </a>
            <a href="/"
              target='_blank'
              rel="nofollow">
              <span><Svg svg='twitter'/></span>
            </a>
            <a href="/"
              target='_blank'
              rel="nofollow">
              <span><Svg svg='linkedin'/></span>
            </a>
          </div>
          <span className='text-2 text-copyright'>&#169; Aiman Adlawan 2020.</span>
        </div>




          
      </div>
    </footer>
  )
}

export default Footer
