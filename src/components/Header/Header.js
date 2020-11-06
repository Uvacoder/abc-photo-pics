import React, {useState} from 'react'
import TopNav from './component/TopNav'
import TopHeader from './component/TopHeader'
import MidHeader from './component/MidHeader'

function Header(props) {
  const [value, setValue] = useState('')

  const changeVal = (val) => {
    setValue(val)
  }

  const click = () => {
    console.log('clicked')
  }

  return (
    <>
      <header className='headers'>
        <TopNav 
          inputValue={value}
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
