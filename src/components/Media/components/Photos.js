import React from 'react'
import Svg from '../../Svg/index'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

function Photos(props) {
  const setUrl = (url) => {
    const sUrl = url.split('/')
    return sUrl[sUrl.length - 2]
  }

  return (
    <Fade>
      <Link 
        href='/[slug]/[media]'
        as={`/photos/${setUrl(props.media.url)}`}>
        <a>
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
        </a>
      </Link>
    </Fade>
  )
}

export default Photos
