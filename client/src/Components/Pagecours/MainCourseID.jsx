import React, { useState } from 'react'
import arrowUp from '../assets/img/arrowUp.svg';
import arrowDown from '../assets/img/arrowDown.svg';
import { MdOutlinePlayCircleOutline  } from "react-icons/md";
    
    const Accordion = ({ children }) => {
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
            <div className=''> 
                <div onClick={onToggle} className='cursor-pointer flex items-center justify-between mb-2 '>
                    <div className='flex items-center'>
                        <img src={isOpen ? arrowUp : arrowDown} className='h-8 w-8'/>
                        {children[0]} 
                    </div>
                    <div>
                        <p className='p-1 text-sm text-gray-600'>
                            5 sessions • 14mn
                        </p>
                    </div>
                </div>
                {isOpen && <div>{children.slice(1)} </div>}
            </div>
        );
    };

    const AccordionTitle = ({ children }) => {
    return <div className='text-black font-semibold text-[20px] p-2 '>
                {children} 
            </div>;
    };

    const AccordionContent = ({ children }) => {
    return <div className='p-4 bg-white text-[14px] text-gray-800 '>    
                {children}
            </div>;
    };

const MainCourseID = () => {

  return (
    <div className='md:ml-44 my-6 md:my-10 mx-6 md:mx-0'>
        <div className='md:w-[60%] py-10 px-14 bg-light-blue/10 shadow-lg rounded-xl'>
          <p className='text-3xl font-bold mb-6'>What you will learn</p>
          <div className='flex gap-4 md:gap-12'>
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

          <div className='md:w-[60%] py-10'>
            <p className='text-2xl font-semibold text-center md:text-left'>This course contains:</p>
            <div className='flex flex-col md:flex-row items-center justify-between text-xs'> 
              <div className='flex gap-1 text-gray-600'>
                <p>75 sections •  </p>
                <p>635 sections •</p>
                <p>Total hours: 68h 04 min</p>
              </div>

              <div className='underline text-first-color'>
                <a href="#">How to start programming ?</a>
              </div>
            </div>

            <div className='bg-A7C5DC mt-5 rounded-xl border border-bg-toggle'>
              <div className=''>

                <Accordion>
                  <AccordionPanel>
                    <AccordionTitle>Getting Started: </AccordionTitle>
                    
                    <AccordionContent>
                        <div className='flex items-center justify-between hover:text-first-color cursor-pointer'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>
                        
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>

                    </AccordionContent>
                  </AccordionPanel>
                  <hr />

                  <AccordionPanel>
                    <AccordionTitle>Lorem Ipsum:</AccordionTitle>
                    
                    <AccordionContent> 
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <hr />

                  <AccordionPanel>
                    <AccordionTitle>Lorem Ipsum:</AccordionTitle>
                    
                    <AccordionContent>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <hr />

                  <AccordionPanel>
                    <AccordionTitle>Lorem Ipsum:</AccordionTitle>
                    
                    <AccordionContent>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <hr />

                  <AccordionPanel>
                    <AccordionTitle>Lorem Ipsum:</AccordionTitle>
                    
                    <AccordionContent>
                        <div className='flex items-center justify-between '>
                            <div className='flex items-center gap-2 '> 
                                <MdOutlinePlayCircleOutline  className='h-4 w-4 text-first-color'/>
                                <p>30-day satisfaction or money-back guarantee</p>
                            </div>
                            <p>03:25</p>
                        </div>
                    </AccordionContent>
                  </AccordionPanel>
                  <hr />
                </Accordion>

                </div>
             </div>

          <div>

          </div>
        </div>
   </div>
   )};
export default MainCourseID