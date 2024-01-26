import React from 'react'
import Footer from '../PageAcceuil/Footer'
import NavbarComponent from '../PageAcceuil/Navbar'
import HeroSectionService from './HeroSectionService'
import MainService from './MainService'
import WhatTeachersSay from './WhatTeachersSay'
import ReasonsTeaching from './ReasonsTeaching'

const Service = () => {
  return (
    <div>
      <NavbarComponent/>
      <HeroSectionService/>
      <MainService/>
      <WhatTeachersSay/>
      <ReasonsTeaching/>
      <Footer/>
    </div>
  )
}

export default Service
