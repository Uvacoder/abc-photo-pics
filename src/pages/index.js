import React, {useEffect} from 'react'
import Head from 'next/head'
import {getData} from '../utils/apis/api'

export default function Home() {

  useEffect(() => {
    getData()
  })

  return (
    <div className='container'>
      <Head>
        <title>Music App | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main'>
        
      </main>

      <footer className='asdf'></footer>
    </div>
  )
}
