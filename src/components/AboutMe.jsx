import React from 'react'

const AboutMe = () => {

    
  return (
    <section className="about section" id="aboutme">
        <div className='project__bg'>
        <h2 className="section__title">About Me!</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img className='about__img' src="/img/briggitte.png" alt="" />
          <div className="about__data">
            <p className="about__description">Web developer with experience in front-end technologies such as React.js, JavaScript, HTML and CSS, as well as in the use of Node.js and Express for the implementation of back-end solutions. </p>
            <div className="about__buttons">
              <a href="https://docs.google.com/document/d/1ydAEDDeav4OFnUeYFVby4tFp7nCL9JQPWS1GA48fz34/edit?usp=sharing" target="_blank" className="button button--flex">
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