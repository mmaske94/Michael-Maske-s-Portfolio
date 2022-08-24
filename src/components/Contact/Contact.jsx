import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhone} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eo30ndk', 'template_g3o1b0h', form.current, 'kOiyfKdTp2I-hHDj3')

    e.target.reset()
 
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mmaske94@outlook.com</h5>
            <a href='mailto:mmaske94@outlook.com' target='_blank'>Send A Message</a>
          </article>
          <article className='contact__option'>
            <BiPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>770-519-4511</h5>
            <small className='callme'>Call Me</small>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='button button-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact