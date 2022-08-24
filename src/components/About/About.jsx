import React from 'react'
import './About.css'
import ME from '../../assets/ME1.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='containter about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src= {ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Expereince</h5>
                <small>4+ Years Working</small>
            </article>

            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>General Assembly</h5>
                <small>Software Engineer Apprenticeship</small>
            </article>

            <article className='about__card'>
                <VscFolder className='about__icon'/>
                <h5>University of West Georgia</h5>
                <small>Bachelor of Business Administration Accounting</small>
            </article>
          </div>

          <p>
           Hi! I'm Michael! <br/>
            I am a Fullstack Engineer looking to land my first development role! <br/>
           I have been in the Finance World, but was wanting something that was more creative. I found Software Engineering and fell in love.
           It was the perfect combination of organization, rules, and structure as well as being creative and exploring new ideas and making things look pretty.
           I am passionate about learning and growing and helping others. I know this new journey is where I am suppose to be!
          </p>

          <a href='#contact' className='button button-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About 