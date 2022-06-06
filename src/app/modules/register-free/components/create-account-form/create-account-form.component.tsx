/* eslint-disable react/no-danger */
import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PHONE_CODE_MENU } from 'shared/const/menu-props.const';
import SelectController from 'shared/form/select/select-controller.component';
import TextFieldController from 'shared/form/text-field/text-field-controller.component';
import '../../pages/register-free.style.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UserForm } from 'shared/const/user.const';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { Message } from 'shared/const/message.const';
import { useNavigate } from 'react-router-dom';
import AuthenticationAPI from 'app/api/authentication.api';
import {
  COMPANY_COUNTRY,
  LANGUAGE_USE,
  PACKAGE,
  PHONE_CODE,
} from '../../shared/const/options.const';

interface CreateAccountFormProps {
  email: string;
}

function CreateAccountForm({ email }: CreateAccountFormProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const schema = useRef(
    yup.object().shape({
      firstName: yup
        .string()
        .required(t('register_free.name.first_name_require')),
      lastName: yup
        .string()
        .required(t('register_free.name.last_name_require')),
      phoneNumber: yup
        .string()
        .required(t('register_free.phone_number.phone_number_require')),
      switchboardName: yup
        .string()
        .required(t('register_free.switchboard_name.switchboard_name_require')),
      packageId: yup
        .string()
        .required(t('register_free.switchboard_name.switchboard_name_require')),
      language: yup
        .string()
        .required(t('register_free.language.language_require')),
      companyName: yup
        .string()
        .required(t('register_free.company.company_name_require')),
      companyRegion: yup
        .string()
        .required(t('register_free.company.company_region_require')),
    })
  ).current;
  const { control, handleSubmit } = useForm<UserForm>({
    defaultValues: {
      email,
      firstName: '',
      lastName: '',
      phoneCode: 1,
      phoneNumber: '',
      companyName: '',
      companyRegion: '',
      packageId: '',
      language: '',
      switchboardName: '',
    },
    resolver: yupResolver(schema),
  });

  const handleCutLabel = (value: number) => {
    const splitLabel = PHONE_CODE.find((item) => item.value === value)
      ?.label.split('(')
      .pop();

    return splitLabel?.substring(0, splitLabel.length - 1);
  };

  const onSubmit = async (data: UserForm) => {
    try {
      setLoading(true);
      const phoneCodeLabel = data.phoneCode
        ? handleCutLabel(Number(data.phoneCode))
        : '';
      await AuthenticationAPI.registerFree({
        ...data,
        phoneNumber: phoneCodeLabel + data.phoneNumber,
      });

      addToast({ message: Message.REGISTER_SUCCESS, type: 'success' });
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingComponent open={loading} />}
      <Paper className="paper">
        <Typography className="font--28b">
          {t('register_free.create_account')}
        </Typography>

        <Grid>
          <form className="form-paper" onSubmit={handleSubmit(onSubmit)}>
            <div id="name">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.name.your_name')}
                </Typography>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextFieldController
                    name="firstName"
                    control={control}
                    className="onc-text-field"
                    placeholder={t('register_free.name.first_name')}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextFieldController
                    name="lastName"
                    control={control}
                    className="onc-text-field"
                    placeholder={t('register_free.name.last_name')}
                  />
                </Grid>
              </Grid>
            </div>

            <div id="phone-number">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.phone_number.label')}
                </Typography>
              </Grid>

              <Grid container spacing={0}>
                <Grid item xs={2.4}>
                  <SelectController
                    name="phoneCode"
                    control={control}
                    className="onc-select width-100"
                    options={PHONE_CODE}
                    renderValue={(value) => handleCutLabel(value as number)}
                    MenuProps={PHONE_CODE_MENU}
                  />
                </Grid>

                <Grid item xs={9.6}>
                  <TextFieldController
                    name="phoneNumber"
                    control={control}
                    className="onc-text-field width-100"
                    placeholder={t('register_free.phone_number.label')}
                  />
                </Grid>
              </Grid>
            </div>

            <div id="company">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.company.your_company')}
                </Typography>
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextFieldController
                    name="companyName"
                    control={control}
                    className="onc-text-field"
                    placeholder={t('register_free.company.company_name')}
                  />
                </Grid>

                <Grid item xs={6}>
                  <SelectController
                    name="companyRegion"
                    control={control}
                    className="onc-select width-100"
                    options={COMPANY_COUNTRY}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography className="hint-text" sx={{ marginTop: '3px' }}>
                  {t('register_free.company.hint-text')}
                </Typography>
              </Grid>
            </div>

            <div id="switchboard-name">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.switchboard_name.label')}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextFieldController
                  name="switchboardName"
                  control={control}
                  className="onc-text-field width-100"
                  placeholder={t('register_free.switchboard_name.placeholder')}
                />
              </Grid>
            </div>

            <div id="select-package">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.select_package')}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <SelectController
                  name="packageId"
                  control={control}
                  className="onc-select width-100"
                  options={PACKAGE}
                />
              </Grid>
            </div>

            <div id="select-language">
              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  {t('register_free.language.label')}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <SelectController
                  name="language"
                  control={control}
                  className="onc-select width-100"
                  options={LANGUAGE_USE}
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
    </>
  );
}

export default React.memo(CreateAccountForm);
