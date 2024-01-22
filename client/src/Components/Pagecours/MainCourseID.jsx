import React, { useEffect, useState, useRef } from 'react'
import arrowUp from '../assets/img/arrowUp.svg';
import arrowDown from '../assets/img/arrowDown.svg';
import { MdOutlinePlayCircleOutline  } from "react-icons/md";
import LessonDesc from './LessonDesc';
    
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
        <div>
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
          {isOpen && <div>{children.slice(1)}</div>}
        </div>
      );
    };
    

    const AccordionTitle = ({ children }) => {
    return <div className='text-black font-semibold text-[20px] p-2 '>
                {children} 
            </div>;
    };

    const AccordionContent = ({ children }) => {
    return <div className=' flex items-center gap-2 p-4 bg-white text-[14px] text-gray-800 '>    
                {children}
            </div>;
    };

    

    const MainCourseID = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [accordionOpenPanels, setAccordionOpenPanels] = useState([]);
    
      const generatePanelId = (sectionIndex) => `${sectionIndex}`;
    
      const toggleAccordionPanel = (sectionIndex) => {
        const panelId = generatePanelId(sectionIndex);
        if (accordionOpenPanels.includes(panelId)) {
          setAccordionOpenPanels(accordionOpenPanels.filter((id) => id !== panelId));
        } else {
          setAccordionOpenPanels([...accordionOpenPanels, panelId]);
        }
      };
    
      const renderAccordionPanels = () => {
        const totalSectionsToShow = isOpen ? Infinity : 5;
        const accordionData = [
          { title: 'Getting Started', content: 'Content for Getting Started section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
          { title: 'Lorem Ipsum', content: 'Content for Lorem Ipsum section' },
        ];
        return (
          <>
            {accordionData.slice(0, totalSectionsToShow).map((section, index) => (
              <React.Fragment key={index}>
                <AccordionPanel
                  isOpen={accordionOpenPanels.includes(generatePanelId(index))}
                  onToggle={() => toggleAccordionPanel(index)}
                >
                  <AccordionTitle>{section.title}</AccordionTitle>
                  <AccordionContent>
                    <MdOutlinePlayCircleOutline className='text-first-color h-4 w-4'/>
                    {section.content}
                    </AccordionContent>
                </AccordionPanel>
                <hr />
              </React.Fragment>
            ))}
          </>
        );
      };

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
                <Accordion>{renderAccordionPanels()}</Accordion>
              </div>
                
                </div>
                <button
          onClick={() => {
            setIsOpen(!isOpen);
            // Reset accordion panels when toggling the main section
            setAccordionOpenPanels([]);
          }}
          className='w-full text-white text-md bg-first-color mt-4 py-3 rounded-lg'
        >
          {isOpen ? 'View less sections' : 'View more sections'}
        </button>
                  
             <div>
   
               <LessonDesc/>
             </div>
           </div>
      </div>
      )};
export default MainCourseID