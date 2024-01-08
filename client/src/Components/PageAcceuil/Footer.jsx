import logo from "../assets/img/mezghena-logo.svg";

const Footer = () => {
  
  return (
    <div className="font-Roboto w-full h-auto bg-[url('../src/Components/assets/img/premiumTeachingBg.svg')] rounded-t-[60px] mt-14 pt-5 text-gray-600">
      {/* Grid layout with flexbox for responsiveness */}
      <div className='grid w-full justify-between sm:flex sm:justify-between'>

        {/* Left section of the footer */}
        <div className='footer px-4 pt-2 sm:pt-2 sm:px-10 md:px-10'>
          {/* Logo and title */}
          <div className="flex justify-center sm:justify-start md:justify-start gap-2 items-center pb-3">
            <img src={logo} alt="Mezghena logo" className=""/>
            <p className='font-bold font-Roboto text-lg text-black'>Mezghena</p>
          </div>
          {/* Description */}
          <p className='text-left text-md font-Roboto md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry industry Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
        </div>

        {/* Divider line */}
        <hr className='border border-1 my-3 sm:my-5 md:my-8' />

        {/* Right section of the footer with multiple columns */}
        <div className="grid lg:w-full grid-cols-2 gap-4 sm:flex sm:flex-row md:flex md:flex-row ml-4 md:ml-0 sm:ml-0">
          {/* Company information */}
          <div className="w-full md:w-1/2 md:mr-4">
            <p className='text-first-color font-bold'>Company</p>
            <ul>
              <li className='py-2'>About Us</li>
              <li className='py-2'>How it works?</li>
              <li className='py-2'>Popular Courses</li>
              <li className='py-2'>Service</li>
            </ul>
          </div>

          {/* Support information */}
          <div className="w-full md:w-1/2">
            <p className='text-first-color font-bold'>Support</p>
            <ul>
              <li className='py-2'>FAQ</li>
              <li className='py-2'>Help Center</li>
              <li className='py-2'>Career</li>
              <li className='py-2'>Privacy</li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <p className='text-first-color font-bold'>Contact</p>
            <ul>
              <li className='py-2'>+0913-705-3875</li>
              <li className='py-2'>Eliz@jourrapide.com</li>
              <li className='py-2'>4808 Skinner Hollow Days Creek</li>
            </ul>
          </div>

          {/* Courses information */}
          <div className="w-full md:w-1/2">
            <p className='text-first-color font-bold'>Courses</p>
            <ul>
              <li className='py-2'>Categories</li>
              <li className='py-2'>Offline Courses</li>
              <li className='py-2'>Video Courses</li>
            </ul>
          </div>
        </div>

      </div>

      {/* Divider line */}
      <hr className='border border-1 my-3 sm:my-4 md:my-8' />

      {/* Copyright information */}
      <div className='text-center text-first-color pb-4'>
        <p>BookStore All Right Reserved, 2022</p>
      </div>
    </div>
  );
};

export default Footer;
