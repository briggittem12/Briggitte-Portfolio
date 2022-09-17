import React from 'react'
import Contact from './Contact'
import Information from './info/Information'
import Portfolio from './Portfolio'
import Projects from './Projects'
import '../assets/styles/home.css'
import '../assets/styles/project.css'


const Home = () => {

  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
              <div className="home__social">
              <a href="#" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-github"></i>
              </a>
              </div>
              <div className="home__img">
                <span>Imagenes HEREEEE!!!</span>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'am Briggitte</h1>
                <h3 className="home__subtitle">Frontend Developer</h3>
                <p className="home__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae amet rerum enim quod nisi voluptatum eligendi expedita. Magnam non rem molestias consequuntur perferendis voluptate modi perspiciatis odio.</p>
                <a href="#contact" target="_blank" className="button button--flex">
                  Contact Me <i className="fa-solid fa-file-import button__icon"></i>
                </a>
              </div>
          </div>
          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
            <i className="fa-solid fa-circle-down home__scroll-mouse"></i>
            <span className="home__scroll-name"> Scroll down</span>
            </a>
          </div>
        </div>
      </section>
      <section className="about section" id="about">
        <h2 className="section__title">About Me!</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
          <img className='about__img' src="" alt="" />
          <div className="about__data">
            <p className="about__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ab doloremque architecto unde tenetur ad repudiandae porro, reprehenderit dolores ipsam eos corporis! Nihil commodi praesentium tempore sit aut quo reiciendis.</p>
          </div>
        </div>
        <div className="about__buttons">
          <a href="#" className="button button--flex">
            Download CV <i className="fa-solid fa-down-to-line button__icon"></i>
          </a>
        </div>
      </section>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical Level</span>
        <div className="skills__container container grid">
          <div>
            <div className="skills__content">
              <div className="skills__header">
              <i className="fa-solid fa-brackets-curly skills__icon"></i>
              <div>
              <h1 className="skills__title">Frontend Developer</h1>
              <span className="skills__subtitle">Begginer</span>
            </div>
            <i className="fa-solid fa-caret-down skills__arrow"></i>
          </div>

            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div> 
              </div>

            </div>
          </div>
          </div>
        </div> 
      </section>
      <Information/>
      <Portfolio/>
      <Projects/>
      <Contact/>
    </main> 
  )
}

export default Home