import React from 'react'
import ColumnChart from './ColumnChart';
import DashboardNav from './DashboardNav';

const Home = () => {
    const data = [32, 23, 45, 19, 55];
    const labels = ['Class A', 'Class B', 'Class C', 'Class D'];

  return (

    <div className='pl-[340px] mr-[100px] mt-5 '>
        <DashboardNav/>

        <div className='bg-bg-toggle p-8 mt-10 text-white rounded-2xl w-full'>
            <p className='text-4xl font-bold pb-2'>Welcome back, John Doe</p>
            <p className='mr-[500px]'>You have 27 new student added to your domain. Please reach out to the Head Teacher if you want them excluded from your domain.</p>
        </div>

        <div className="flex justify-center items-center gap-12 mt-10">
            <div className="w-96 h-96 bg-white shadow-xl rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4">Students Statistic</h1>
                <ColumnChart data={data} labels={labels} />
            </div>

            <div className="w-96 h-96 bg-white shadow-md rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4">Class Progress</h1>
                <ColumnChart data={data} labels={labels} />
            </div>

            <div className="w-96 h-96 bg-white shadow-md rounded-md p-4">
                <h1 className="text-lg font-semibold mb-4">Upcoming Courses</h1>
                <ColumnChart data={data} labels={labels} />
            </div>
        </div>

    </div>
  )
}

export default Home
