import React from 'react'
import Link from 'next/link'
import Svg from '../../Svg/index'

function TopNav() {
  return (
    <div className="content-center top-nav">

        <div className="content-center top-nav-left">
          <Link href='/'>
            <a>
              <Svg svg='topnav'/>
            </a>
          </Link>
          <div className="content-center top-input">
            <input 
              className='text-2'
              type="text" 
              placeholder='Search photos and videos'/>
            <button>
              <span>
                <Svg svg='search'/>
              </span>
            </button>
          </div>
        </div>
        
        <div className="top-nav-right text-2">
          <Link href='/'>
            <a><span>Explore</span></a>
          </Link>
          <Link href='/'>
            <a><span>My Favorites</span></a>
          </Link>
        </div>

      </div>
  )
}

export default TopNav
