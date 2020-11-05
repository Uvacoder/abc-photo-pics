import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../utils/helpers/common'

function Stocklinks(props) {
  const navs = props.navs.map((nav, i) => {
    return (
      <li className='ts-5' key={i}>
        <Link 
          href='/discover/[slug]'
          as={`/discover/${Helpers.formatTextToUrl(nav.link)}`}>
          <a className={`${props.active.toLowerCase() === nav.link.toLowerCase() ? 'active' : ''}`}>
            {nav.name}</a></Link>
      </li> )
  })

  return (
    <ul>
      {navs}        
    </ul>
  )
}

export default Stocklinks
