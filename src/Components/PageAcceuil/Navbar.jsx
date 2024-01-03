// NavbarComponent.js
import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  
  return (
    <Navbar fluid rounded className='bg-bg-toggle md:flex lg:block lg:px-28 md:bg-inherit lg:bg-inherit absolute w-full md:text-white lg:text-white '>
      {/* Navbar Brand with Mezghena Logo */}
      <Navbar.Brand as={Link} to="/">
        <img src="/img/mezghena-logo.svg" className="mr-3 h-[50px] sm:h-[60px] md:h-[60px]" alt="Mezghena Logo" />
      </Navbar.Brand>

      {/* Navbar Toggle Button */}
      <div className="flex flex-col">
        <Navbar.Toggle className='text-white hover:bg-dark-blue/40' />
      </div>

      {/* Navbar Collapse Section */}
      <Navbar.Collapse>
        {/* Navbar Links and Menu on Larger Screens */}
        <div className='md:flex lg:flex md:gap-8 md:justify-between md:text-lg md:items-center'>
          {/* Navbar Links */}
          <Navbar.Link as={Link}  to="/" onClick={() => window.location.href = '/'} className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Home</Navbar.Link>
          <Navbar.Link as={Link} to="/about" onClick={() => window.location.href = '/about'} className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>About Us</Navbar.Link>
          <Navbar.Link as={Link} to="/service" onClick={() => window.location.href = '/service'} className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Services</Navbar.Link>
          <Navbar.Link as={Link} to="/courses" onClick={() => window.location.href = '/courses'} className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Courses</Navbar.Link>
          <Navbar.Link as={Link} to="/contact" onClick={() => window.location.href = '/contact'} className='text-white lg:text-black md:text-black hover:bg-dark-blue/40'>Contact</Navbar.Link>

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
