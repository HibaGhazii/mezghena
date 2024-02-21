import { Circle } from 'rc-progress';
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

const CircleProgress = () => {

    const data = [
        {
            class: 'A',
            registre:69
        },
        {
            class: 'B',
            registre:79
        },
        {
            class: 'C',
            registre:67
        },
        {
            class: 'D',
            registre:87
        },
        {
            class: 'E',
            registre:46
        },
        {
            class: 'F',
            registre:23
        },
    ]

    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: 65,
        
    });

    React.useEffect(() => {
        const timer = setTimeout(() => {
            reset(); 
        }, 5000);

        return () => clearTimeout(timer);
    }, [reset]);

    return (
        <div className="flex flex-col overflow-y-scroll max-h-[350px]">
            {data.map((item, index) => (
                <div key={index} className='flex justify-between shadow-lg rounded-md p-2.5 mb-4 '>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-bg-toggle">Class {item.class}</h3>
                        <p>{item.registre} Registered</p>
                    </div>
                    
                    <div>
                        <CircularProgress size="lg" determinate value={value2} style={{ color: '#F5F5DC' }} thickness={6}>
                            <Typography>{value2}%</Typography>
                        </CircularProgress>
                    </div>
                </div> 
            ))}
        </div>
    );
};

export default CircleProgress;
