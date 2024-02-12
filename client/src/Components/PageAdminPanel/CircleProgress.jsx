import { Circle } from 'rc-progress';
import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';

const CircleProgress = () => {

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
    <div className="flex flex-col">
        <div className='flex justify-between shadow-lg rounded-md p-2.5'>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-bg-toggle">Class A</h3>
                <p>78 Registered</p>
            </div>
            
            <div>
                <CircularProgress size="lg" determinate value={value2} style={{ color: '#F5F5DC' }} thickness={6}>
                    <Typography>{value2}%</Typography>
                </CircularProgress>
            </div>
        </div> 

        <div className='flex justify-between shadow-lg rounded-md p-2.5'>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-bg-toggle">Class B</h3>
                <p>78 Registered</p>
            </div>
            
            <div>
                <CircularProgress size="lg" determinate value={value2} thickness={6}>
                    <Typography>{value2}%</Typography> 
                </CircularProgress> 
            </div> 
        </div>

        <div className='flex justify-between shadow-lg rounded-md p-2.5'>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-bg-toggle">Class C</h3>
                <p>78 Registered</p>
            </div>
            
            <div>
                <CircularProgress size="lg" determinate value={value2} thickness={6}>
                    <Typography>{value2}%</Typography>
                </CircularProgress>
            </div>
        </div>

        <div className='flex justify-between shadow-lg rounded-md p-2.5'>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-bg-toggle">Class D</h3>
                <p>78 Registered</p>
            </div>
            
            <div>
                <CircularProgress size="lg" determinate value={value2} thickness={6}>
                    <Typography>{value2}%</Typography>
                </CircularProgress>
            </div>
        </div>
    </div>
  );
};

export default CircleProgress;

