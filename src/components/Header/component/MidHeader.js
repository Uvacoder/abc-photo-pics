import React from 'react'
import Link from 'next/link'
import navdata from '../../../utils/data/navlinks.json'


function MidHeader(props) {

  let navs = navdata.menus.map((nav, i) => {
    return (
      <div className={`content-center mid-header-menu 
        ${props.active === nav ? 'active' : ''}`} key={i}>
        <Link href={`/${nav === 'Home' ? '' : nav.toLowerCase()}`}>
          <a>{nav}</a>
        </Link>
      </div>
    )
  })

  return (
    <div className="content-center mid-header text-2 ts-4">
      {navs}
    </div>
  )
}

export default MidHeader
