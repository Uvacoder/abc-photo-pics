import React from 'react'
import Link from 'next/link'
import navdata from '../../../utils/data/navlinks.json'
import Svg from '../../Svg/index'
import Menu from './components/Menu'
import Collections from './components/Collections'
import InputWide from './components/InputBig'
import InputShort from './components/InputShort'

function TopNav(props) {
  const showMenu = () => {
    const menu = document.querySelector('.top-nav-small-menu')
    menu.classList.toggle('show-side-menu')
  }

  return (
    <div className={`content-center top-nav ${props.withInput ? 'add-dark' : ''}`}>
      <div className="content-center top-nav-left">
        <Link href='/'>
          <a><Svg svg='topnav'/></a>
        </Link>
        {props.withInput ? <InputWide /> : null}
      </div>
      
      <div className="top-nav-right text-2 ts-6">
        <Link href='/discover'>
          <a><span>Explore</span></a>
        </Link>
        <Link href='/my-favorites'>
          <a><span>My Favorites</span></a>
        </Link>
      </div>

      <div className="top-nav-small">
        <div className="burger-container"
          onClick={showMenu}>
          <Svg svg='burger'/>
        </div>
        <div className="top-nav-small-menu">
          <div className="menu-close"
            onClick={showMenu}>
            <Svg svg='close'/>
          </div>
          {props.withInput ? <InputShort /> : null}
          <div className="top-nav-menulist text-2">
            <ul className='top-menu-list'>
              <Menu menus={navdata.menus} /></ul>
            <div className='top-menu-list'>
              <span>Stock Collections</span>
              <ul><Collections collections={navdata.collections}/></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
