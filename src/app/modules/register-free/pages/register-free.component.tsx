/* eslint-disable global-require */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import TextFieldController from 'shared/form/text-field/text-field-controller.component';
import * as yup from 'yup';
import CreateAccountForm from '../components/create-account-form/create-account-form.component';
import StepperRegister from '../components/stepper-register/stepper-register.component';
import './register-free.style.scss';

interface EmailForm {
  email: string;
}

function RegisterFree() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);
  const schema = useRef(
    yup.object().shape({
      email: yup
        .string()
        .required(t('register_free.email.email_require'))
        .email(t('register_free.email.email_invalid')),
    })
  ).current;
  const { control, handleSubmit, watch } = useForm<EmailForm>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setActiveStep(1);
  };

  const handleRedirect = (url: string) => {
    navigate(url);
  };

  return (
    <Container maxWidth="xl" className="register-free">
      <Helmet>
        <title>{t('register_free.page_title')}</title>
      </Helmet>

      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        className="register-bar"
      >
        <img
          className="logo"
          src={require('app/assets/images/logo.png')}
          alt="logo"
          onClick={() => handleRedirect('/')}
        />

        <Stack
          direction="row"
          alignItems="center"
          className="login"
          spacing={0}
        >
          <Typography>{t('register_free.already_account')}</Typography>
          <Link to="/login" className="custom-link font--16">
            {t('common.sign_in')}
          </Link>
          <ArrowForwardIcon fontSize="small" />
        </Stack>
      </Stack>

      <StepperRegister activeStep={activeStep} />

      <div className="card-form mt--M">
        {!activeStep ? (
          <Paper className="paper">
            <Typography className="font--28b">
              {t('register_free.email.enter_email')}
            </Typography>
            <Typography className="hint-text mt--XXS">
              {t('register_free.email.hint_text')}
            </Typography>

            <form className="form-paper" onSubmit={handleSubmit(onSubmit)}>
              <Typography className="mt--S mb--XXS require-field">
                {t('register_free.email.work_email')}
              </Typography>

              <TextFieldController
                name="email"
                control={control}
                className="onc-text-field width-100"
                placeholder="name@work-email.com"
              />

              <Button
                className="custom-button --no-transform"
                variant="contained"
                type="submit"
              >
                {t('common.continue')}
              </Button>
            </form>
          </Paper>
        ) : (
          <CreateAccountForm email={watch('email')} />
        )}
      </div>

      <Stack
        direction="row"
        spacing={0.5}
        alignItems="center"
        justifyContent="center"
        className="register-footer"
      >
        <Link to="/" className="custom-link --underline">
          Terms and Conditions
        </Link>
        <span>|</span>
        <Link to="/" className="custom-link --underline">
          Privacy Policy
        </Link>
        <span>|</span>
        <Typography className="font--14">
          ©2021 ONCONNECT All rights reserved.
        </Typography>
      </Stack>
    </Container>
  );
}

export default React.memo(RegisterFree);
