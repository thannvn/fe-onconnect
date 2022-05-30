import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './stepper-register.style.scss';

interface StepperProps {
  activeStep: number;
}

function StepperRegister({ activeStep }: StepperProps) {
  const { t } = useTranslation();
  const steps = [
    t('register_free.email.label'),
    t('register_free.create_account'),
  ];
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
