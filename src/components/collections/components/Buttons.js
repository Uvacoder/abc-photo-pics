import React from 'react'
import Link from 'next/link'

function Buttons(props) {
  const buttons = props.btnLinks.map((btn, i) =>{
    return (
      <Link href='/' key={i}>
        <a><span>{btn}</span></a>
      </Link>
    )
  })
  return (
    <div className="content-center text-2 ts-6 collection-buttons">
      <div className="button-scroll">
        {buttons}
      </div>
    </div>     
  )
}

export default Buttons
