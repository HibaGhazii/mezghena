import React from 'react'
import ColumnChart from './ColumnChart';
import DashboardNav from './DashboardNav';
import AreaChart from './AreaChart';
import CircleProgress from './CircleProgress';
import { IoDocumentTextOutline } from "react-icons/io5";

const Home = () => {

  return (

    <div className='pl-[340px] mr-[100px] mt-5'>
        <DashboardNav/> 

        <div className='bg-bg-toggle p-8 mt-10 text-white rounded-2xl w-full'>
            <p className='text-4xl font-bold pb-2'>Welcome back, John Doe</p>
            <p className='mr-[500px]'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
        </div>

        <div className="grid grid-cols-3 justify-center items-center gap-4 mt-10">
            <div className="w-96 h-[400px] bg-white shadow-lg rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4 text-bg-toggle">Students Statistic</h1>
                <ColumnChart data={[21, 22, 10, 28, 16, 21, 13, 30]} labels={['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily']} colors={['#023F6D']} />
            </div>

            <div className="w-96 h-[400px] bg-white shadow-lg rounded-md p-4">
                <h1 className="text-lg font-semibold text-bg-toggle">Class Progress</h1>
                <CircleProgress />
            </div>

            <div className="w-[450px] h-[400px] bg-white shadow-lg rounded-md p-4">
                <div className='flex justify-between'>
                    <h1 className="text-lg font-semibold mb-4 text-bg-toggle">Upcoming Courses</h1>
                    <button className="text-lg font-semibold mb-4 text-bg-toggle">See all</button>
                </div> 

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between shadow-lg rounded-md p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>31</div>

                        <div>
                            <p>Meeting with the VC</p>
                            <a href="https://www.zoom.com" className="text-blue-800">link//www.zoom.com</a>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-semibold'>10 A.M - 11 A.M</p>
                            <p className='text-red-700 font-semibold'>Due soon</p>
                        </div>
                    </div>

                    <div className='flex justify-between shadow-lg rounded-md p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>31</div>

                        <div>
                            <p>Meeting with the VC</p>
                            <a href="https://www.zoom.com" className="text-blue-800">link//www.zoom.com</a>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-semibold'>10 A.M - 11 A.M</p>
                            <p className='text-red-700 font-semibold'>Due soon</p>
                        </div>
                    </div>

                    <div className='flex justify-between shadow-lg rounded-md p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>31</div>

                        <div>
                            <p>Meeting with the VC</p>
                            <a href="https://www.zoom.com" className="text-blue-800">link//www.zoom.com</a>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-semibold'>10 A.M - 11 A.M</p>
                            <p className='text-second-color font-semibold'>Upcoming</p>
                        </div>
                    </div>

                    <div className='flex justify-between shadow-lg rounded-md p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>31</div>

                        <div>
                            <p>Meeting with the VC</p>
                            <a href="https://www.zoom.com" className="text-blue-800">link//www.zoom.com</a>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-semibold'>10 A.M - 11 A.M</p>
                            <p className='text-second-color font-semibold'>Upcoming</p>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="w-auto h-[330px] bg-white shadow-lg rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4 text-bg-toggle">Class Progress</h1>
                <AreaChart />
            </div>  
            
            <div className="w-[470px] h-auto bg-white shadow-lg rounded-md p-4">
                
                <div className='flex justify-between gap-4'>
                    <h1 className="text-lg font-semibold mb-4 text-bg-toggle">Staff Room</h1>
                    <button className="text-lg font-semibold mb-4 text-bg-toggle">See all</button>
                </div> 
                
                <div>
                    <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                    <div className='flex justify-between gap-2 p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>AA</div>

                        <div>
                            <p className='text-bg-toggle font-bold'>Meeting with the VC</p>
                            <p className='text-sm text-gray-500'>Hello, Mr John i am yet to get your class </p>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-bold'>10:25 am</p>
                        </div>
                    </div>

                    <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                    <div className='flex justify-between p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>BP</div>

                        <div>
                            <p className='text-bg-toggle font-bold'>Meeting with the VC</p>
                            <p className='text-sm text-gray-500'>Hello, Mr John i am yet to get your class </p>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-bold'>10:25 am</p>
                        </div>
                    </div>

                    <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                    <div className='flex justify-between p-3'>
                        <div className='bg-bg-toggle text-white rounded-md p-3'>T</div>

                        <div>
                            <p className='text-bg-toggle font-bold'>Meeting with the VC</p>
                            <p className='text-sm text-gray-500'>Hello, Mr John i am yet to get your class </p>
                        </div>

                        <div>
                            <p className='text-gray-500 text-sm font-bold'>12:25 am</p>
                        </div>
                    </div>

                </div>

                
            </div>  

            <div className="ml-16 w-[380px] h-auto bg-white shadow-lg rounded-md p-4">
                
                    <div className='flex justify-between gap-4'>
                        <h1 className="text-lg font-semibold mb-4 text-bg-toggle">Documents</h1>
                        <button className="text-lg font-semibold mb-4 text-bg-toggle">See all</button>
                    </div> 
                    <div>
                        <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                        <div className='flex gap-3 p-3'>
                            <div className='bg-bg-toggle text-white rounded-md p-3'><IoDocumentTextOutline className='w-6 h-6' /></div>

                            <div>
                                <p className='text-bg-toggle font-semibold'>Kelvin college application</p>
                                <p className='text-sm text-gray-500'>01 Aug, 04:20PM </p>
                            </div>
                        </div>

                        <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                        <div className='flex gap-3 p-3'>
                            <div className='bg-bg-toggle text-white rounded-md p-3'><IoDocumentTextOutline className='w-6 h-6' /></div>

                            <div>
                                <p className='text-bg-toggle font-semibold'>Kelvin college application</p>
                                <p className='text-sm text-gray-500'>01 Aug, 04:20PM </p>
                            </div>

                        </div>

                        <hr className='border-2 border-bg-toggle my-1 mr-20'/>

                        <div className='flex gap-3 p-3'>
                            <div className='bg-bg-toggle text-white rounded-md p-3'><IoDocumentTextOutline className='w-6 h-6' /></div>

                            <div>
                                <p className='text-bg-toggle font-semibold'>Kelvin college application</p>
                                <p className='text-sm text-gray-500'>01 Aug, 04:20PM </p>
                            </div>
                            
                        </div>

                    </div>
                </div>

        </div>

    </div>
  )
}

export default Home
