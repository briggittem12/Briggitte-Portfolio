import React from 'react'

const AboutMe = () => {

    
  return (
    <section className="about section" id="about">
        <div className='project__bg'>
        <h2 className="section__title">About Me!</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img className='about__img' src="/img/briggitte.png" alt="" />
          <div className="about__data">
            <p className="about__description">Innovative FrontEnd Programmer, proactive and able to develop web pages, I also have good digital skills in React.js, Javascript, HTML, CSS and Bootstrap, I have facility to work both in a team and independently, according to the needs.</p>
            <div className="about__buttons">
              <a href="https://drive.google.com/file/d/1gXPB5UmsIkYPv1NEyrSbZTmpySfMwD5-/view?usp=sharing" target="_blank" className="button button--flex">
                View CV! <i className="fa-solid fa-down-to-line button__icon"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default AboutMe