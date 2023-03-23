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
            <img src="/img/yt_clone.png" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">YouTube Clone</h3>
              <p className="portfolio__description"> 
              Youtube clone made with React using RapidAPI. Allows the user to search for videos, view the channel and play the videos. <br />
              Responsive design, made with MaterialUI.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-css3 bx-flip-horizontal bx-tada portfolio_icon css' ></i></li>
                <li><i className='bx bxl-react bx-flip-horizontal bx-tada portfolio_icon react' ></i></li>
                
              </ul>
              <a href="https://clone-yt-bybri.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/joja-ecc.png" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">E-commerce Joja</h3>
              <p className="portfolio__description"> 
              Online store in flutterflow and firebase, allows the user to see the product detail, select sizes and quantities to be added to the shopping cart.<br />
              Responsive design, made with FlutterFlow.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-firebase bx-tada portfolio_icon' ></i></li>
                <li><i className='bx bxl-flutter bx-tada portfolio_icon' ></i></li>
                
              </ul>
              <a href="https://clone-yt-bybri.netlify.app" target="_blank" className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="fa-solid fa-arrow-right button__icon"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="portfolio__content grid">
            <img src="/img/todoapp.png" alt="act" className="portfolio__img" />
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
            <img src="/img/pokeapp.png" alt="act" className="portfolio__img" />
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
            <img src="/img/clima.png" alt="act" className="portfolio__img" />
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
          
        </div>
          </Swiper>
      </div>
    </section>
    </>
  )
}

export default Portfolio