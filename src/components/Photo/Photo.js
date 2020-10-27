import React from 'react'
import Svg from '../Svg/index'

function Photo() {
  return (
    <div className='content-center ind-photo-wrapper'>
      
      <div className="content-center ind-photo-desc">
        <div className="content-center artist">
          <img src="/images/photographer.png" alt=""/>
          <div className="artist-detail text-2">
            <span className="name">Aiman Adlawan</span>
            <span className="title">Photographer</span>
          </div>
        </div>
        <div className="content-center add-favorites text-2">
          <Svg svg='heart'/>
          <span>Add to favorites</span>
        </div>
      </div>

      <div className="content-center ind-photo-download">
        <img src="/images/p1.jpg" alt=""/>
        <div className="photo-tags text-2">
          Photo tags: <span>floral violet dark and gray with spirit and something</span>
        </div>
        <button className='text-2'>Download Photo</button>
      </div>
      
    </div>
  )
}

export default Photo
