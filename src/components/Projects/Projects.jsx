import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/PROJECT1.png'
import IMG2 from '../../assets/PROJECT2.png'
import IMG3 from '../../assets/PROJECT3.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG1} alt= ' ' />
          </div>
            <h3>A Simon Like JavaScript Game</h3>
            <a href='https://github.com' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG2} alt= ' ' />
          </div>
            <h3>A Future Dating App</h3>
            <a href='https://github.com' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG3} alt= ' ' />
          </div>
            <h3>A Movie Review App like Rotten Tomatoes</h3>
            <a href='https://github.com' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
      </div>
    </section>
  )
}

export default Projects