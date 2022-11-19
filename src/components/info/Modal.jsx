import React from 'react'

const Modal = ({showModal, closeModal}) => {

    if(!showModal)
        return null

  return (
    <div onClick={closeModal} className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">Frontend Developer</h4>
              <i onClick={closeModal} className="fa-solid fa-xmark services__modal-close"></i>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fa-solid fa-square-check services__modal-icon"></i>
                  <p>Structuring content semantically and ensuring accessibility.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fa-solid fa-square-check services__modal-icon"></i>
                  <p>Adapt the design of a website to different devices and browsers.</p>
                </li>
                <li className="services__modal-service">
                  <i className="fa-solid fa-square-check services__modal-icon"></i>
                  <p>Create tools that improve the interaction between user and web.</p>
                </li>
                {/* <li className="services__modal-service">
                  <i className="fa-solid fa-square-check services__modal-icon"></i>
                  <p>I position your company brand.</p>
                </li> */}
              </ul>
            </div>
          </div>
  )
}

export default Modal