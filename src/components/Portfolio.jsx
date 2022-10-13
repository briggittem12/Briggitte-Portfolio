import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; 
import 'swiper/css';  
import "swiper/css/navigation";


const Portfolio = () => {

  
  return (
    <section className="portfolio section" id='portfolio'>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      
      <div className="portfolio__container container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/pokeapp.jpeg" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Todo App</h3>
              <p className="portfolio__description"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-bootstrap bx-tada portfolio_icon redux'></i></li>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-redux bx-tada portfolio_icon redux'></i></li>
              </ul>
              <a href="https://pokeappg16.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/pokeapp.jpeg" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Poke App</h3>
              <p className="portfolio__description"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                <li><i className='bx bxl-redux bx-tada portfolio_icon redux'></i></li>
              </ul>
              <a href="https://pokeappg16.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/climateapp.jpeg" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Weather App</h3>
              <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                <li><i className='bx bxl-redux bx-tada portfolio_icon redux'></i></li>
              </ul>
              <a href="https://climatebybri.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/rickmorty.png" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Rick and Morty App</h3>
              <p className="portfolio__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                <li><i className='bx bxl-redux bx-tada portfolio_icon redux'></i></li>
              </ul>
              <a href="https://rickyandmortybybri.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        </div>
          </Swiper>
      </div>
    </section>
  )
}

export default Portfolio