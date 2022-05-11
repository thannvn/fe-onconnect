/* eslint-disable react/no-danger */
import { yupResolver } from '@hookform/resolvers/yup';
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
  Typography,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { DEFAULT_MENU, PHONE_CODE_MENU } from 'shared/const/menu-props.const';
import SelectController from 'shared/form/select/select-controller.component';
import TextFieldController from 'shared/form/text-field/text-field-controller.component';
import * as yup from 'yup';
import StepperRegister from '../components/stepper-register/stepper-register.component';
import {
  COMPANY_COUNTRY,
  PACKAGE,
  PHONE_CODE,
} from '../shared/const/options.const';
import './register-free.style.scss';

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
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneCode: 1,
      phoneNumber: '',
      companyName: '',
      companyCountry: 1,
      package: '',
    },
    resolver: yupResolver(schema),
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);

  const onSubmit = () => {
    setActiveStep(1);
  };

  const handleCutLabel = (value: number) => {
    const splitLabel = PHONE_CODE.find((item) => item.value === value)
      ?.label.split('(')
      .pop();

    return splitLabel?.substring(0, splitLabel.length - 1);
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
              {t('register_free.enter_email')}
            </Typography>
            <Typography className="hint-text mt--XXS">
              {t('register_free.hint_text')}
            </Typography>

            <form className="form-paper" onSubmit={handleSubmit(onSubmit)}>
              <Typography className="mt--S mb--XXS">
                {t('register_free.work_email')}
              </Typography>

              <TextFieldController
                controllerName="email"
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
          <Paper className="paper">
            <Typography className="font--28b">
              {t('register_free.create_account')}
            </Typography>

            <Grid>
              <form className="form-paper">
                <div id="name">
                  <Grid item xs={12}>
                    <Typography className="mt--S mb--XXS">
                      {t('register_free.name.your_name')}
                    </Typography>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <TextFieldController
                        controllerName="firstName"
                        control={control}
                        className="onc-text-field"
                        placeholder={t('register_free.name.first_name')}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextFieldController
                        controllerName="lastName"
                        control={control}
                        className="onc-text-field"
                        placeholder={t('register_free.name.last_name')}
                      />
                    </Grid>
                  </Grid>
                </div>

                <div id="phone-number">
                  <Grid item xs={12}>
                    <Typography className="mt--S mb--XXS">
                      {t('register_free.phone_number')}
                    </Typography>
                  </Grid>

                  <Grid container spacing={0}>
                    <Grid item xs={2.4}>
                      <SelectController
                        controllerName="phoneCode"
                        control={control}
                        className="onc-select width-100"
                        options={PHONE_CODE}
                        renderValue={(value) => handleCutLabel(value as number)}
                        MenuProps={PHONE_CODE_MENU}
                      />
                    </Grid>

                    <Grid item xs={9.6}>
                      <TextFieldController
                        controllerName="phoneNumber"
                        control={control}
                        className="onc-text-field width-100"
                        placeholder={t('register_free.phone_number')}
                      />
                    </Grid>
                  </Grid>
                </div>

                <div id="company">
                  <Grid item xs={12}>
                    <Typography className="mt--S mb--XXS">
                      {t('register_free.company.your_company')}
                    </Typography>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <TextFieldController
                        controllerName="companyName"
                        control={control}
                        className="onc-text-field"
                        placeholder={t('register_free.company.company_name')}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <SelectController
                        controllerName="companyCountry"
                        control={control}
                        className="onc-select width-100"
                        options={COMPANY_COUNTRY}
                        MenuProps={DEFAULT_MENU}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography className="hint-text" sx={{ marginTop: '3px' }}>
                      {t('register_free.company.hint-text')}
                    </Typography>
                  </Grid>
                </div>

                <div id="select-package">
                  <Grid item xs={12}>
                    <Typography className="mt--S mb--XXS">
                      {t('register_free.select_package')}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <SelectController
                      controllerName="package"
                      control={control}
                      className="onc-select width-100"
                      options={PACKAGE}
                      MenuProps={DEFAULT_MENU}
                    />
                  </Grid>
                </div>

                <Button
                  className="custom-button --no-transform"
                  variant="contained"
                  type="submit"
                >
                  {t('register_free.create_account_free')}
                </Button>

                <div
                  className="remark"
                  dangerouslySetInnerHTML={{
                    __html: t('register_free.remark', {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
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
