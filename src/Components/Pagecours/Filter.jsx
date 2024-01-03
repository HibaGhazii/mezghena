import React from 'react'
// import { Accordion } from 'flowbite-react';
import Accordion from './Accordion'

const Filter = () => {
  return (
    <div>
        <div>
            <button className='bg-first-color text-white rounded-md text-lg font-semibold px-8 py-2'>Filter</button>
            
        </div>
        <div className='mr-6 mt-5'>
          <Accordion>

            <Accordion.Panel>
              <Accordion.Title>New Courses</Accordion.Title>
              <Accordion.Content>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='new-course' className='rounded-sm' /> New Course
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Sub-category</Accordion.Title>
              <Accordion.Content>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='dev' className='rounded-sm' /> Web Development
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='design' className='rounded-sm' /> Design
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Level</Accordion.Title>
              <Accordion.Content>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='beginner' className='rounded-sm' /> Beginner
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='intermediate' className='rounded-sm' /> Intermediate
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='advanced' className='rounded-sm' /> Advanced
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Language</Accordion.Title>
              <Accordion.Content>
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='arabic' className='rounded-sm' /> Arabic
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='french' className='rounded-sm' /> French
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='english' className='rounded-sm' /> English
                  </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Sub-titles</Accordion.Title>
              <Accordion.Content>
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-arabic' className='rounded-sm' /> Arabic
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-french' className='rounded-sm' /> French
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-english' className='rounded-sm' /> English
                  </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />
          </Accordion>
        </div>
    </div>
  )
}

export default Filter
