import React, {useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Media from '../components/Media/Media'
import Collections from '../components/collections/Collections'
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
      </Head>

      <Header />

      <main className='content-center media-container'>
        <Collections />
        {/* <Media /> */}
      </main>
      <Footer />
    </div>
  )
}
