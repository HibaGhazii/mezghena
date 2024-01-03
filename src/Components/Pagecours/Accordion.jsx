import React, { useState } from 'react';

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
    <div className='p-3'>
      <div onClick={onToggle} className=' cursor-pointer flex items-center justify-between mb-2'>
        {children[0]}
        <img src={`/img/${isOpen ? 'arrowUp' : 'arrowDown'}.svg`} className='h-8 w-8'/>
      </div>
      {isOpen && <div>{children.slice(1)} </div>}
    </div>
  );
};

const AccordionTitle = ({ children }) => {
  return <div className='text-bg-toggle text-[20px]'>{children}</div>;
};

const AccordionContent = ({ children }) => {
  return <div className='text-sm text-gray-600'>{children}</div>;
};

Accordion.Panel = AccordionPanel;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
