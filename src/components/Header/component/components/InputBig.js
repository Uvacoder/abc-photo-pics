import React from 'react'
import Svg from '../../../Svg/index'

function InputBig(props) {
  return (
    <div className="content-center top-input">
      <input 
        className='text-2 ts-5'
        type="text" 
        value={props.value}
        onChange={(e)=> props.change(e.target.value)}
        placeholder='Search photos and videos'/>
      <button onClick={props.click}>
        <span>
          <Svg svg='search'/>
        </span>
      </button>
    </div>
  )
}

export default InputBig
