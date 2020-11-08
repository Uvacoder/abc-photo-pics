import React from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import {Helpers} from '../../../utils/helpers/common'
import Svg from '../../Svg/index'

function Videos(props) {

  const playVid = (e) => {
    if(props.autoplayvid){
      let parent = e.target.closest('.image-wrapper')
      parent.children[1].play()
    }
  }

  const pauseVid = (e) => {
    if(props.autoplayvid){
      let parent = e.target.closest('.image-wrapper')
      parent.children[1].pause()
    }
  }

  const setUrl = (url) => {
    const sUrl = url.split('/')
    return sUrl[sUrl.length - 2]
  }

  const download = (e) => {
    e.preventDefault()
    const smallVideoLink = Helpers.findSmallVideos(props.media.video_files)
    let title = setUrl(props.media.url).split('-')
    title.pop()
    Helpers.download(smallVideoLink, title, 'videos')
  }

  const click = (e) => {
    e.preventDefault()
    props.click(props.media)
  }

  return (
    <Fade>
      <Link 
        href='/[slug]/[media]'
        as={`/videos/${setUrl(props.media.url)}`}>
        <a>
          <div 
            onMouseEnter={(e)=>playVid(e)} 
            onMouseOut={(e)=>pauseVid(e)}
            className="image-wrapper">
            <div className="image-details">
              <article className='content-center'>
                <span className='content-center text-2 ts-7'>
                  <img src="/images/photographer.png" alt="user icon"/>
                  {props.media.user.name}
                </span>
                <div className="content-center action-wrapper">
                  <span onClick={(e)=>download(e)}><Svg svg='download'/></span>
                  <span onClick={(e)=>click(e)}><Svg svg='heart'/></span>
                </div>
              </article>
            </div>
            <video className="photo-item__video" muted autoPlay={props.toPlay} loop>
              <source src={
                Helpers.findSmallVideos(props.media.video_files)} type="video/mp4"/>
            </video>
          </div>
        </a>
      </Link>
    </Fade>
  )
}

export default Videos
