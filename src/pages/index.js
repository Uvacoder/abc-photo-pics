import React, {useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Media from '../components/Media/Media'
import Collections from '../components/Collections/Collections'
import Photo from '../components/Photo/Photo'
import Footer from '../components/Footer/Footer'
import {getData} from '../utils/apis/api'

export default function Home() {

  useEffect(() => {
    getData()
  })

  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Home</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header midheader='midheader' withInput={true}/>

      <main className='content-center media-container'>
        {/* <Photo /> */}
        {/* <Collections /> */}
        <Media />

      </main>
      <Footer />
    </div>
  )
}
