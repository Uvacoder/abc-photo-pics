import React from 'react'
import Link from 'next/link'
import Images from './Images'
import {Helpers} from '../../../utils/helpers/common'

function Frames(props) {

  const imgs = props.images.map((img, i) => {
    return (
      <Link key={i}
        href='/discover/[slug]' 
        as={`/discover/${Helpers.formatTextToUrl(img.name)}`}>
        <a>
          <div className="collection-images">
            <Images images={img.images}/>
            <h3 className='text-1 ts-3 collection-album'>{img.name}</h3>
          </div>
        </a>
      </Link> )
  })

  return (
    <div className="collection-images-wrapper">
      <div className="image-scroll">
        {imgs}
      </div>
    </div>
  )
}

export default Frames
