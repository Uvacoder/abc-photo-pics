import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Media from '../../components/Media/Media'
import Error from '../../components/Error/Error'
import Footer from '../../components/Footer/Footer'
import Photo from '../../components/Photo/Photo'
import {APIRequest} from '../../utils/apis/api'
import headImgCover from '../../utils/data/pagecover.json'
import {Helpers} from '../../utils/helpers/common'

export default function Photos({data, page, tags}) {  
  const router = useRouter()

  const [mediafiles, setMedia] = useState({
    isSet: false,
    page: '',
    media: {},
  })

  useEffect(() => {
    if(data.status === 404 || data.error === 'Not Found') {
      router.replace('/404', window.location.pathname)
    } else if(!mediafiles.isSet) {
      setMedia({
        isSet: true,
        page: Helpers.setName(page),
        media: { data, tags, page }
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
        <title>Foto Pics | Photos</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader={false}
        withInput={true}
        cover='all'
        active={mediafiles.page}
        src={Helpers.getDay(headImgCover.photos)}/>

      <main className='content-center media-container'>
        {mediafiles.isSet ? mediafiles.error ? 
          <Error /> : 
            <Photo media={mediafiles.media}/> : null}
      </main>
      <Footer 
        active='Photos'/>
    </div>
  )
}


Photos.getInitialProps = async (ctx) => {
  let data;
  const {query} = ctx
  const params = query.media.split('-')
  const _id= params.pop()
  const tags = params.join(' ')
  
  if(query.slug === 'photos') {
    data = await APIRequest.getSinglePhoto(_id)
  } else if (query.slug === 'videos') {
    data = await APIRequest.getSingleVideo(_id)
  } else {
    data = {status: 404, error: 'Not Found'}
  }

  
  return {data, page: query.slug, tags: tags}
}