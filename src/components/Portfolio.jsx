import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; 
import 'swiper/css';  
import "swiper/css/navigation";
import { SiMui, SiNextdotjs } from "react-icons/si"


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
            <img src="/img/k-beauty.png" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Landing Page Korean Products</h3>
              <p className="portfolio__description"> 
              Landing Page about korean products made with Next.js, Typescript, React.js and tailwind css fully responsive. 
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li className=' portfolio_icon react'><i className='bx bxl-react' ></i></li>
                <li className='portfolio_icon css'><i className='bx bxl-typescript'></i></li>
                <li className='portfolio_icon react'><i className='bx bxl-tailwind-css' ></i></li>
                <li className='portfolio_icon next'><SiNextdotjs/></li>
              </ul>
              <a href="https://k-beautyproducts.netlify.app/" target="_blank" className="button button--flex button--small portfolio__button">
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
              <h3 className="portfolio__title">E-commerce Clone Joja</h3>
              <p className="portfolio__description"> 
              Fully functional Ecommerce, allows user registration and login, product view and descriptions, add and remove products to the shopping cart.<br/> 
              Made with FlutterFlow and Firesbase.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-firebase portfolio_icon firebase' ></i></li>
                <li><i className='bx bxl-flutter portfolio_icon flutter' ></i></li>
                
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
            <img src="/img/yt_clone.png" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Youtube Clone</h3>
              <p className="portfolio__description"> 
                Youtube Clone, allows the view and description of channels and videos, suggests new videos and has a search functionality. <br />
                Responsive design, made with Material Ui.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li className='portfolio_icon mui'><SiMui/></li>
                <li><i className='bx bxl-react portfolio_icon react' ></i></li>
                
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
            <img src="/img/todoapp.jpeg" alt="act" className="portfolio__img" />
            <div className="portfolio__data">
              <h3 className="portfolio__title">Todo App</h3>
              <p className="portfolio__description"> 
              Task application in React, allows us to create, edit, mark as done and delete a task. <br />
              Responsive design, made with bootstrap.
              </p>
              <span>Use:</span>
              <ul className='portfolio__list'>
                <li><i className='bx bxl-bootstrap portfolio_icon redux'></i></li>
                <li><i className='bx bxl-react portfolio_icon react' ></i></li>
                
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
                <li><i className='bx bxl-react portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 portfolio_icon css' ></i></li>
                <li><i className='bx bxl-redux portfolio_icon redux'></i></li>
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
                <li><i className='bx bxl-react portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 portfolio_icon css' ></i></li>
                
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
                <li><i className='bx bxl-react portfolio_icon react' ></i></li>
                <li><i className='bx bxl-css3 portfolio_icon css' ></i></li>
                
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