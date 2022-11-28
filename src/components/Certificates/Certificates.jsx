import React from 'react'
import './Certificates.css'
import C1 from '../../assets/CERTIFICATE1.png'
import C2 from '../../assets/CERTIFICATE2.png'


const Certificates = () => {
  return (
    <section>
        <h5>And The</h5>
        <h2>Certificates</h2>
        <div className='container certificates__container'>
        <article className='certificates__detail'>
                <div className='certificate_container'>
                <img src= {C1} alt='Certificate Image' /> 
                  <h4>Software Engineering Immersive Remote (Flex) </h4>
                  <small className='text-light'>General Assembly</small>
                </div>
        </article>
        <article className='certificates__detail'>
                <div className='certificate_container'>
                <img src= {C2} alt='Certificate Image' /> 
                  <h4>The Ultimate Geginners Guide to Python Recommender Systems </h4>
                  <small className='text-light'>Udemy</small>
                </div>
        </article>
        </div>
    </section>
  )
}

export default Certificates