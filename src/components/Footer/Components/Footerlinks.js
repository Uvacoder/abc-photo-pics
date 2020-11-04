import React from 'react'
import Svg from '../../Svg'
import links from '../../../utils/data/footerlinks.json'

function Footerlinks() {

  const navs = links.map((nav, i) => {
    return (
      <a href={nav.link} key={i}
        target='_blank'
        rel="nofollow">
        <span><Svg svg={nav.name}/></span>
      </a>
    )
  })

  return (
    <div className="content-center footer-icons">
      <span className='text-2 ts-9 text-learn'>
        A project for fun, learning and creativity.</span>
      <div className="content-center footer-menu-icons">
        {navs}
      </div>
      <span className='text-2 ts-9 text-copyright'>&#169; Aiman Adlawan 2020.</span>
    </div>
  )
}

export default Footerlinks
