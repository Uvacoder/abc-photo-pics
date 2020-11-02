import React from 'react'
import Link from 'next/link'
import {Helpers} from '../../../../utils/helpers/common'

function collections(props) {
  const collection = props.collections.map((c, i) => {
    return (<li className='ts-5' key={i}>
              <Link href={`/${Helpers.formatTextToUrl(c.name)}`}>
                <a>{c.name}</a></Link>
            </li>)
  })
  return (
    <>
    {collection}
    </>
  )
}

export default collections
