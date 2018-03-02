import React, { PureComponent } from 'react'
import headerImg from '../../assets/img/headerImg.jpg'



class Header extends PureComponent {
  render() {
    return(
        <img alt='dirk hartogh' className='headerImg' src={headerImg}/>
    )
  }
}

export default Header
