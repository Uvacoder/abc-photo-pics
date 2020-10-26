import React from 'react'
import Link from 'next/link'

function Collections() {
  return (
    <div className='content-center collections-wrapper'>



      <div className="collections-header">
        <h3 className='text-1'>Popular Collections</h3>
        <div className="content-center text-2 collection-buttons">
          <Link href='/'>
            <a><span>Celebrate</span></a>
          </Link>
          <Link href='/'>
            <a><span>Trends</span></a>
          </Link>
          <Link href='/'>
            <a><span>Clothing</span></a>
          </Link>
          <Link href='/'>
            <a><span>Cars</span></a>
          </Link>
          <Link href='/'>
            <a><span>Parties</span></a>
          </Link>
          <Link href='/'>
            <a><span>Travels</span></a>
          </Link>
        </div>        
      </div>


     
    </div>
  )
}

export default Collections
