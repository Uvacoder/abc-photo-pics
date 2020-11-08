import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Media from '../components/Media/Media'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import {APIRequest} from '../utils/apis/api'
import Error from '../components/Error/Error'
import headImgCover from '../utils/data/pagecover.json'
import {Helpers} from '../utils/helpers/common'

export default function Home({data}) {  

  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    active: '',
    withIntro: false,
    consumedFiles: {},
    media: {},
  })

  useEffect(() => {
    if(!mediafiles.isSet) {
      if(data.photos.error || data.videos.error){
        updateState({
          active: 'Home',
          screen: window.innerWidth, 
          isSet: true,
          error: true
        })
      } else {
        (async function (){
          const itemsFromStorage = Helpers.getStorage('samples')

          const dataFiles = Helpers.combineArray(data.photos.photos, data.videos.videos)
          const consumedFiles = Helpers.splitArray(dataFiles)
          updateState({ 
            isSet: true,
            active: 'Home',
            withIntro: itemsFromStorage ? true : false,
            screen: window.innerWidth, 
            consumedFiles: consumedFiles,
            media: dataFiles,
          })
          
          // // add data
          APIRequest.addData('all', 2)
        })()
      }
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
        screen: width,
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
    APIRequest.addData('all', data.page + 1)
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Home</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      { !mediafiles.withIntro ? <Intro /> : null }

      <Header 
        midheader='midheader'
        cover='photos'
        active={mediafiles.active}
        src={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? mediafiles.error ? 
          <Error /> : 
          <Media medias={mediafiles.consumedFiles}
            addMedia={addMedia}
            toPlay={true}
            title=''
            autoplayvid={false}/> : null}
      </main>
      <Footer 
        active={mediafiles.active}/>
    </div>
  )
}


Home.getInitialProps = async () => {
  const data = await APIRequest.getHomeData(1)
  return {data}
}