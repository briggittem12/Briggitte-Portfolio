import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home'
import Footer from './components/footer/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Information from './components/info/Information'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <Header/>
    <Home/>
    <AboutMe/>
    <Skills/>
    <Information/>
    <Portfolio/>
    <Projects/>
    {/* <Contact/> */}
      {/* <Routes>

        <Route path='/' element={<Home/>}/>  
        <Route path='/aboutme' element={<AboutMe/>}/>  
        <Route path='/skills' element={<Skills/>}/>  
        <Route path='/services' element={<Information/>}/>  
        <Route path='/portfolio' element={<Portfolio/>}/>  
        <Route path='/projects' element={<Projects/>}/>  
        <Route path='/contact' element={<Contact/>}/>  
        
      
      </Routes> */}
    
    </>
  )
}

export default App
