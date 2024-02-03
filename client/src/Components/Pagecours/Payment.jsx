import React from 'react'
import { Stepper } from 'react-form-stepper';
import { FaRegFileLines } from "react-icons/fa6";
import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsDownload,BsFillSendFill } from "react-icons/bs";
import { HiArrowPath } from "react-icons/hi2";
import { PiCertificateLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import image from '../assets/img/card.png'
import { IoPlayCircle   } from "react-icons/io5";
import { MdOutlineWatchLater,MdOutlinePlayCircleOutline  } from "react-icons/md";
import { useState } from 'react';
import { FaCcVisa } from "react-icons/fa6";

const Payment = () => {

    const [openModal, setOpenModal] = useState(false);
    const steps = ['1','2'];
    
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

  return (
    <div>
        <div className="mt-12 md:mt-0 md:w-[33%] md:absolute right-0 top-40">
            <div className='bg-white w-80 h-auto rounded-[35px] shadow-xl'> 
                <div className=''> 
                    <img src={image} className='h-48 w-80 rounded-t-[35px] brightness-50'/>
                    <IoPlayCircle  className=' cursor-pointer h-16 w-16 text-white absolute transform translate-x-32 -translate-y-32'/>
                    <p className='text-center -translate-y-10 font-bold text-lg font-Poppins'>Show resume of this course</p> 
                </div>
                
                <div className='mx-6 -mt-4 flex flex-col items-left gap-1'>
                    <p className='text-light-blue font-bold text-3xl'>$98</p>
                    <p className='text-dark-blue font-bold text-xl'>70% <span className='text-676767'>discount</span></p>
                    <div className='text-red-700 mt-2 flex items-center text-xs gap-2'>
                        <MdOutlineWatchLater className='h-8 w-8'/>
                        <p>You have <span className='font-bold'>1 day</span> left to take advantage of this price!</p>
                    </div>

                    <button className='bg-first-color w-full h-12 rounded-lg text-lg font-semibold mt-8'>Add to cart</button>
                    <button className='bg-second-color w-full h-12 rounded-lg text-lg font-semibold ' onClick={() => setOpenModal(true)}>Buy now</button>

                    
                
                    <p className='text-center text-gray-800 text-xs mt-6'>30-day satisfaction or money-back guarantee</p>
                </div>

                <div className='text-black mt-7 mx-6 text-xs flex flex-col gap-2'>
                    <p className='font-bold text-lg'>This course contains:</p> 
                    
                    <div className='flex items-center gap-1'> 
                        <MdOutlinePlayCircleOutline  className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>30-day satisfaction or money-back guarantee</p>
                    </div>

                    <div className='flex items-center gap-1'>
                        <IoIosCode className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>2 coding exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <FaRegFileLines  className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <CiCircleQuestion className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>2 Practical exercises</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <AiOutlineFileSearch className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>14 articles</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <BsDownload className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>261 resources to download</p>
                    </div>

                    <div className='flex items-center gap-1'> 
                        <HiArrowPath className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Unlimited access</p>
                    </div>

                    <div className='flex items-center gap-1 mb-6'> 
                        <PiCertificateLight className='h-3 w-3 text-light-blue'/>
                        <p className='text-gray-600'>Certifcate at the end of the course</p>
                    </div>

                    
                    <div className='flex gap-3'>
                        <button className='w-[20%] text-bg-toggle flex items-center justify-center gap-2 border border-first-color h-12 rounded-lg text-lg font-semibold mb-8'><CiHeart className='w-7 h-7'/></button>
                        <button className='w-[80%] text-bg-toggle flex items-center justify-center gap-2 border border-first-color h-12 rounded-lg text-lg font-semibold mb-8'>Share <BsFillSendFill className='mt-1'/></button>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='fixed top-20 text-black'> 

                        
                        <Modal show={openModal} size="5xl" onClose={onCloseModal} popup>
                            <Modal.Header>
                                
                            </Modal.Header>
                            
                            <Modal.Body>
                            <div className="flex">
                                
                               <div className='w-1/2 '>
                                    <p className='font-semibold text-lg mb-4'>Shipping Address</p>
                                    <div className='border-2 border-first-color rounded-[4px] px-6 flex flex-col gap-4'>
                                        <div className='flex gap-2 items-center mt-4'>
                                            <input type="radio" className='w-6 h-6 text-first-color'/>
                                            <p> Add new Address</p>
                                        </div>
                                        <form action="" className=' space-y-6'>
                                            <div className='flex gap-4'>
                                                <div>
                                                    <label htmlFor="First Name">First Name</label><br />
                                                    <input type='text' name="firstname" id="firstname" className='border border-gray-300 rounded-[6px] w-full' required />
                                                </div>

                                                <div>
                                                    <label htmlFor="Last  Name">Last Name</label><br />
                                                    <input type='text' name="lastname" id="lastname" required className='border border-gray-300 rounded-[6px] w-full' />
                                                </div>
                                            </div>

                                            <div className=''>
                                                <label htmlFor="Street Address">Street Address</label><br />
                                                <input type='text' name="address" id="address" required className='border border-gray-300 rounded-[6px] w-full' />
                                            </div>

                                            <div className='flex gap-4'>
                                                <div>
                                                    <label htmlFor="Apt Number">Apt Number</label><br />
                                                    <input type='text' name="AptNumber" id="AptNumber" required className='border border-gray-300 rounded-[6px] w-full' />
                                                </div>

                                                <div>
                                                    <label htmlFor="State">State</label><br />
                                                    <input type='text' name="State" id="State" required className='border border-gray-300 rounded-[6px] w-full' />
                                                </div>

                                                <div>
                                                    <label htmlFor="Zip">Zip</label><br />
                                                    <input type='text' name="Zip" id="Zip" required className='border border-gray-300 rounded-[6px] w-full' />
                                                </div>
                                            </div>

                                        </form>

                                        <div className='flex justify-between gap-4 mt-5 mb-10 '>
                                            <button className='text-black border border-gray-400 bg-white rounded-[6px] w-[30%] py-2'>Cancel</button>
                                            <button className='text-white bg-first-color rounded-[6px] w-[70%]'>Save this Address</button>
                                        </div>
                                    </div>

                               </div>

                               <div className='w-1/2'>
                                <p className='font-semibold text-lg mb-4'>Payment Method</p>
                                <div className='border-2 border-first-color rounded-[4px] px-6 flex flex-col gap-4'>
                                    <div className='flex gap-2 items-center mt-4'>
                                        <input type="radio" checked className='w-6 h-6 text-first-color'/>
                                        <p> Credit or Debit card</p>
                                    </div> 

                                    <form action="">
                                        <div className='flex items-center relative'>
                                            <input type="text" placeholder='●●●● ●●●● ●●●● 3458' className='border border-gray-300 rounded-[6px] w-full'/>
                                            <FaCcVisa className='w-10 h-10 text-first-color absolute right-2'/> 
                                        </div>

                                        <div>
                                            
                                        </div>
                                    </form>
                                </div>
                               </div>
                            </div>
                            </Modal.Body>
                        </Modal>
            </div>
    </div>
  )
}

export default Payment
