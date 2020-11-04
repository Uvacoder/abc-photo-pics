import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../utils/helpers/common'

function Stocklinks(props) {
  const navs = props.navs.map((nav, i) => {
    return (
      <li className='ts-5' key={i}>
        <Link href={`/${Helpers.formatTextToUrl(nav.name)}`}>
          <a>{nav.name}</a></Link>
      </li> )
  })

  return (
    <ul>
      {navs}        
    </ul>
  )
}

export default Stocklinks
