import React from 'react'

const Projects = () => {
  return (
    <section className="project section">
        <div className="project__bg">
            <div className="project__container">
                <div className="project__data">
                    <h2 className="project__title">You have a new project?</h2>
                    <p className="project__description">Contact me now!</p>
                    <a href="mailto:briggittemerchan6@gmail.com" className="button button--flex button--white">
                        Contact Me 
                        <i className="fa-solid fa-file-import project__icon button__icon"></i>
                    </a>
                </div>
                <img src="/img/option2.png" alt="" className='project__img'/>
            </div>
        </div>
    </section>
  )
}

export default Projects