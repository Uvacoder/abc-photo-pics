import React from 'react'
import Svg from '../../Svg/index'
import Fade from 'react-reveal/Fade'

function Photos(props) {
  return (
    <Fade>
      <div className="image-wrapper">
        <div className="image-details">
          <article className='content-center'>
            <span className='content-center text-2 ts-7'>
              <img src='/images/photographer.png' alt={'user icon'}/>
              {props.media.photographer}
            </span>
            <div className="content-center action-wrapper">
              <span><Svg svg='download'/></span>
              <span><Svg svg='heart'/></span>
            </div>
          </article>
        </div>
        <img src={props.media.src.medium} alt=""/>
      </div>
    </Fade>
  )
}

export default Photos


// leaveas = cátia matos
// city = Maxime Francis
// iguana = George lebada
// turtle = Francesco Ungaro
// koi = fox
// mountain = billel moula
// hen =kirsten-bühne