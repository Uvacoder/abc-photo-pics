import React from 'react'
import Svg from '../Svg/index'

function Intro() {
  return (
    <div className="content-center intro text-2">
      <span>{''}</span>
      <div className="content-center logo">
        <Svg svg='logo'/>
        <span>A photo and video library.</span>
        <span className='loading'>Loading. . .</span>
      </div>
      <span className='copy-right'>&#9400; Aiman Adlawan 2020.</span>
    </div>
  )
}

export default Intro
