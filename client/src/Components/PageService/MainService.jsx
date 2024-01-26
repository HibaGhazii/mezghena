import React, { useState } from 'react'
import student from '../assets/img/howitwork.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const MainService = () => {

  const [count,setCount] = useState(false);

  return (
    <div>
      <div className='mt-14'>
      <div className='text-center'>
        <p className='text-bg-toggle font-bold text-4xl '>How to Launch your teaching</p>
        <p className='text-gray-500 mt-1'>Lorem Ipsum is simply dummy text of the printing.</p>
      </div>

      <div className='text-white text-center md:flex md:gap-4 justify-center mt-14'>
        <button className='bg-bg-toggle mr-2 mb-3 md:mr-0 md:mb-0 px-10 py-2 rounded-lg hover:bg-second-color'>Program Yourself</button>
        <button className='bg-bg-toggle px-10 py-2 rounded-lg hover:bg-second-color'>Record your Course</button>
        <button className='bg-bg-toggle px-10 py-2 rounded-lg hover:bg-second-color'>Launch your Course</button>
      </div>

      <div className='flex gap-3 mt-16 md:mx-[450px] font-inter'>
        <div className=' bg-first-color/10 rounded-xl shadow-xl p-8 mx-6 md:mx-0'>
          <p className='text-gray-600'>Start with your passion and knowledge. Then, choose a promising topic using our Marketplace Insights tool. The way you teach and what you bring to it is entirely up to you.</p>
          <p className='text-xl font-bold mt-4'>Mezghena helps you</p>
          <p className='text-gray-600 mt-4'>We offer numerous resources on how to create your first course. Additionally, our trainer dashboard and program pages help you stay organized</p>
        </div>
        <div className='hidden md:block'>
          <img src={student} className=' brightness-75 backdrop-brightness-50 rounded-xl w-[700px] h-[300px]'/>
        </div>
      </div>
    </div>

    <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
      <div className=' bg-bg-toggle flex justify-between text-center text-white py-4 px-4 md:px-32 mt-14'>
        <div>
          <p className='font-semibold text-2xl'>{ count && <CountUp duration={2} delay={0} start={0} end={62}/>}M</p>
          <p>Participants</p>
        </div>

        <div>
          <p className='font-semibold text-2xl'>+{ count && <CountUp duration={2} delay={0} start={0} end={75}/>}</p>
          <p>Langues</p>
        </div>

        <div>
          <p className='font-semibold text-2xl'>{ count && <CountUp duration={2} delay={0} start={0} end={830}/>}M</p>
          <p>Inscriptions</p>
        </div>

        <div>
          <p className='font-semibold text-2xl'>+{ count && <CountUp duration={2} delay={0} start={0} end={180}/>} </p>
          <p>pays</p>
        </div>

        <div className='hidden md:block'>
          <p className='font-semibold text-2xl'>+{ count && <CountUp duration={2} delay={0} start={0} end={15000}/>}</p>
          <p>Clients Entreprise</p>
        </div>
      </div>
    </ScrollTrigger>
    </div>
  )
}

export default MainService
