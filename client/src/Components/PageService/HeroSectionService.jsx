import React from 'react'
import image1 from '../assets/img/guy-lesson.png' 
import codeWindow from '../assets/img/Orion_code-window.svg'
import page from '../assets/img/Orion_page.svg'
import megaphone from '../assets/img/Orion_megaphone.svg'
import { BsPlayCircle } from "react-icons/bs";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal } from 'flowbite-react';
import { useState } from 'react'

const HeroSectionService = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="text-white flex flex-col md:flex-row justify-center items-center pt-20 pb-5 md:pt-28 bg-[url('../src/Components/assets/img/Hero-Section.png')] rounded-b-[60px] bg-cover px-10 md:pl-40">
      
      <div className='md:w-1/2 '>
        <img src={image1} className='w-48 md:h-[400px] md:w-[350px] absolute left-8 top-24 md:top-32 md:left-48 '/>
        <div className='rounded-lg py-1 px-6 bg-second-color md:mx-56 md:translate-x-24 translate-x-16 translate-y-16'>
            <div className='flex items-center gap-3 my-2 md:my-4'>
              <div className='rounded-full bg-white px-3 py-2'>
                <img src={page} className='text-second-color w-5 h-5 md:w-8 md:h-8'/>
              </div>
              <div className='text-sm md:text-md'>
                <p className='text-black'>20 Courses</p>
                <p>UI/UX Design</p>
              </div>
            </div>

            <div className='flex items-center gap-3 my-2 md:my-4'>
              <div className='rounded-full bg-white px-3 py-2'>
                <img src={codeWindow} className=' text-violet-600 w-5 h-5 md:w-8 md:h-8'/>
              </div>
              <div className='text-sm md:text-md'>
                <p className='text-black'>20 Courses</p>
                <p>Development</p>
              </div>
            </div>

            <div className='flex items-center gap-3 my-2 md:my-4'>
              <div className='rounded-full bg-white px-3 py-2'>
                <img src={megaphone} className=' text-blue-600 w-5 h-5 md:w-8 md:h-8'/>
              </div>
              <div className='text-sm md:text-md'>
                <p className='text-black'>20 Courses</p>
                <p>Marketing</p>
              </div>
            </div>
        </div>
      </div>

      <div className="md:w-[50%] mt-28 md:mt-6">
          <p className='text-second-color text-4xl font-semibold'>Teach without limits</p>
          <p className='text-light-blue text-4xl font-semibold'>and spread your</p>
          <p className='text-8FB3CE text-4xl font-semibold'>knowledge</p>

          <p className='my-6 mr-10 text-sm'>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
          
          <div className='flex items-center gap-4 md:gap-8 text-lg'>
            <Link to='/signup' className='bg-second-color rounded-xl px-4 py-2'>Become a Teacher</Link>

            <button onClick={() => setOpenModal(true)} className='flex items-center gap-3'>
                <BsPlayCircle className='text-second-color h-8 w-8' />
                <p>Watch Video</p>
            </button>
            <Modal size='3xl' dismissible show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header></Modal.Header> 
              <Modal.Body>
                <div>
                  <iframe
                    width="100%"
                    height="315"
                    src='https://www.youtube.com/embed/8vTCyhDyRjg' //YouTube video URLs should be in the format https://www.youtube.com/embed/VIDEO_ID
                    title="Embedded Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Modal.Body>
              
            </Modal>
          </div>

          <p className='text-gray-300 mt-10 md:mt-16'>Recent engagement</p>
          <div className='flex gap-8 mt-1 mb-4'>
            <p><span className=' text-8FB3CE font-bold text-2xl'>50K</span> Teachers</p>
            <p><span className=' text-8FB3CE font-bold text-2xl'>70+</span> Courses</p>
          </div>
      </div>
    </div>
  )
}

export default HeroSectionService
