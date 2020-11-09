import React from 'react'
import Svg from '../../Svg/index'

function TopHeader(props) {
  return (
    <div className="content-center top-nav-header"
      style={props.cover === 'photos' ?
        {'background': `url('${props.src.link}') no-repeat center`,'backgroundSize': 'cover'} : {'background': '#023048'}} >

      {props.cover === 'videos' ? 
        <video className="photo-item__video" muted autoPlay loop>
          <source src={props.src.link} type="video/mp4"/>
        </video> : null }

      <span>{''}</span>
      <div className='content-center top-header'>
        <h2 className='text-1 ts-1'>Search stock photos and videos for free.</h2>
        <div className="content-center top-header-input">
          <input 
            className='ts-5'
            value={props.value}
            onChange={(e)=> props.change(e.target.value)}
            type="text"
            placeholder='Enter photo or video name'/>
          <button
            onClick={props.click}>
            <span><Svg svg='search'/></span>
          </button>
        </div>
        <span className='example-text text-2 ts-11'>
          Examples: cats, red background, modern, art, ocean...
        </span>
      </div>
      <div className='photo-by'>
        <span className='text-2 ts-11'>{`${props.cover === 'photos' ? 'Photo' : 'Video'} by:`} {props.src.by}</span>
      </div>
    </div>
  )
}

export default TopHeader
