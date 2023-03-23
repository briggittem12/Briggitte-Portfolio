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
            <p className="about__description">Web developer with experience in front-end technologies such as JavaScript, HTML, and CSS, as well as using Node.js and Express to implement back-end solutions. In addition to my technical ability, I stand out for my ability to work as a team, my adaptability to different environments and projects, and my kind and positive attitude that allows me to maintain fluid and constructive communication with others. I also consider that my creativity is a key element to generate innovative and efficient solutions in the development of web applications.</p>
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