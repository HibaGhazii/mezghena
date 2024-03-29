import React from 'react'
import email from "../assets/img/contactEmail.svg";
import contactPhone from "../assets/img/contactPhone.svg"
import contactAddress from "../assets/img/contactAddress.svg"
import facebook from "../assets/img/Facebook.svg"
import instagram from "../assets/img/instagram.svg"
import twitter from "../assets/img/twitter.svg"
import contactMessage from "../assets/img/contactMessage.svg"

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen bg-bg-toggle pt-20 md:px-20 lg:px-48'>
        <div className='md:w-1/2 text-white m-12'>

            <p className='text-4xl font-bold pl-5'>Let's discuss</p>
            <p className='text-4xl font-bold pl-5'>on something <span className='text-second-color'>cool</span></p>
            <p className='text-4xl font-bold pl-5'>together</p>

            <div className='flex flex-col mt-8 md:mt-[80px] w-80'>
                <div className='flex gap-3 px-5 py-4 hover:bg-second-color/50 hover:rounded-lg'>
                    <img src={email} alt="Email" />
                    <p>SaulDesign@gmail.com</p>
                </div>

                <div className='flex gap-3 px-5 py-4 hover:bg-second-color/50 hover:rounded-lg'>
                    <img src={contactPhone} alt="Phone number" />
                    <p>+123 456 789</p>
                </div>

                <div className='flex gap-3 px-5 py-4 hover:bg-second-color/50 hover:rounded-lg'>
                    <img src={contactAddress} alt="Address" />
                    <p>123 Street 456 House</p>
                </div>
            </div>

            <div className='flex justify-center md:justify-start mt-8 md:mt-20 gap-4'> 
                <div className='hover:bg-second-color p-3 hover:rounded-full'>
                    <a href="#"><img src={facebook} alt="Facebook" className='h-5 w-5'/></a>
                </div>

                <div className='hover:bg-second-color  p-3 hover:rounded-full'>
                    <a href="#"><img src={instagram} alt="Instagram" className='h-5 w-5'/></a>
                </div>

                <div className='hover:bg-second-color  p-3 hover:rounded-full'>
                    <a href="#"><img src={twitter} alt="Twitter" className='h-5 w-5'/></a>
                </div>
            </div>
        </div>

        <div className='md:w-1/2 md:max-w-[500px] lg:max-h-[550px] p-5 mx-8 mb-10 md:m-12 bg-EEE rounded-lg'>
            <p className='text-first-color font-bold'>I'm interested in...</p>
            
            <div className='pt-4'>
                
                <ul class="grid w-full gap-2 grid-cols-2 md:grid-cols-3 ">
                    <li>
                        <input type="checkbox" id="ui-ux" value="" class="hidden peer" required/>
                        <label for="ui-ux" class="bg-EEE inline-flex items-center justify-between w-full p-3 text-gray-500 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color">                           
                            <div class="block">
                                <div class="w-full text-sm">UI/UX Designer</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="web-design" value="" class="hidden peer"/>
                        <label for="web-design" class="bg-EEE inline-flex items-center justify-between w-full p-3 text-gray-500 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color">
                            <div class="block">
                                <div class="w-full text-sm">Web Design</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="design-system" value="" class="hidden peer"/>
                        <label for="design-system" class="bg-EEE inline-flex items-center justify-between w-full p-3 text-gray-500 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color">
                            <div class="block">
                                <div class="w-full text-sm">Design system</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="graphic-design" value="" class="hidden peer"/>
                        <label for="graphic-design" class="bg-EEE inline-flex items-center justify-between w-full p-3 text-gray-500 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color">
                            <div class="block">
                                <div class="w-full text-sm">Graphic Design</div>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="others" value="" class="hidden peer"/>
                        <label for="others" class="bg-EEE inline-flex items-center justify-between w-full p-3 text-gray-500 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:bg-bg-toggle dark:border-first-color peer-checked:border-first-color peer-checked:text-white hover:bg-bg-toggle hover:text-white hover:border-first-color">
                            <div class="block">
                                <div class="w-full text-sm">Others</div>
                            </div>
                        </label>
                    </li>
                    
                </ul>

            </div>

            <form action="" className='flex flex-col mt-10 gap-16 '>
                
                <div className='flex flex-col gap-5'>

                    <input type="text" id="name" name="name" required placeholder='Your name' className='focus:outline-none bg-EEE border-b-1 border-t-0 border-x-0 border-b-gray-400 focus:border-b-first-color focus:border-transparent focus:ring-0'/>
                    
                    <input type="email" id="email" name="email" required placeholder='Your email' className='focus:outline-none bg-EEE border-b-1 border-t-0 border-x-0 border-b-gray-400 focus:border-b-first-color focus:border-transparent focus:ring-0' />
                    
                    <textarea placeholder="Your message" name="message" required className='focus:outline-none bg-EEE border-b-1 border-t-0 border-x-0 border-b-gray-400 focus:border-b-first-color focus:border-transparent focus:ring-0'></textarea>
                    
                </div>
                <div>
                    <button type="submit" className='text-sm bg-bg-toggle flex items-center text-white gap-2 px-8 py-3 rounded-md'>
                        <img src={contactMessage} className='h-3 w-3'/>
                        Send Message
                    </button>
                </div>
                

            </form>
        </div>
    </div>
  )
}

export default Contact
