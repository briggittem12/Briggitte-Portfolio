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
                          <i className="bx bx-code-curly skills__icon"></i>
                          <div>
                              <h1 className="skills__title">
                                  Frontend Developer
                              </h1>
                               <span className="skills__subtitle">WORKING COMPONENT</span> 
                          </div>
                          {/* <i className="fa-solid fa-caret-down skills__arrow"></i> */}
                      </div>

                      
                  </div>
              </div>
          </div>
      </section>
  );
}

export default Skills