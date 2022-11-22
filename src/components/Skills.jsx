import React from 'react'

const Skills = () => {

    
  return (

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
              <img   src="/html5.svg" alt="HMTL" className='skills__img html'/> 
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                  {/* <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div> */}
              </div>

              <div className="skills__data">
              <img src="/css.svg" alt="CSS" className='skills__img css'/>
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  {/* <span className="skills__number">90%</span> */}
                </div>
                {/* <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div> */}
              </div>

              <div className="skills__data">
              <img src="/js.svg" alt="JavaScript" className='skills__img java'/>
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  {/* <span className="skills__number">70%</span> */}
                </div>
                {/* <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div> */}
              </div>

              <div className="skills__data">
              <img src="/reactjs.svg" alt="react" className='skills__img react'/>
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  {/* <span className="skills__number">80%</span> */}
                </div>
                {/* <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>  */}
              </div>

              <div className="skills__data">
              <img src="/vite.svg" alt="vite" className='skills__img vite'/>
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  {/* <span className="skills__number">80%</span> */}
                </div>
                {/* <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>  */}
              </div>

              <div className="skills__data">
              <img src="/bootstrap.svg" alt="Bootstrap" className='skills__img bootstrap'/>
                <div className="skills__titles">
                  <h3 className="skills__name">Bootstrap</h3>
                  {/* <span className="skills__number">80%</span> */}
                </div>
                {/* <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>  */}
              </div>

            </div>
          </div>
          </div>
        </div> 
   
      </section>
  )
}

export default Skills