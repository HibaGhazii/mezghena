// NavbarComponent.js
import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/mezghena-logo.svg"

function NavbarComponent() {
  
  return (
    <Navbar fluid rounded className='bg-bg-toggle md:flex md:items-center lg:block lg:px-28 md:bg-inherit lg:bg-inherit absolute w-full md:text-white lg:text-white '>
      {/* Navbar Brand with Mezghena Logo */}
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className="mr-3 h-[50px] sm:h-[60px] md:h-[60px] lg:h-[80px] w-[80px]" alt="Mezghena Logo" />
      </Navbar.Brand>

      {/* Navbar Toggle Button */}
      <div className="flex flex-col">
        <Navbar.Toggle className='text-white hover:bg-dark-blue/40 md:hover:bg' />
      </div>

      {/* Navbar Collapse Section */}
      <Navbar.Collapse>
        {/* Navbar Links and Menu on Larger Screens */}
        <div className='md:flex lg:flex md:gap-6 lg:gap-8 xl:gap-12 md:justify-between md:text-lg md:items-center'>
          {/* Navbar Links */}
          <Navbar.Link as={Link}  to="/" className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Home</Navbar.Link>
          <Navbar.Link as={Link} to="/about" className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>About Us</Navbar.Link>
          <Navbar.Link as={Link} to="/service" className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Services</Navbar.Link>
          <Navbar.Link as={Link} to="/courses" className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Courses</Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Contact</Navbar.Link>

          {/* Register Button and Language Selector */}
          <div className='flex gap-1 items-center mt-2'>
            <Link to="/login" className='bg-first-color rounded-lg border-none focus:outline-none py-1.5 px-8 active:bg-dark-blue/20 hover:bg-002D62'>Register</Link>
            <select
              className='bg-second-color rounded-lg border-none focus:outline-none'>
              <option className='bg-white md:text-black' value="En">En</option>
              <option className='bg-white md:text-black' value="Fr">Fr</option>
            </select>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
