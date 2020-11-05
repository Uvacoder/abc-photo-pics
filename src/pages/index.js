import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Media from '../components/Media/Media'
import Footer from '../components/Footer/Footer'
import {APIRequest} from '../utils/apis/api'
import headImgCover from '../utils/data/pagecover.json'
import {Helpers} from '../utils/helpers/common'

export default function Home({data}) {  

  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    active: '',
    consumedFiles: {},
    media: {},
  })

  useEffect(() => {
    if(!mediafiles.isSet) {
      (async function (){

        // const data = await APIRequest.getHomeData(1)
        
        const dataFiles = Helpers.combineArray(data.photos.photos, data.videos.videos)
        const consumedFiles = Helpers.splitArray(dataFiles)
        setMedia({ 
          isSet: true,
          active: 'Home',
          screen: window.innerWidth, 
          consumedFiles: consumedFiles,
          media: dataFiles,
        })

        // // add data
        APIRequest.addData('all', 2)
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

      <Header 
        midheader='midheader'
        cover='photo'
        active={mediafiles.active}
        src={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? 
          <Media medias={mediafiles.consumedFiles}
            top={mediafiles.top}
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