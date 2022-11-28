import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; 
import 'swiper/css';  
import "swiper/css/navigation";
import { motion } from "framer-motion"
import Projects from './Projects';


const Portfolio = () => {
  
  return (
    <>
    <section className="portfolio section" id='portfolio'>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      
      <div className="portfolio__container container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/todoapp.jpeg" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Todo App</h3>
              <p className="portfolio__description"> 
              Task application in React, allows us to create, edit, mark as done and delete a task. <br />
              Responsive design, made with bootstrap.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-bootstrap bx-tada portfolio_icon redux'></i></li>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                
              </ul>
              <a href="https://todo-app-v1b.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
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
                Pokemon App made with React, through a global state of Redux, allows you to enter your username, search through filters and pagination. <br />
                Responsive design made with CSS3. 
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
                Weather application, allows you to view the temperature of your location in degrees Celsius and Fahrenheit. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                
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
                Rick and Morty application, allows you to search for your favorite character using a search filter to see their characteristics.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                
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
    </>
  )
}

export default Portfolio