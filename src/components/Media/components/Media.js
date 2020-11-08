import React from 'react'
import Video from './Videos'
import Photo from './Photos'

function Media(props) {

  // function to save items on local storage
  const addToStorage = (val) => {
    const itemsFromStorage = localStorage.getItem('saved-media')
    const data = JSON.parse(itemsFromStorage)
    if(!data) {
      const item = [val]
      saveToStorage(item)
    } else {
      let newItem = data.filter(i => {
        return i.id != val.id
      })
      newItem.unshift(val)
      saveToStorage(newItem)
    }
  }

  // function to save items on the local storage
  const saveToStorage = (i) => {
    const data = JSON.stringify(i)
    localStorage.setItem('saved-media', data)
  }

  // separate videos and photos
  const media = props.medias.map((m, i) => {
    if(m.video_files){
      return ( 
        <Video media={m} key={i}
          toPlay={props.toPlay}
          click={(val)=>addToStorage(val)}
          autoplayvid={props.autoplayvid}/> 
      )
    } else {
      return ( 
        <Photo media={m} key={i}
          click={(val)=>addToStorage(val)}/> 
      )
    }
  })

  return (
    <div className="media-wrapper">
      {media}
    </div>
  )
}

export default Media
