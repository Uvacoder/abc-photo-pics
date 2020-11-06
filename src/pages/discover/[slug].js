import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import navlinks from '../../utils/data/navlinks.json'
import {useRouter} from 'next/router'
import Header from '../../components/Header/Header'
import Media from '../../components/Media/Media'
import Footer from '../../components/Footer/Footer'
import {APIRequest} from '../../utils/apis/api'
import headImgCover from '../../utils/data/pagecover.json'
import {Helpers} from '../../utils/helpers/common'

export default function Discover({data}) {  
  const router = useRouter()
  const [mediafiles, setMedia] = useState({
    isSet: false,
    screen: 0,
    active: '',
    consumedFiles: {},
    media: {},
  })
  
  useEffect(() => {
    // backup - incase the query is not found in the params
    // we will redirect to page to the not found page
    if(!data) { 
      router.replace('/404', window.location.path)
    }

    const activeRoute = mediafiles.active.toLowerCase()
    const query = router.query.slug

    if(!mediafiles.isSet) {
      if(data){
        (async function (){
          const dataFiles = Helpers.combineArray(data.photos.photos, data.videos.videos)
          const consumedFiles = Helpers.splitArray(dataFiles)
          setMedia({ 
            isSet: true, 
            active: Helpers.formatText(router.query.slug),
            screen: window.innerWidth, 
            consumedFiles: consumedFiles,
            media: dataFiles
          })
          
          // add data
          APIRequest.addData('collections', 2, query)
        })()
      }
    } else if (activeRoute != query){
      (async function(){
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
      
      // console.log(mediafiles.consumedFiles)
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
    APIRequest.addData('collections', data.page + 1, mediafiles.active)
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Discover Collections</title>
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
        {mediafiles.isSet ? 
          <Media medias={mediafiles.consumedFiles}
            top={mediafiles.top}
            addMedia={addMedia}
            toPlay={true}
            title={mediafiles.active}
            autoplayvid={false}/> : null}
      </main>
      <Footer 
        active={mediafiles.active}/>
    </div>
  )
}


Discover.getInitialProps = async (ctx) => {
  let data;
  const {query} = ctx
  const collections = navlinks.allcollections
  
  // filter if data exists in the parameters
  const isExists = Helpers.checkIfExists(query.slug, collections)

  if(!isExists) {
    data = false
  } else {
    data = await APIRequest.getCollections(1, query.slug)
  }

  return {data}
}