import React from 'react'
import Footer from '../PageAcceuil/Footer'
import NavbarComponent from '../PageAcceuil/Navbar'
import HeroSectionCourse from './HeroSectionCourse'
import MainCourse from './MainCourse'

const Courses = () => {
  return (
    <div>
      <NavbarComponent/>
      <HeroSectionCourse/>
      <MainCourse/>
      <Footer/>
      
    </div>
  )
}

export default Courses
