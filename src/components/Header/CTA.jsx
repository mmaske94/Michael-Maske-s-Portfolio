import React from 'react'
import Resume from '../../assets/Michael Maske_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='button'>Download Resume</a>
        <a href='#contact' className='button button-primary'>Contact Me</a>
    </div>
  )
}

export default CTA