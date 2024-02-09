import React from 'react';
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { useState } from 'react';
import classNames from 'classnames'; 

const TurnOnOff = () => {
    const [isSelected, setIsSelected] = useState(true);

  return (
    <div>
      <div className='flex gap-2'> 
                <MdLightMode className='mt-1 text-bg-toggle w-6 h-6 mr-2' />  
                
                <div onClick={() => setIsSelected(!isSelected)} className={classNames('mt-2 flex w-12 h-4 bg-first-color/50 rounded-full shadow-xl', 
            isSelected && 'bg-blue-900')}> 
                    <span className={classNames( 'h-7 w-7 -mt-1.5 shadow-xl bg-white rounded-full cursor-pointer', 
            isSelected && 'ml-6')}></span>
                </div>
            
                <MdNightlightRound className='mt-1 text-bg-toggle w-6 h-6'/>
        </div>
    </div>
  )
}

export default TurnOnOff;
