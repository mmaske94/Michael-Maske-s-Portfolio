import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/PROJECT1.png'
import IMG2 from '../../assets/PROJECT2.png'
import IMG3 from '../../assets/PROJECT3.png'
import IMG4 from '../../assets/PROJECT4.png'
import IMG5 from '../../assets/PROJECT5.png'
import IMG6 from '../../assets/PROJECT 6.png'
import IMG7 from '../../assets/PROJECT7.png'

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
            <a href='https://github.com/mmaske94/Simon-Project-1' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG2} alt= ' ' />
          </div>
            <h3>A Future Dating App</h3>
            <a href='https://github.com/mmaske94/100-Dates' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG3} alt= ' ' />
          </div>
            <h3>A Movie Review App like Rotten Tomatoes</h3>
            <a href='https://github.com/Benitez-Maske-Rasack' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG4} alt= ' ' />
          </div>
            <h3>A Python Notes Taking App</h3>
            <a href='https://github.com/mmaske94/Python_Notes' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG5} alt= ' ' />
          </div>
            <h3>A Movie Recommender App</h3>
            <a href='https://github.com/mmaske94/Movie_Recommender' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG6} alt= ' ' />
          </div>
            <h3>A Markdown Converter</h3>
            <a href='https://github.com/mmaske94/Markdown-Converter' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
        <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG7} alt= ' ' />
          </div>
            <h3>Java Snake</h3>
            <a href='https://github.com/mmaske94/Snake' className = 'button button-primary' target='_blank'>Github</a>
          
        </article>
      </div>
    </section>
  )
}

export default Projects