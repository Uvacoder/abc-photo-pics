import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Media from '../../components/Media/Media'
import Footer from '../../components/Footer/Footer'
import {APIRequest} from '../../utils/apis/api'
import headImgCover from '../../utils/data/pagecover.json'
import {Helpers} from '../../utils/helpers/common'

export default function Photos({data}) {  

  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    consumedFiles: {},
    media: {},
  })

  useEffect(() => {
    if(!mediafiles.isSet) {
      (async function (){

        // const dataFiles = mediafiles.media.concat(data.photos.photos)
        // console.log(dataFiles)
        const consumedFiles = Helpers.splitArray(data.photos.photos)
        setMedia({ 
          isSet: true, 
          screen: window.innerWidth, 
          consumedFiles: consumedFiles,
          media: data.photos.photos,
        })

        // // // add data
        APIRequest.addPhotos(2)
      })()
    }
    window.addEventListener('resize', resizeScreen)
    
    return function cleanupListener () {
      window.removeEventListener('resize', resizeScreen)
    }
  })
  
  // update the state when the resizing 
  // width mets requirement for change
  function updateState (newState) {
    setMedia({
      ...mediafiles,
      ...newState
    })
  }
  
  // update columns whenever the screen is resized
  function resizeScreen () {
    const width = window.innerWidth
    // check if resized
    if(Helpers.resize(mediafiles.screen)) {
      updateState({
        width: width,
        consumedFiles: Helpers.splitArray(mediafiles.media)
      })
    }
  }

  async function addMedia () {
    const data = Helpers.getFromStorage()
    const newFiles = mediafiles.media.concat(data.dataFiles)
    const newconsumed = Helpers.splitArray(newFiles)
    
    // update state
    updateState({
      consumedFiles: newconsumed,
      media: newFiles,
    })
    // request new data
    APIRequest.addData(data.page + 1)
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Photos</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader='midheader'
        cover={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? 
          <Media medias={mediafiles.consumedFiles}
            top={mediafiles.top}
            addMedia={addMedia}
            autoplayvid={false}/> : null}
      </main>
      <Footer />
    </div>
  )
}


Photos.getInitialProps = async () => {
  const data = await APIRequest.getPhotos(1)
  return {data}
}