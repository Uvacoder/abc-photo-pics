import React from 'react'
import Svg from '../Svg/index'
import {Helpers} from '../../utils/helpers/common'

function Photo(props) {
  const page = props.media.page
  const tags = props.media.tags

  const url = page === 'photos' ? 
    props.media.data.src.medium : 
    Helpers.findSmallVideos(props.media.data.video_files)

  return (
    <div className='content-center ind-photo-wrapper'>
      
      <div className="content-center ind-photo-desc">
        <div className="content-center artist">
          <img src="/images/photographer.png" alt=""/>
          <div className="artist-detail text-2">
            <span className="name ts-9">
              {page === 'photos' ? props.media.data.photographer :
                props.media.data.user.name}</span>
              <span className="title ts-11">
                {page === 'photos' ? 'Photographer' : 'Videographer'}</span>
          </div>
        </div>
        <div className="content-center add-favorites text-2 ts-9">
          <Svg svg='heart'/>
          <span>Add to favorites</span>
        </div>
      </div>

      <div className="content-center ind-photo-download">
        {page === 'videos' ? 
          // 'sdf'
          <video className="photo-item__video" muted autoPlay loop>
            <source src={url} type="video/mp4"/>
          </video>
           : 
            <img src={url} alt={tags}/> }
        <div className="photo-tags text-2 ts-7">
          {props.media.page === 'photos' ? 'Photo' : 'Video'} tags: 
          <span> {tags}</span>
        </div>
        <button
          className='text-2 ts-7'
          onClick={()=>Helpers.download(url, tags, page)}>Download Photo</button>
      </div>
      
    </div>
  )
}

export default Photo

