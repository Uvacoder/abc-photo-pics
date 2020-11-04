import React from 'react'
import Link from 'next/link'
import Button from './components/Buttons'
import Images from './components/Frames'
import data from '../../utils/data/navlinks.json'

function Collections() {
  const collections = data.collections.map((collection, i) =>{
    return (
      <section className="collections-header" key={i}>
        <h3 className='text-1 ts-2 collection-title'>{collection.name}</h3>
        <Button btnLinks={collection.buttonnames}/>
        <Images images={collection.collections}/>
      </section>)
  })
  return (
    <div className='content-center collections-wrapper'>
      {collections}
    </div>
  )
}

export default Collections
