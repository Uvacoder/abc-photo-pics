import React from 'react'
import Svg from '../../Svg/index'
import Fade from 'react-reveal/Fade'
import {Helpers} from '../../../utils/helpers/common'
import Link from 'next/link'

function Photos(props) {

  const setUrl = (url) => {
    const sUrl = url.split('/')
    return sUrl[sUrl.length - 2]
  }

  const download = (e) => {
    e.preventDefault()
    const link = props.media.src.medium
    let title = setUrl(props.media.url).split('-')
    title.pop()
    Helpers.download(link, title, 'photos')
  }

  const click = (e) => {
     e.preventDefault() 
     props.click(props.media)
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
                  <span onClick={(e)=>download(e)}><Svg svg='download'/></span>
                  <span 
                    onClick={(e)=>click(e)}>
                    <Svg svg={'heart'}/></span>
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
