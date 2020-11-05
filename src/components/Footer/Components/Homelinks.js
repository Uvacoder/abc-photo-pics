import React from 'react'
import Link from 'next/link'

function homelinks(props) {

  const navs = props.navs.map((nav, i) => {
    return (
      <li className='ts-5' key={i}>
        <Link href={`${nav === 'Home' ? '/' : nav.toLowerCase()}`}>
          <a className={`${props.active === nav ? 'active' : ''}`}>
            {nav}</a></Link>
      </li>
    )
  })

  return (
    <ul className='footer-menu'>
      {navs}
    </ul>
  )
}

export default homelinks
