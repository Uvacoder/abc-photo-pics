import React from 'react'

function Images(props) {

  const image = props.images.map((img, i) => {
    return (
      <img src={`/images/${img}.jpg`} 
        alt={`sample image`} key={i}/>
    )
  })

  return (
    <>
      {image}
    </>
  )
}

export default Images
