import React from "react";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical Level</span>
                    <div className="skills__content">
                        <div className="skills__header">
                            <i className="bx bx-code-curly skills__icon"></i>
                            <div>
                                <h1 className="skills__title">
                                    Jr Frontend Developer
                                </h1>
                                
                            </div>
                            {/* <i className="fa-solid fa-caret-down skills__arrow"></i> */}
                        </div>
                    </div>
            <div className="skills__container">
                
                <div className="skills__content">
                    <img src="public/img/html5.svg" alt="html logo" className="skills__img"/>
                    <img src="public/img/css.svg" alt="css logo" className="skills__img"/>
                    <img src="public/img/js.svg" alt="javascript logo" className="skills__img" />
                    <img src="public/img/reactjs.svg" alt="react logo" className="skills__img" />
                    <img src="public/img/tailwind.svg" alt="tailwind logo" className="skills__img" />
                    <img src="public/img/typescript.svg" alt="typescript logo" className="skills__img" />
                    <img src="public/img/node.svg" alt="node logo" className="skills__img" />
                    <img src="public/img/git.svg" alt="git logo" className="skills__img" />
                    <img src="public/img/github.svg" alt="github logo" className="skills__img" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
