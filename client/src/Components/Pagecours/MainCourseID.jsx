import React from 'react'
import Accordion from './Accordion'

const MainCourseID = ({children}) => {

  const [openPanels, setOpenPanels] = useState([]);

  const togglePanel = (panelId) => {
    if (openPanels.includes(panelId)) {
      setOpenPanels(openPanels.filter((id) => id !== panelId));
    } else {
      setOpenPanels([...openPanels, panelId]);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openPanels.includes(index),
          onToggle: () => togglePanel(index),
        })
      )}
    </div>
  );
};

const AccordionPanel = ({ isOpen, onToggle, children }) => {
  return (
    <div className='p-3'>
      <div onClick={onToggle} className=' cursor-pointer flex items-center justify-between mb-2'>
        {children[0]}
        <img src={isOpen ? arrowUp : arrowDown} className='h-8 w-8'/>
      </div>
      {isOpen && <div>{children.slice(1)} </div>}
    </div>
  );
};

const AccordionTitle = ({ children }) => {
  return <div className='text-bg-toggle text-[20px]'>{children}</div>;
};

const AccordionContent = ({ children }) => {
  return <div className=' pl-2 text-[14px] text-gray-500'>{children}</div>;
};

Accordion.Panel = AccordionPanel;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;



  return (
    <div className='md:ml-32 my-6 md:my-10 mx-6 md:mx-0'>
        <div className='md:w-[55%] p-10 bg-light-blue/10 shadow-lg rounded-xl'>
          <p className='text-3xl font-bold mb-6'>What you will learn</p>
          <div className='flex gap-4 md:gap-12 '>
            <ol className='list-disc pl-4 flex flex-col gap-3'> 
              <li>Learn to program from scratch.</li>
              <li>Create full projects</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
            </ol>
            <ol className='list-disc pl-4 flex flex-col gap-3'>
              <li>Learn to program from scratch.</li>
              <li>Create full projects</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
              <li>Lorem Ipsum is simply dummy text of the printing</li>
            </ol>
          </div>
        </div>

          <div className='md:w-[55%] py-10'>
            <p className='text-2xl font-semibold text-center md:text-left'>This course contains:</p>
            <div className='flex flex-col md:flex-row items-center justify-between text-xs'> 
              <div className='flex gap-1 text-gray-600'>
                <p>75 sections •  </p>
                <p>635 sections •</p>
                <p>Total hours: 68h 04 min</p>
              </div>

              <div className=' underline text-first-color'>
                <a href="#">How to start programming ?</a>
              </div>
            </div>

            <div className=' bg-light-blue/40 rounded-xl'>
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

          <div>

          </div>
        </div>
    </div>
  )

export default MainCourseID