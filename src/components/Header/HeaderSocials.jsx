import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/michael-maske' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/mmaske94' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials

//target=_blank--opens up  blank tab