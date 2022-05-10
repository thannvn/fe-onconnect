import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import StepperRegister from '../components/stepper-register/stepper-register.component';
import './register-free.style.scss';

function RegisterFree() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <Container maxWidth="xl" className="register-free">
      <Helmet>
        <title>{t('register_free.title')}</title>
      </Helmet>

      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        className="register-bar"
      >
        <Typography variant="h6">LOGO</Typography>

        <Stack
          direction="row"
          alignItems="center"
          className="login"
          spacing={0}
        >
          <Typography>Already have an account?</Typography>
          <Typography onClick={() => navigate('/login')} className="navigate">
            Sign in
          </Typography>
          <ArrowForwardIcon fontSize="small" />
        </Stack>
      </Stack>

      <StepperRegister activeStep={activeStep} />

      <div className="card mt--M">
        <Paper className="card-email">
          <Typography className="font--28b">Please enter your email</Typography>
          <Typography className="hint-text mt--XXS">
            We suggest that you use your work email address.
          </Typography>

          <form className="email-form">
            <Typography className="mt--S mb--XXS">Work email</Typography>

            <TextField
              type="email"
              className="onc-text-field"
              placeholder="name@work-email.com"
            />

            <Button className="continue-button" variant="contained">
              Continue
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  );
}

export default React.memo(RegisterFree);
