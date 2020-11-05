import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import headImgCover from '../../utils/data/pagecover.json'
import {Helpers} from '../../utils/helpers/common'
import Collections from '../../components/Collections/Collections'

export default function Photos() {  
 
  
  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Discover</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader={false}
        withInput={true}
        active='Discover'
        cover={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        <Collections />
      </main>
      <Footer 
        active='Discover'/>
    </div>
  )
}