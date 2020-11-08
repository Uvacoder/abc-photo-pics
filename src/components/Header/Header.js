import React, {useState} from 'react'
import TopNav from './component/TopNav'
import TopHeader from './component/TopHeader'
import MidHeader from './component/MidHeader'
import {useRouter} from 'next/router'

function Header(props) {
  const router = useRouter()
  const [value, setValue] = useState('')

  const changeVal = (val) => {
    setValue(val)
  }

  const click = () => {
    router.replace('/search/all/[slug]', `/search/all/${value}`)
  }
  return (
    <>
      <header className='headers'>
        <TopNav 
          inputValue={value}
          cover={props.cover} 
          change={(val) => changeVal(val)}
          active={props.active}
          click={click}
          withInput={props.withInput}/>
        { props.midheader ? 
          <TopHeader 
            inputValue={value}
            change={(val) => changeVal(val)}
            click={click}
            cover={props.cover} 
            src={props.src}/> : null }
      </header>
      <MidHeader active={props.active}/>
    </>
  )
}

export default Header
