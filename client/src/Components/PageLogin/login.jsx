import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='md:flex md:bg-bg-toggle md:h-full'>
        <div className='md:w-1/2 md:flex hidden'>
            <img src="/img/login.svg" className='w-full h-[900px]'/>
        </div>
        <div className="mx-5 md:bg-[url('../public/img/bgWhite.svg')] md:bg-cover md:w-[50%] md:absolute md:h-[900px] md:-right-5 md:pl-28">
            <div className='text-center'>
                <p className="mt-24 md:mt-8 lg:mt-28 text-4xl font-bold text-bg-toggle font-Jost">Welcome back</p>
                <p className='text-96A0AD mb-5 mt-4 mx-16 md:mx-40'>We've missed you! Please sign in to catch up on what you've missed</p>
            </div>

            <div className='text-center md:flex md:justify-center'>
                
                <button className='font-semibold flex justify-center items-center py-2 px-10 md:p-1.5 w-full md:w-80 border border-1 border-first-color rounded-2xl'>
                    <img src="/img/google.svg"/>
                    Log In with Google
                </button>
                

            </div>
            <p className='text-96A0AD mb-[40px] mt-[26px] md:mt-1 md:mb-0 text-center lg:mt-16'>or</p>
            <form action="" className='md:flex md:flex-col md:items-center lg:gap-5'>
                <div>
                    <label htmlFor="email" className='font-semibold'>Email </label><br />
                    <input  className='rounded-xl w-full md:w-80 mb-8 md:mb-4 border-first-color focus:border-none' type="email" id="email" name="email" placeholder='Enter your email' required/><br />
                </div>
                
                <div>
                    <label htmlFor="password" className='font-semibold'>Password</label><br />
                    <input className='rounded-xl w-full md:w-80 mb-8 md:mb-4 border-first-color focus:border-none' type="password" id="password" name="password" placeholder='Enter your password' required/><br />
                </div>
                <div className='flex justify-between md:gap-20 md:items-center mb-20 md:mb-7 md:mx-2'>
                    <label htmlFor="rememberMe" className='flex items-center justify-center'>
                        <input type='checkbox' id="rememberMe" className='rounded-[4px]' />
                        <span className="ml-2">Remember Me</span>
                    </label>
                    <Link to='/forgetPassword' className='text-first-color'>Forget Password</Link>
                </div>
                <input type="submit" value="Log in" className='rounded-xl bg-bg-toggle text-white p-2 w-full md:w-80 hover:bg-002D62 cursor-pointer'/>
                
            </form>

            <div className='flex flex-col items-center text-center pt-8 px-2 md:pt-4 '> 
                <p className='text-sm md:text-xs'>Don't have an account yet? <Link to='/signup'  className='text-first-color'>Sign up</Link> now to join our community</p>
                <img src="/img/mezghena-logo.svg" className='w-[115px] h-[120px] md:h-20 mt-[31px] md:my-2 lg:h-24 lg:mt-10' />
            </div>
        </div>
        
    </div>
  )
}

export default Login
