import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../../utils/helpers/common'

function collections(props) {
  const collection = props.stocks.map((c, i) => {
    console.log(c.name)
    return (<li className='ts-5' key={i}>
              <Link href={`/${Helpers.formatTextToUrl(c.link)}`}>
                <a className='active'>{c.name}</a></Link>
            </li>)
  })
  return (
    <>
    {collection}
    </>
  )
}

export default collections
