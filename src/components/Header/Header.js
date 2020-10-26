import React from 'react'
import TopNav from './component/TopNav'
import TopHeader from './component/TopHeader'
import MidHeader from './component/MidHeader'

function Header() {
  return (
    <>
      <header className='headers'>
        <TopNav />
        {/* <TopHeader /> */}
      </header>
      <MidHeader />
    </>
  )
}

export default Header
