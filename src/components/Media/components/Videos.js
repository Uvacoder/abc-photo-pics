import React from 'react'
import Fade from 'react-reveal/Fade'
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

  return (
    <Fade>
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
              <span><Svg svg='download'/></span>
              <span><Svg svg='heart'/></span>
            </div>
          </article>
        </div>
        <video className="photo-item__video" muted autoPlay={props.toPlay} loop>
          <source src={findSmallVideos(props.media.video_files)} type="video/mp4"/>
        </video>
      </div>
    </Fade>
  )
}

export default Videos

// function to sort the list of videos
// files and return the only list that has 
// the smallest file size 'sd'
const findSmallVideos = (videos) => {
  let video = videos.filter(vid => {
    return vid.quality === 'sd'
  })
  return video[0].link
}