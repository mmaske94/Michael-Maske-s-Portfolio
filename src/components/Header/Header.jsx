import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/ME2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Michael Maske</h1>
        <h3 className='text-light'>Fullstack Engineer</h3>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header