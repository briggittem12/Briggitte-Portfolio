import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {

  const [form, setForm] = useState('')

  const saveForm = e => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const name = e.target.name.value;
    const project = e.target.project.value;
    const message = e.target.message.value;


    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/briggittemerchan6@gmail.com', {
      name, email, project, message
    })
    .then(response => setForm(response.data))
    .catch(error => console.log(error));
  }

  



  return (
    <section className='contact section' id='contact'>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in Touch</span>
    <div className="contact__container container grid">
      <div className='contact__group'>
         <div className="contact__information">
        <i className="fa-solid fa-phone contact__icon"></i>
          <div>
            <h3 className="contact title">Call Me</h3>
            <span className="contact__subtitle">593-93-946-1112</span>
          </div>
        </div> 

        <div className="contact__information">
        <i className="fa-solid fa-envelope contact__icon"></i>
          <div>
            <h3 className="contact title">Email</h3>
            <span className="contact__subtitle">briggittemerchan6@gmail.com</span>
          </div>
        </div>

        <div className="contact__information">
        <i className="fa-solid fa-location-dot contact__icon"></i>
          <div>
            <h3 className="contact title">Location</h3>
            <span className="contact__subtitle">Ecuador - Guayaquil</span>
          </div>
        </div>
      </div>

       <form onSubmit={saveForm}  className="contact__form grid">
        <div className="contact__inputs grid">
          <div className="contact__content">
            <label  className="contact__label">Name</label>
            <input type="text" id="contact" name="name" className="contact__input" />
          </div>
          <div className="contact__content">
            <label  className="contact__label">Email</label>
            <input type="email" id="contact" name="email" className="contact__input" />
          </div>
          <div className="contact__content">
            <label  className="contact__label">Project</label>
            <input type="text" id="contact" name="project" className="contact__input" />
          </div>
          <div className="contact__content">
            <label  className="contact__label">Message</label>
            <textarea name="message"  id="contact" cols="0" rows="7" className='contact__input'></textarea>
          </div>
          <div>
            <button className="button button--flex">
              Send Message
              <i className="fa-solid fa-paper-plane button__icon"></i>
            </button>
          </div>
        </div>
      </form> 
      
    </div>
    </section>
  )
}

export default Contact