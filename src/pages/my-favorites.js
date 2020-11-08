import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Media from '../components/Media/Media'
import Footer from '../components/Footer/Footer'
import NoMedia from '../components/Error/NoMedia'
import headImgCover from '../utils/data/pagecover.json'
import {Helpers} from '../utils/helpers/common'

export default function MyFavorites() {  

  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    active: '',
    consumedFiles: {},
    media: {},
  })

  useEffect(() => {
    if(!mediafiles.isSet) {
      const itemsFromMedia = localStorage.getItem('saved-media')
      const data = JSON.parse(itemsFromMedia)
      let consumedFiles;
      if(data === null){
        consumedFiles = false
      } else {
        consumedFiles = Helpers.splitArray(data)

      }

      setMedia({ 
        isSet: true,
        active: 'Favorites',
        screen: window.innerWidth, 
        consumedFiles: consumedFiles,
        media: data,
      })
    }
    window.addEventListener('resize', resizeScreen)
    
    return function cleanupListener () {
      window.removeEventListener('resize', resizeScreen)
    }
  })
  
  // update columns whenever the screen is resized
  function resizeScreen () {
    const width = window.innerWidth
    // check if resized
    if(Helpers.resize(mediafiles.screen)) {
      updateState({
        screen: width,
        consumedFiles: Helpers.splitArray(mediafiles.media)
      })
    }
  }

  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | MyFavorites</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader='midheader'
        cover='photos'
        active={mediafiles.active}
        src={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? 
          !mediafiles.consumedFiles ? 
          <NoMedia /> :
          <Media medias={mediafiles.consumedFiles}
            noAddMedia={true}
            toPlay={true}
            title='My Favorites'
            autoplayvid={false}/> : null}
      </main>
      <Footer 
        active={mediafiles.active}/>
    </div>
  )
}

