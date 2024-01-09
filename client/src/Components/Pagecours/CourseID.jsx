import React from 'react'
import Footer from '../PageAcceuil/Footer'
import NavbarComponent from '../PageAcceuil/Navbar'
import HeroSectionCourseID from './HeroSectionCourseID'
import MainCourseID from './MainCourseID'

const CourseID = () => {
  return (
    <div>
        <NavbarComponent/>
        <HeroSectionCourseID/>
        <MainCourseID/>
        <Footer/>
    </div>
  )
}

export default CourseID