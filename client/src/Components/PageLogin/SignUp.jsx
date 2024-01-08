import React from 'react'
import { Link } from 'react-router-dom'
import register from "../assets/img/register.svg"
import google from "../assets/img/google.svg"
import logo from "../assets/img/mezghena-logo.svg"

const SignUp = () => {
  return (
    <div className='md:flex md:bg-bg-toggle md:h-[800px] lg:h-[900px]'> 
        <div className='md:w-1/2 md:ml-20 mt-16 md:flex hidden lg:mt-36'> 
            <img src={register} className='w-[500px] h-[570px] lg:w-[600px]'/>
        </div>
        <div className="mx-5 md:bg-[url('../src/Components/assets/img/bgWhite.svg')] md:bg-cover md:w-[55%] md:absolute md:-right-5 md:pl-28">
            <div className='text-center'>
                <p className="mt-8 md:mt-4 lg:mt-16 text-4xl font-bold text-bg-toggle">Sign Up</p>
                <p className='text-96A0AD mb-5 mt-2 mx-16 md:mx-40 lg:mx-56 md:text-sm'>We've missed you! Please sign in to catch up on what you've missed</p>
            </div>

            <div className='text-center md:flex md:justify-center'>
                
                <button className='font-semibold flex justify-center items-center p-2 md:p-1.5 w-full md:w-80 border border-1 border-first-color rounded-2xl'>
                    <img src={google}/>
                    Log In with Google
                </button>
                

            </div>
            <p className='text-96A0AD my-4 md:mt-2 md:mb-0 text-center lg:mt-10'>or</p>
            <form action="" className='md:flex md:flex-col md:items-center'>
                

                <div>
                    <label htmlFor="email" className='font-semibold'>Username</label><br />
                    <input  className='rounded-xl w-full md:w-80 mb-6 md:mb-4 border-first-color focus:border-none' type="text" id="username" name="username" placeholder='Enter your username' required/><br />
                </div>

                <div>
                    <label htmlFor="email" className='font-semibold'>Email </label><br />
                    <input  className='rounded-xl w-full md:w-80 mb-6 md:mb-4 border-first-color focus:border-none' type="email" id="email" name="email" placeholder='Enter your email' required/><br />
                </div>
                
                
                <div>
                    <label htmlFor="phone" className='font-semibold'>Phone</label><br />
                    <input className='rounded-xl w-full md:w-80 mb-6 md:mb-4 border-first-color focus:border-none' type="text" id="phone" name="phone" placeholder='Enter your phone number' required/><br />
                </div>

                <div>
                    <label htmlFor="role" className='font-semibold'>You Are</label><br />
                    <select className='rounded-xl w-full md:w-80 mb-6 md:mb-4 border-first-color focus:border-none' id="password" name="password" placeholder='Enter your password' required>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="password" className='font-semibold'>Password</label><br />
                    <input className='rounded-xl w-full md:w-80 mb-3 md:mb-3 border-first-color focus:border-none' type="password" id="password" name="password" placeholder='Enter your password' required/><br />
                </div>

                <div className='flex md:items-center mb-12 md:mb-5 md:-ml-[70px]'>
                    <label htmlFor="conditions" className='flex items-center'>
                        <input type='checkbox' id="conditions" className='rounded-[4px]' required />
                        <span className="ml-2 text-sm">I agree to the terms and conditions</span>
                    </label>
                    
                </div>
                <input type="submit" value="Sign Up" className='rounded-xl bg-bg-toggle text-white p-2 w-full md:w-80 hover:bg-002D62 cursor-pointer'/>
                
            </form>

            <div className='flex flex-col items-center text-center pt-4 md:pt-2'> 
                <p className='text-sm md:text-xs'>Already have an account ? <Link to='/login' className='text-first-color'>Log In</Link></p>
                <Link to="/">
                    <img src={logo} alt="Mezghena logo" className='cursor-pointer w-20 h-24 md:h-20 md:my-2 lg:my-3' />
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default SignUp
