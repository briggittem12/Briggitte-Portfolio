import React from "react";
import { SiMui, SiNextdotjs } from "react-icons/si";
import { portfolio } from "../constants/portfolio";

const Portfolio = () => {
    return (
        <>
            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Projects</h2>
                <span className="portfolio__sub">Most recent work</span>

                <div className="portfolio__container">
                    {
                      portfolio.map(portData => (
                        
                        <div className="portfolio__content " key={portData.title}>
                            <img
                                src={portData.imgDemo}
                                alt="act"
                                className="portfolio__img"
                            />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title">
                                    {portData.title}
                                </h3>
                                <p className="portfolio__description">
                                    {portData.description}
                                </p> 
                                {/* <span>Use:</span>
                                <ul className="portfolio__list">
                                    <li className=" portfolio_icon react">
                                        <i className="bx bxl-react"></i>
                                    </li>
                                    <li className="portfolio_icon css">
                                        <i className="bx bxl-typescript"></i>
                                    </li>
                                    <li className="portfolio_icon react">
                                        <i className="bx bxl-tailwind-css"></i>
                                    </li>
                                    <li className="portfolio_icon next">
                                        <SiNextdotjs />
                                    </li>
                                </ul> */}
                                <a
                                    href={portData.linkDemo}
                                    target="_blank"
                                    className="button button--flex button--small portfolio__button"
                                >
                                    Demo
                                    <i className="fa-solid fa-arrow-right button__icon"></i>
                                </a>
                            </div>
                        </div>
                      ))
                    }
                </div>
            </section>
        </>
    );
};

export default Portfolio;
