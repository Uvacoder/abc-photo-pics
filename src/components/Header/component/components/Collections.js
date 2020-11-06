import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../../utils/helpers/common'

function collections(props) {
  const collection = props.stocks.map((c, i) => {

    return (<li className='ts-5' key={i}>
              <Link href={`/discover/${Helpers.formatTextToUrl(c.link)}`}>
                <a className={`${props.active.toLowerCase() === 
                  c.link ? 'active' : ''}`}>{c.name}</a></Link>
            </li>)
  })
  return (
    <>
    {collection}
    </>
  )
}

export default collections
