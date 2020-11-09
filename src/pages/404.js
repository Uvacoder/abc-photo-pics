import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import headImgCover from '../utils/data/pagecover.json'
import Link from 'next/link'
import {Helpers} from '../utils/helpers/common'

export default function NotFound() {  

  return (
    <div className='container'>
      <Head>
        <title>Foto Pics | Not Found</title>
        <link rel="icon" href="/images/logo.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <Header 
        midheader='midheader'
        cover='photo'
        active='404'
        src={Helpers.getDay(headImgCover.home)}/>

      <main className='content-center media-container'>
        <div className="content-center redirect-container">
          <h3 className='text-2 ts-3'>Not found</h3>
          <Link href='/'>
            <a className='text-2'>
              Go to main page
            </a>
          </Link>
        </div>
      </main>
      <Footer active='404'/>
    </div>
  )
}

