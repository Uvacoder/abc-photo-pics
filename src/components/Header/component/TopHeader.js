import React from 'react'
import Svg from '../../Svg/index'

function TopHeader() {
  return (
    <div className="content-center top-nav-header"
      style={{'background': "url('/images/background.jpg') no-repeat center",'backgroundSize': 'cover'}}>
      <span>{''}</span>
      <div className='content-center top-header'>
        <h2 className='text-1'>Search stock photos and videos for free.</h2>
        <div className="content-center top-header-input">
          <input 
            type="text"
            placeholder='Enter photo or video name'/>
          <button>
            <span><Svg svg='search'/></span>
          </button>
        </div>
        <span className='example-text text-2'>
          Examples: cats, red background, modern, art, ocean...
        </span>
      </div>
      <div className='photo-by'>
        <span className='text-2'>Photo by: Aiman Adlawan</span>
      </div>
    </div>
  )
}

export default TopHeader
