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
              <a href="https://www.linkedin.com/in/briggitte-merch%C3%A1n/" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/briggittem12" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://t.me/Brigg20" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-telegram"></i>
              </a>
              {/* <a href="https://wa.me/593939461112?text=Hi%20I%20talk" target="_blank" className="home__social-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </a> */}
              </div>
              <div className="home__img">
                <img src="/img/option.png" alt="Briggite" className='home-img'/>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, Iam Briggitte!</h1>
                <h3 className="home__subtitle">Frontend Developer <i className='bx bxs-cat bx-tada home__subtitle'></i></h3>
                <p className="home__description">Briging you development solutions!</p>
                <a href="mailto:briggittemerchan6@gmail.com" target="_blank" className="button button--flex">
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
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical Level</span>
        <div className="skills__container container grid">
          <div>
            <div className="skills__content">
              <div className="skills__header">
              <i className='bx bx-code-curly skills__icon'></i>
              <div>
              <h1 className="skills__title">Frontend Developer</h1>
              {/* <span className="skills__subtitle">Jr</span> */}
            </div>
            {/* <i className="fa-solid fa-caret-down skills__arrow"></i> */}
          </div>

            <div className="skills__list grid">
              <div className="skills__data">
              <img src="/html5.svg" alt="HMTL" className='skills__img html'/>
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
              </div>

              <div className="skills__data">
              <img src="/css.svg" alt="CSS" className='skills__img css'/>
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
              <img src="/js.svg" alt="JavaScript" className='skills__img java'/>
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  {/* <span className="skills__number">70%</span> */}
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
              <img src="/reactjs.svg" alt="react" className='skills__img react'/>
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  {/* <span className="skills__number">80%</span> */}
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div> 
              </div>

              <div className="skills__data">
              <img src="/vite.svg" alt="vite" className='skills__img vite'/>
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  {/* <span className="skills__number">80%</span> */}
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div> 
              </div>

              <div className="skills__data">
              <img src="/bootstrap.svg" alt="Bootstrap" className='skills__img bootstrap'/>
                <div className="skills__titles">
                  <h3 className="skills__name">Bootstrap</h3>
                  {/* <span className="skills__number">80%</span> */}
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