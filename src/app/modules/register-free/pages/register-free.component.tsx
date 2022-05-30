/* eslint-disable react/no-danger */
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
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
        <Typography variant="h6">LOGO</Typography>

        <Stack
          direction="row"
          alignItems="center"
          className="login"
          spacing={0}
        >
          <Typography>{t('register_free.already_account')}</Typography>
          <Typography onClick={() => navigate('/login')} className="navigate">
            {t('common.sign_in')}
          </Typography>
          <ArrowForwardIcon fontSize="small" />
        </Stack>
      </Stack>

      <StepperRegister activeStep={activeStep} />

      <div className="card mt--M">
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
        <Link href="/" underline="hover">
          Terms and Conditions
        </Link>
        <span>|</span>
        <Link href="/" underline="hover">
          Privacy Policy
        </Link>
        <span>|</span>
        <Typography className="font--14">
          ©2021 CINNOX All rights reserved.
        </Typography>
      </Stack>
    </Container>
  );
}

export default React.memo(RegisterFree);
