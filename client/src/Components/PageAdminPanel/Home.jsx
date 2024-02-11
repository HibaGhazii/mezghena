import React from 'react'
import ColumnChart from './ColumnChart';
import DashboardNav from './DashboardNav';

const Home = () => {
    const data = [32, 23, 45, 19, 55];
    const labels = ['Class A', 'Class B', 'Class C', 'Class D'];

  return (

    <div className='pl-[340px] mr-[100px] mt-5'>
        <DashboardNav/>

        <div className='bg-bg-toggle p-8 mt-10 text-white rounded-2xl w-full'>
            <p className='text-4xl font-bold pb-2'>Welcome back, John Doe</p>
            <p className='mr-[500px]'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
        </div>

        <div className="flex justify-center items-center gap-10 mt-10">
            <div className="w-96 h-[400px] bg-white shadow-lg rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4">Students Statistic</h1>
                <ColumnChart data={data} labels={labels} />
            </div>

            <div className="w-[350px] h-[400px] bg-white shadow-lg rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4">Class Progress</h1>
                <ColumnChart data={data} labels={labels} />
            </div>

            <div className="w-[450px] h-[400px] bg-white shadow-lg rounded-md p-4">
                <div className='flex justify-between'>
                    <h1 className="text-lg font-semibold mb-4">Upcoming Courses</h1>
                    <button className="text-lg font-semibold mb-4">See all</button>
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
        </div>

    </div>
  )
}

export default Home
