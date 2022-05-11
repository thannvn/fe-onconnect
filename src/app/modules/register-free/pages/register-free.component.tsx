import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Button,
  Container,
  Grid,
  Link,
  MenuItem,
  MenuProps,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import StepperRegister from '../components/stepper-register/stepper-register.component';
import './register-free.style.scss';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const CustomMenuProps: Partial<MenuProps> = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Please enter email.')
      .email('Please enter a valid email.'),
  })
  .required();

function RegisterFree() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);

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
        {activeStep ? (
          <Paper className="paper">
            <Typography className="font--28b">
              {t('register_free.enter_email')}
            </Typography>
            <Typography className="hint-text mt--XXS">
              {t('register_free.hint_text')}
            </Typography>

            <form className="form-paper" onSubmit={handleSubmit(onSubmit)}>
              <Typography className="mt--S mb--XXS">
                {t('register_free.work_email')}
              </Typography>

              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    id="email"
                    className="onc-text-field text-field-width-100"
                    placeholder="name@work-email.com"
                    error={!!fieldState.error}
                    helperText={
                      fieldState.error ? fieldState.error.message : ''
                    }
                  />
                )}
              />

              <Button
                className="continue-button"
                variant="contained"
                type="submit"
              >
                {t('common.continue')}
              </Button>
            </form>
          </Paper>
        ) : (
          <Paper className="paper">
            <Typography className="font--28b">
              {t('register_free.create_account')}
            </Typography>

            <Grid>
              <form className="form-paper">
                <Grid item xs={12}>
                  <Typography className="mt--S mb--XXS">
                    {t('register_free.name')}
                  </Typography>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          id="firstName"
                          className="onc-text-field"
                          placeholder={t('register_free.first_name')}
                          error={!!fieldState.error}
                          helperText={
                            fieldState.error ? fieldState.error.message : ''
                          }
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          id="lastName"
                          className="onc-text-field"
                          placeholder={t('register_free.last_name')}
                          error={!!fieldState.error}
                          helperText={
                            fieldState.error ? fieldState.error.message : ''
                          }
                        />
                      )}
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Typography className="mt--S mb--XXS">
                    {t('register_free.phone_number')}
                  </Typography>
                </Grid>

                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field, fieldState }) => (
                        <Select
                          {...field}
                          className="onc-select"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={10}
                          MenuProps={CustomMenuProps}
                        >
                          <MenuItem value={10} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={20} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={30} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={30} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={30} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={30} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                          <MenuItem value={30} className="phone-menu-item">
                            <Typography>+84</Typography>
                            <Typography>Vietnam</Typography>
                          </MenuItem>
                        </Select>
                      )}
                    />
                  </Grid>

                  <Grid item xs={10}>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({ field, fieldState }) => (
                        <TextField
                          {...field}
                          id="phoneNumber"
                          className="onc-text-field text-field-width-100"
                          placeholder={t('register_free.last_name')}
                          error={!!fieldState.error}
                          helperText={
                            fieldState.error ? fieldState.error.message : ''
                          }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Paper>
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
