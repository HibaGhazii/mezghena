import React from 'react'
import HeroSection from './HeroSection';
import GetReady from './GetReady';
import PopularCourses from './PopularCourses';
import PremiumTeaching from './PremiumTeaching';
import WhatStudentSay from './WhatStudentSay';
import OurCategories from './OurCategories';
import HowItWorks from './HowItWorks';
import NavbarComponent from './Navbar';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
        <NavbarComponent/>
        <HeroSection />
        <GetReady />
        <PopularCourses />
        <PremiumTeaching />
        <WhatStudentSay />
        <OurCategories />
        <HowItWorks />
        <Footer/>
    </div>
  )
}

export default HomePage
