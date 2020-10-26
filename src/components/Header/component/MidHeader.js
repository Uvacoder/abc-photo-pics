import React from 'react'
import Link from 'next/link'

function MidHeader() {
  return (
    <div className="content-center mid-header text-2">
      <div className="content-center mid-header-menu active">
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div className="content-center mid-header-menu">
        <Link href='/'>
          <a>Photos</a>
        </Link>
      </div>
      <div className="content-center mid-header-menu">
        <Link href='/'>
          <a>Videos</a>
        </Link>
      </div>
      <div className="content-center mid-header-menu">
        <Link href='/'>
          <a>Discover</a>
        </Link>
      </div>
    </div>
  )
}

export default MidHeader
