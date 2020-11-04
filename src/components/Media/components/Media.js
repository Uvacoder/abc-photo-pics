import React from 'react'
import Video from './Videos'
import Photo from './Photos'

function Media(props) {

  const media = props.medias.map((m, i) => {
    if(m.video_files){
      return ( 
        <Video media={m} key={i}
          toPlay={props.toPlay}
          autoplayvid={props.autoplayvid}/> 
      )
    } else {
      return ( <Photo media={m} key={i}/> )
    }
  })

  return (
    <div className="media-wrapper">
      {media}
    </div>
  )
}

export default Media
