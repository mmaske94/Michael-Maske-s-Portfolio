import React from 'react'
import './Footer.css'
import{BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <h2 className='footer__logo'>Michael-Maske</h2>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com/in/michael-maske' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/mmaske94' target='_blank'><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer