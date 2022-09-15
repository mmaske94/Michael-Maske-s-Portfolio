import React from 'react'
import './FunFacts.css'
import IMG1 from '../../assets/ME4.png'
import IMG2 from '../../assets/ME5.png'
import IMG3 from '../../assets/ME6.png'

import { Navigation  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';




const funfacts =[
  {
    image: IMG1,
    title: 'I Love To Travel',
    description: `I will travel whenever and wherever. It is a goal to vist all 7 continents and all 50 states. Let's make some memories.`

  },
  {
    image: IMG2,
    title: 'I am a Daredevil',
    description: `I'll skydive. I'll bungee jump. I'll swim with sharks. You name it, I'll do it.`

  }, 
  {
    image: IMG3,
    title: `I'm a Swiftie`,
    description: 'One time I went to NYC and dedicated a whole day to Taylor Swift. I even walked Cornelia Street.'

  }
]

const FunFacts = () => {
  return (
    <section id='funfacts'>
      <h5>Here Are Some</h5>
      <h2>Fun Facts</h2>

      <Swiper className='container funfacts__container'
      // install Swiper modules
      modules={[ Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation>
      


      {funfacts.map(({image, title, description}, index) => { 
          return(
            <SwiperSlide key={index} className='funfacts'>
              <div className='funfacts-image'>
                <img src={image}/>
              </div>
              <h4 className='funfact'>{title}</h4>
              <h5 className='funfact__description'>{description}</h5>
            </SwiperSlide>
          )
        })
      }

      </Swiper>
    </section>
  )
}

export default FunFacts