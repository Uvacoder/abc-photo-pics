import React from 'react'
import Logo from './Svg/Logo-big'
import Search from './Svg/Search'
import TopLogo from './Svg/NavLogo'
import Download from './Svg/Download'
import Aiman from './Svg/Aiman'
import Behance from './Svg/Behance'
import Dribbble from './Svg/Dribbble'
import Linkedin from './Svg/Linkedin'
import Twitter from './Svg/Twitter'
import Heart from './Svg/Heart'

function Svg(props) {

  let svg = props.svg === 'logo' ? <Logo/> : 
            props.svg === 'search' ? <Search /> :
            props.svg === 'topnav' ? <TopLogo /> :
            props.svg === 'download' ? <Download /> : 
            props.svg === 'aiman' ? <Aiman /> : 
            props.svg === 'behance' ? <Behance /> : 
            props.svg === 'dribbble' ? <Dribbble /> : 
            props.svg === 'linkedin' ? <Linkedin /> : 
            props.svg === 'twitter' ? <Twitter /> : 
            props.svg === 'heart' ? <Heart /> : null


  return (
    <div>
      {svg}
    </div>
  )
}

export default Svg
