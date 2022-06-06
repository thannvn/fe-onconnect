import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import PackageAPI from 'app/api/package.api';
import {
  COMPANY_COUNTRY,
  PACKAGE,
} from 'app/modules/register-free/shared/const/options.const';
import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { Message } from 'shared/const/message.const';
import { UpgradePackageForm } from 'shared/const/pricing.const';
import SelectController from 'shared/form/select/select-controller.component';
import TextFieldController from 'shared/form/text-field/text-field-controller.component';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import './upgrade-package.style.scss';
import useMessageDialog from 'shared/blocks/message-dialog/message-dialog.component';
import usePaymentDialog from '../components/payment-dialog/payment-dialog.component';

function UpgradePackage() {
  const { t } = useTranslation();
  const user = useAppSelector(selectUser);
  const [loading, setLoading] = useState<boolean>(false);
  const { MessageDialog, open } = useMessageDialog();
  const { PaymentDialog, open: openPayment } = usePaymentDialog();

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
      companyName: yup
        .string()
        .required(t('register_free.company.company_name_require')),
      email: yup
        .string()
        .required(t('register_free.email.email_require'))
        .email(t('register_free.email.email_invalid')),
    })
  ).current;
  const { control, handleSubmit } = useForm<UpgradePackageForm>({
    defaultValues: {
      companyName: user.companyName,
      companyRegion: user.companyRegion,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      packageName: user.packageId,
      phoneNumber: user.phoneNumber,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: UpgradePackageForm) => {
    try {
      // setLoading(true);
      // await PackageAPI.upgradePackage({
      //   ...data,
      //   packageName:
      //     PACKAGE.find((item) => item.value === data.packageName)?.label || '',
      //   companyRegion:
      //     COMPANY_COUNTRY.find(
      //       (item) => String(item.value) === data.companyRegion
      //     )?.label || '',
      // });
      open({
        message: `Please pay attention to your phone, our consultant will contact you soon to confirm. 
          Then, you can click PAY NOW to payment.`,
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingComponent open={loading} />
      <Helmet>
        <title>Upgrade Package Page</title>
      </Helmet>

      <Container maxWidth="xl" className="upgrade-package">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography textAlign="center" className="font--48eb">
              Thank you for choosing ONCONNECT.
            </Typography>
            <Typography textAlign="center" className="font--16">
              Please fill out the form below, our ONCONNECT business
              representative will be in touch with you shortly.
            </Typography>
          </Grid>

          <Paper className="upgrade-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography className="mb--XXS require-field">
                    First name
                  </Typography>

                  <TextFieldController
                    name="firstName"
                    control={control}
                    className="onc-text-field"
                    placeholder={t('register_free.name.first_name')}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Typography className="mb--XXS require-field">
                    Last name
                  </Typography>

                  <TextFieldController
                    name="lastName"
                    control={control}
                    className="onc-text-field"
                    placeholder={t('register_free.name.last_name')}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  Email
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextFieldController
                  name="email"
                  control={control}
                  className="onc-text-field --width-100"
                  placeholder="name@work-email.com"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography className="mt--S mb--XXS require-field">
                  Phone number
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextFieldController
                  name="phoneNumber"
                  control={control}
                  className="onc-text-field --width-100"
                  placeholder={t('register_free.phone_number.label')}
                />
              </Grid>

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
                    className="onc-select --width-100"
                    options={COMPANY_COUNTRY}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography className="hint-text" sx={{ marginTop: '3px' }}>
                  {t('register_free.company.hint-text')}
                </Typography>
              </Grid>

              <div id="select-package">
                <Grid item xs={12}>
                  <Typography className="mt--S mb--XXS require-field">
                    {t('register_free.select_package')}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SelectController
                    name="packageName"
                    control={control}
                    className="onc-select --width-100"
                    options={PACKAGE}
                  />
                </Grid>
              </div>

              <Grid container spacing={2}>
                <Grid item xs={9}>
                  <Button
                    className="custom-button --no-transform"
                    variant="contained"
                    type="submit"
                  >
                    Contact Sales
                  </Button>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    className="pay-now"
                    variant="outlined"
                    type="button"
                    onClick={openPayment}
                  >
                    Pay Now
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>

      <MessageDialog />
      <PaymentDialog />
    </>
  );
}

export default UpgradePackage;
