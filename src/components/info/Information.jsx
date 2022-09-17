import React, { useState } from 'react'
import Modal from './Modal'
import './styles/services.css'

const Information = () => {

  const [showModal, setShowModal] = useState(false)  

  return (
    <section className='services section' id='services'>
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="fa-solid fa-code services__icon"></i>
            <h3 className="services__title">Frontend Developer</h3>
          </div>
          <span onClick={() => setShowModal(true)} className="button button--flex button--small button--link services__button">
            View More  
            <i className="fa-solid fa-arrow-right button__icon"></i>
          </span>
          <Modal 
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          />
        </div>
      </div>
    </section>
  )
}

export default Information