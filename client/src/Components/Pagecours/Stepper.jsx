import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({steps, activeStep}) => {

  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex md:ml-36"> 
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${activeStep === i + 1 && "active"} ${
              (i + 1 < activeStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < activeStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-bg-toggle text-[18px] font-semibold mt-2">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;