import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from '../../../components/Header/Header'
import Media from '../../../components/Media/Media'
import Footer from '../../../components/Footer/Footer'
import {APIRequest} from '../../../utils/apis/api'
import headImgCover from '../../../utils/data/pagecover.json'
import {Helpers} from '../../../utils/helpers/common'
import Error from '../../../components/Error/Error'

export default function Search({data, query}) {  
  const router = useRouter()

  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    active: 'search',
    query: '',
    consumedFiles: {},
    media: {},
  })
  
  useEffect(() => {
    if(data.status === 404 || data.error === 'Not Found') {
      router.replace('/404', window.location.pathname)
    }

    if(!mediafiles.isSet) {
      if(data.photos.error || data.videos.error){
        setMedia({
          active: 'search',
          screen: window.innerWidth,
          isSet: true,
          query: query,
          error: true
        })
      } else {
        let consumedFiles;
        let dataFiles;

        
        if(data.videos.total_results <= 6) {
          consumedFiles = Helpers.splitArray(data.photos.photos)
          dataFiles = data.photos.photos
        } else {
          dataFiles = Helpers.combineArray(data.photos.photos, data.videos.videos)
          consumedFiles = Helpers.splitArray(dataFiles)
        }
        setMedia({ 
          isSet: true,
          active: 'search',
          query: query,
          screen: window.innerWidth, 
          consumedFiles: consumedFiles,
          media: dataFiles,
        })
        // add data
        APIRequest.addData('collections', 2, query)
      }
    } else if(mediafiles.query !== query){
      (async function () {
        const newData = await APIRequest.getCollections(1, query)
        const dataFiles = Helpers.combineArray(newData.photos.photos, newData.videos.videos)
        const consumedFiles = Helpers.splitArray(dataFiles)

        setMedia({
          ...mediafiles,
          isSet: true,
          active: Helpers.formatText(router.query.slug),
          screen: window.innerWidth,
          consumedFiles: consumedFiles,
          media: dataFiles
        })
        APIRequest.addData('collections', 2, query)
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
    const data = Helpers.checkFromStorage()
    const newFiles = mediafiles.media.concat(data.dataFiles)
    const newconsumed = Helpers.splitArray(newFiles)
    
    // update state
    updateState({
      consumedFiles: newconsumed,
      media: newFiles,
    })
    // request new data
    APIRequest.addData('collections', data.page + 1, mediafiles.query)
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Search Stocks</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader={false}
        cover='photo'
        withInput={true}
        active={mediafiles.active}
        src={Helpers.getDay(headImgCover.photos)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? mediafiles.error ? 
          <Error /> :
            <Media medias={mediafiles.consumedFiles}
              top={mediafiles.top}
              addMedia={addMedia}
              toPlay={true}
              title='Search words : '
              keywords={query}
              autoplayvid={false}/> : null}
      </main>
      <Footer 
        active={mediafiles.active}/>
    </div>
  )
}


Search.getInitialProps = async (ctx) => {
  const {query} = ctx
  const data = await APIRequest.getCollections(1, query.slug)

  return {data, query: query.slug}
}