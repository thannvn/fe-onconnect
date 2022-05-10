import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import './stepper-register.style.scss';

const steps = ['Email', 'Create Account'];

interface StepperProps {
  activeStep: number;
}

function StepperRegister({ activeStep }: StepperProps) {
  return (
    <div className="stepper-register">
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default React.memo(StepperRegister);
