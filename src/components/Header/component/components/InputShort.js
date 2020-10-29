import React from 'react'
import Svg from '../../../Svg/index'

function InputShort() {
  return (
    <div className="content-center nav-small-input">
      <input 
        className='text-2 ts-5'
        type="text" 
        placeholder='Search photos and videos'/>
      <button>
        <span>
          <Svg svg='search'/>
        </span>
      </button>
    </div>
  )
}

export default InputShort
