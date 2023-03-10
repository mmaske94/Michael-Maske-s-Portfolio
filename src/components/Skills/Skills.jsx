import React from 'react'
import './Skills.css'
import {ImCheckmark2} from 'react-icons/im'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>Quick View Of</h5>
      <h2>My Skills</h2>

      <div className='container skills__container'>
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
            <div className='skills__content'>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>

        </div>

        <div className="skills__backend">
        <h3>Backend Development</h3>
        <div className='skills__content'>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                  <div>
                    <h4>Flask</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>

        <div className="skills__other">
        <h3>Other Development Skills</h3>
        <div className='skills__content'>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills__detail'>
                <ImCheckmark2 className='skills__details-icon' />
                <div>
                  <h4>Microsoft Office</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills