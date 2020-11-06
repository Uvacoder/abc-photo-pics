import React from 'react'
import Link from 'next/link'

function menu(props) {

  const menu =  props.menus.map((menu, i) => {
    return ( 
      <li className='ts-5' key={i}>
        <Link href={menu === 'Home' ? '/' : menu.toLocaleLowerCase()}>
          <a className={`${props.active === menu ? 'active' : ''}`}>{menu}</a></Link>
      </li> )
  })
  return (
    <>
      {menu} 
    </>
  )
}

export default menu
