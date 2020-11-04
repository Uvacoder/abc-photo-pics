import React from 'react'
import Link from 'next/link'
import navlink from '../../utils/data/navlinks.json'
import Svg from '../Svg/index'
import Homelinks from './Components/Homelinks'
import Stocklinks from './Components/Stocklinks'
import Footerlinks from './Components/Footerlinks'

function Footer() {
  return (
    <footer className='content-center'>
      <div className="footer-wrapper">

        <div className="content-center footer-top-icons">
          <span className="footer-fotopics-icon">
            <Link href='/'>
              <a><Svg svg='topnav'/></a>
            </Link>
          </span>
          <span className="content-center footer-fotopics-icon text-2 ts-10">
            Photo and video source
            <a href='https://www.pexels.com/' 
              target='_blank'
              rel="nofollow">
                <img src="/images/pexels-logo.png" alt=""/></a>
          </span>
        </div>

        <div className="footer-menus text-2">
          <Homelinks navs={navlink.menus}/>
          <div className='footer-stocks'>
            <span>Stock Collections</span>
            <Stocklinks navs={navlink.collections}/>
          </div>
        </div>

        <Footerlinks />
      </div>
    </footer>
  )
}

export default Footer
