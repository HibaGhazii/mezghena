import {useState} from 'react'
// import { Accordion } from 'flowbite-react';
import Accordion from './Accordion'

const Filter = ({posts}) => {
  // const [newCourse, setNewCourse] = useState();
  // //const [category, setCategory] = useState();
  // const [subCategory, setSubCategory] = useState();
  // const [level, setLevel] = useState();
  // const [language, setLanguage] = useState();
  // const [subTitle, setSubTitle] = useState();

  
    

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
                  <input type="checkbox" id='new-course' className='rounded-sm' /> (20) New Courses
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Sub-category</Accordion.Title>
              <Accordion.Content>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='dev' className='rounded-sm' /> (20) Web Development
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='design' className='rounded-sm' /> (20) Design
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Level</Accordion.Title>
              <Accordion.Content>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='beginner' className='rounded-sm' /> (20) Beginner
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='intermediate' className='rounded-sm' /> (20) Intermediate
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" id='advanced' className='rounded-sm' /> (20) Advanced
                </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Language</Accordion.Title>
              <Accordion.Content>
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='arabic' className='rounded-sm' /> (20) Arabic
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='french' className='rounded-sm' /> (20) French
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='english' className='rounded-sm' /> (20) English
                  </div>
              </Accordion.Content>
            </Accordion.Panel>
            <hr />

            <Accordion.Panel>
              <Accordion.Title>Sub-titles</Accordion.Title>
              <Accordion.Content>
                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-arabic' className='rounded-sm' /> (20) Arabic
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-french' className='rounded-sm' /> (20) French
                  </div>

                  <div className='flex items-center gap-2'>
                    <input type="checkbox" id='sub-english' className='rounded-sm' /> (20) English
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
